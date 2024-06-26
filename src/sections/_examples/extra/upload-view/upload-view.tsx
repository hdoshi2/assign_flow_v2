'use client';

import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';

import { fData } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { Upload, UploadBox, UploadAvatar } from 'src/components/upload';

import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export default function View() {
  const preview = useBoolean();

  const [files, setFiles] = useState<(File | string)[]>([]);

  const [file, setFile] = useState<File | string | null>(null);

  const [avatarUrl, setAvatarUrl] = useState<File | string | null>(null);

  const handleDropSingleFile = useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    if (newFile) {
      setFile(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  }, []);

  const handleDropAvatar = useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    if (newFile) {
      setAvatarUrl(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  }, []);

  const handleDropMultiFile = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((newFile) =>
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        ),
      ]);
    },
    [files]
  );

  const handleRemoveFile = (inputFile: File | string) => {
    const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
    setFiles(filesFiltered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const DEMO = [
    {
      name: 'Upload Multi File',
      component: (
        <>
          <FormControlLabel
            control={<Switch checked={preview.value} onClick={preview.onToggle} />}
            label="Show Thumbnail"
            sx={{ mb: 3, width: 1, justifyContent: 'flex-end' }}
          />
          <Upload
            multiple
            thumbnail={preview.value}
            files={files}
            onDrop={handleDropMultiFile}
            onRemove={handleRemoveFile}
            onRemoveAll={handleRemoveAllFiles}
            onUpload={() => console.info('ON UPLOAD')}
          />
        </>
      ),
    },
    {
      name: 'Upload Single File',
      component: (
        <Upload file={file} onDrop={handleDropSingleFile} onDelete={() => setFile(null)} />
      ),
    },
    {
      name: 'Upload Avatar',
      component: (
        <UploadAvatar
          file={avatarUrl}
          onDrop={handleDropAvatar}
          validator={(fileData) => {
            if (fileData.size > 1000000) {
              return {
                code: 'file-too-large',
                message: `File is larger than ${fData(1000000)}`,
              };
            }
            return null;
          }}
          helperText={
            <Typography
              variant="caption"
              sx={{
                mt: 3,
                mx: 'auto',
                display: 'block',
                textAlign: 'center',
                color: 'text.disabled',
              }}
            >
              Allowed *.jpeg, *.jpg, *.png, *.gif
              <br /> max size of {fData(3145728)}
            </Typography>
          }
        />
      ),
    },
    {
      name: 'Upload Box',
      component: (
        <Stack direction="row" spacing={2}>
          <UploadBox />
          <UploadBox
            placeholder={
              <Stack spacing={0.5} alignItems="center">
                <Iconify icon="eva:cloud-upload-fill" width={40} />
                <Typography variant="body2">Upload file</Typography>
              </Stack>
            }
            sx={{ flexGrow: 1, height: 'auto', py: 2.5, mb: 3 }}
          />
        </Stack>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Upload"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Upload' },
          ]}
          moreLink={['https://react-dropzone.js.org/#section-basic-example']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
