import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { fData } from 'src/utils/format-number';

import Iconify from '../iconify';
import { varFade } from '../animate';
import { UploadProps } from './types';
import FileThumbnail, { fileData } from '../file-thumbnail';

// ----------------------------------------------------------------------

type MultiFilePreviewProps = Pick<UploadProps, 'files' | 'thumbnail' | 'sx' | 'onRemove'>;

export default function MultiFilePreview({
  thumbnail,
  files,
  onRemove,
  sx,
}: MultiFilePreviewProps) {
  const [preview, setPreview] = useState<UploadProps['files']>([]);

  useEffect(() => {
    if (files?.length) {
      const newFiles = files.map((file) =>
        typeof file === 'string'
          ? file
          : Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
      );

      setPreview(newFiles);
    }
  }, [files]);

  return (
    <AnimatePresence initial={false}>
      {preview?.map((file) => {
        const { key: keyId, name, size } = fileData(file);

        if (thumbnail) {
          return (
            <Stack
              key={keyId}
              component={m.div}
              {...varFade().inUp}
              initial={false}
              alignItems="center"
              display="inline-flex"
              justifyContent="center"
              sx={{
                m: 0.5,
                width: 80,
                height: 80,
                borderRadius: 1.25,
                overflow: 'hidden',
                position: 'relative',
                border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
                ...sx,
              }}
            >
              <FileThumbnail
                tooltip
                imageView
                file={file}
                sx={{ position: 'absolute' }}
                imgSx={{ position: 'absolute' }}
              />

              {onRemove && (
                <IconButton
                  size="small"
                  onClick={() => onRemove(file)}
                  sx={{
                    p: 0.5,
                    top: 4,
                    right: 4,
                    position: 'absolute',
                    color: 'common.white',
                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
                    '&:hover': {
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                    },
                  }}
                >
                  <Iconify icon="mingcute:close-line" width={14} />
                </IconButton>
              )}
            </Stack>
          );
        }

        return (
          <Stack
            key={keyId}
            component={m.div}
            {...varFade().inUp}
            initial={false}
            spacing={2}
            direction="row"
            alignItems="center"
            sx={{
              my: 1,
              py: 1,
              px: 1.5,
              borderRadius: 1,
              border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
              ...sx,
            }}
          >
            <FileThumbnail file={file} />

            <ListItemText
              primary={name}
              secondary={fData(size)}
              secondaryTypographyProps={{
                component: 'span',
                typography: 'caption',
              }}
            />

            {onRemove && (
              <IconButton size="small" onClick={() => onRemove(file)}>
                <Iconify icon="mingcute:close-line" width={16} />
              </IconButton>
            )}
          </Stack>
        );
      })}
    </AnimatePresence>
  );
}