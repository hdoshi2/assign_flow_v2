import { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';

import { SvgPath } from './svg-path';
import { AnimateButton } from './buttons';
import { AnimatedCountUpNumber } from './count-up-number';
import { ComponentBlock } from '../../../component-block';

// ----------------------------------------------------------------------

export function AnimateOther() {
  const [count, setCount] = useState(0);

  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
      }}
    >
      <ComponentBlock title="Button Click" sx={{ gap: 3 }}>
        <AnimateButton />
      </ComponentBlock>

      <ComponentBlock title="Path">
        <IconButton
          onClick={() => setCount(count + 1)}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <Iconify icon="eva:refresh-fill" />
        </IconButton>

        <SvgPath key={count} />
      </ComponentBlock>

      <ComponentBlock title="Path" sx={{ flexDirection: 'column' }}>
        <IconButton
          onClick={() => setCount(count + 1)}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <Iconify icon="eva:refresh-fill" />
        </IconButton>

        <AnimatedCountUpNumber key={count} />
      </ComponentBlock>
    </Box>
  );
}
