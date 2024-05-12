import SimpleBar from 'simplebar-react';

import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({
  minWidth: 0,
  minHeight: 0,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  '& .simplebar-scrollbar': {
    '&::before': {
      backgroundColor: theme.palette.grey[600],
    },
    '&.simplebar-visible:before': {
      opacity: 0.4,
    },
  },
}));
