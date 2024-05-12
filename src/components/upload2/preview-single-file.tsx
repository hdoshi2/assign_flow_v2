import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import Image from '../image';
import { UploadProps } from './types';

// ----------------------------------------------------------------------

type SingleFilePreviewProps = {
  file?: UploadProps['file'];
};

export default function SingleFilePreview({ file }: SingleFilePreviewProps) {
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (!file) return;

    if (typeof file === 'string') {
      setPreview(file);
    } else if (file instanceof File) {
      setPreview(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <Box
      sx={{
        p: 1,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        position: 'absolute',
      }}
    >
      <Image
        alt="file preview"
        src={preview}
        sx={{
          width: 1,
          height: 1,
          borderRadius: 1,
        }}
      />
    </Box>
  );
}
