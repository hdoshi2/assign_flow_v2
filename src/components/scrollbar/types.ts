import { Props } from 'simplebar-react';

import { Theme, SxProps } from '@mui/material/styles';

// ----------------------------------------------------------------------

export interface ScrollbarProps extends Props {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  slotProps?: {
    wrapper?: SxProps<Theme>;
    contentWrapper?: SxProps<Theme>;
    content?: Partial<SxProps<Theme>>;
    scrollbar?: SxProps<Theme>;
    track?: SxProps<Theme>;
  };
}
