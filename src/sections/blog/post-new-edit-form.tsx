import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useEffect, useCallback } from 'react';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { _tags } from 'src/_mock';

import { toast } from 'src/components/snackbar';
import { CustomFile } from 'src/components/upload';
import FormProvider, {
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';

import { IPostItem } from 'src/types/blog';

import PostDetailsPreview from './post-details-preview';

// ----------------------------------------------------------------------

type Props = {
  currentPost?: IPostItem;
};

export default function PostNewEditForm({ currentPost }: Props) {
  const router = useRouter();

  const preview = useBoolean();

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    content: Yup.string().required('Content is required'),
    coverUrl: Yup.mixed<any>().nullable().required('Cover is required'),
    tags: Yup.array().min(2, 'Must have at least 2 tags'),
    metaKeywords: Yup.array().min(1, 'Meta keywords is required'),
    // not required
    metaTitle: Yup.string(),
    metaDescription: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentPost?.title || '',
      description: currentPost?.description || '',
      content: currentPost?.content || '',
      coverUrl: currentPost?.coverUrl || null,
      tags: currentPost?.tags || [],
      metaKeywords: currentPost?.metaKeywords || [],
      metaTitle: currentPost?.metaTitle || '',
      metaDescription: currentPost?.metaDescription || '',
    }),
    [currentPost]
  );

  const methods = useForm({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentPost) {
      reset(defaultValues);
    }
  }, [currentPost, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      preview.onFalse();
      toast.success(currentPost ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.post.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('coverUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('coverUrl', null);
  }, [setValue]);

  const renderDetails = (
    <Card>
      <CardHeader title="Details" subheader="Title, short description, image..." sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <RHFTextField name="title" label="Post Title" />

        <RHFTextField name="description" label="Description" multiline rows={3} />

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Content</Typography>
          <RHFEditor name="content" />
        </Stack>

        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Cover</Typography>
          <RHFUpload
            name="coverUrl"
            maxSize={3145728}
            onDrop={handleDrop}
            onDelete={handleRemoveFile}
          />
        </Stack>
      </Stack>
    </Card>
  );

  const renderProperties = (
    <Card>
      <CardHeader
        title="Properties"
        subheader="Additional functions and attributes..."
        sx={{ mb: 3 }}
      />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <RHFAutocomplete
          name="tags"
          label="Tags"
          placeholder="+ Tags"
          multiple
          freeSolo
          options={_tags.map((option) => option)}
          getOptionLabel={(option) => option}
          renderOption={(props, option) => (
            <li {...props} key={option}>
              {option}
            </li>
          )}
          renderTags={(selected, getTagProps) =>
            selected.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={option}
                label={option}
                size="small"
                color="info"
                variant="soft"
              />
            ))
          }
        />

        <RHFTextField name="metaTitle" label="Meta title" />

        <RHFTextField
          name="metaDescription"
          label="Meta description"
          fullWidth
          multiline
          rows={3}
        />

        <RHFAutocomplete
          name="metaKeywords"
          label="Meta keywords"
          placeholder="+ Keywords"
          multiple
          freeSolo
          disableCloseOnSelect
          options={_tags.map((option) => option)}
          getOptionLabel={(option) => option}
          renderOption={(props, option) => (
            <li {...props} key={option}>
              {option}
            </li>
          )}
          renderTags={(selected, getTagProps) =>
            selected.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={option}
                label={option}
                size="small"
                color="info"
                variant="soft"
              />
            ))
          }
        />

        <FormControlLabel control={<Switch defaultChecked />} label="Enable comments" />
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack direction="row" alignItems="center" flexWrap="wrap">
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Publish"
        sx={{ flexGrow: 1, pl: 3 }}
      />

      <Button color="inherit" variant="outlined" size="large" onClick={preview.onTrue}>
        Preview
      </Button>

      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={isSubmitting}
        sx={{ ml: 2 }}
      >
        {!currentPost ? 'Create Post' : 'Save Changes'}
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack
        spacing={5}
        sx={{
          mx: 'auto',
          maxWidth: { xs: 720, xl: 880 },
        }}
      >
        {renderDetails}

        {renderProperties}

        {renderActions}
      </Stack>

      <PostDetailsPreview
        title={values.title}
        content={values.content}
        description={values.description}
        coverUrl={
          typeof values.coverUrl === 'string'
            ? values.coverUrl
            : `${(values.coverUrl as CustomFile)?.preview}`
        }
        //
        open={preview.value}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={preview.onFalse}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
}