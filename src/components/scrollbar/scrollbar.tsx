import { memo, forwardRef } from 'react';

import Box from '@mui/material/Box';

import { ScrollbarProps } from './types';
import { StyledScrollbar } from './styles';
import { scrollbarClasses } from './classes';

// ----------------------------------------------------------------------

const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ slotProps, children, sx, ...other }, ref) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (mobile) {
      return (
        <Box
          ref={ref}
          className={scrollbarClasses.root}
          sx={{
            overflow: 'auto',
            ...sx,
          }}
          {...other}
        >
          {children}
        </Box>
      );
    }

    return (
      <StyledScrollbar
        scrollableNodeProps={{
          ref,
        }}
        clickOnTrack={false}
        className={scrollbarClasses.root}
        sx={{
          '& .simplebar-wrapper': slotProps?.wrapper as React.CSSProperties,
          '& .simplebar-content-wrapper': slotProps?.contentWrapper as React.CSSProperties,
          '& .simplebar-content': slotProps?.content as React.CSSProperties,
          '& .simplebar-track': slotProps?.content as React.CSSProperties,
          '& .simplebar-scrollbar::before': slotProps?.scrollbar as React.CSSProperties,
          ...sx,
        }}
        {...other}
      >
        {children}
      </StyledScrollbar>
    );
  }
);

export default memo(Scrollbar);
