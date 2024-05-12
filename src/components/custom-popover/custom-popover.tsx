import { PaperProps } from '@mui/material/Paper';
import { listClasses } from '@mui/material/List';
import { menuItemClasses } from '@mui/material/MenuItem';
import Popover, { PopoverOrigin } from '@mui/material/Popover';

import { getPosition } from './utils';
import { StyledArrow } from './styles';
import { CustomPopoverProps } from './types';

// ----------------------------------------------------------------------

export default function CustomPopover({
  open,
  children,
  slotProps,
  hiddenArrow,
  anchorEl,
  arrow = 'top-right',
  ...other
}: CustomPopoverProps) {
  const { style, anchorOrigin, transformOrigin } = getPosition(arrow);

  const baseProps = {
    anchorOrigin: anchorOrigin as PopoverOrigin,
    transformOrigin: transformOrigin as PopoverOrigin,
  };

  return (
    <Popover
      {...baseProps}
      open={!!open}
      anchorEl={anchorEl ?? open}
      slotProps={{
        ...slotProps,
        paper: {
          ...slotProps?.paper,
          sx: {
            ...style,
            overflow: 'inherit',
            [`& .${listClasses.root}`]: {
              minWidth: 140,
            },
            [`& .${menuItemClasses.root}`]: {
              gap: 2,
            },
            ...(slotProps?.paper as PaperProps)?.sx,
          },
        },
      }}
      {...other}
    >
      {!hiddenArrow && <StyledArrow arrow={arrow} />}

      {children}
    </Popover>
  );
}
