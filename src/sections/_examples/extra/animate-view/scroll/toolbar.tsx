import IconButton from '@mui/material/IconButton';
import Stack, { StackProps } from '@mui/material/Stack';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = StackProps & {
  onRefresh: VoidFunction;
};

export function Toolbar({ onRefresh, ...other }: Props) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="flex-end" {...other}>
      <IconButton onClick={onRefresh}>
        <Iconify icon="eva:refresh-fill" />
      </IconButton>
    </Stack>
  );
}
