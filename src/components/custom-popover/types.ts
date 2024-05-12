import { PopoverProps } from '@mui/material/Popover';

// ----------------------------------------------------------------------

export type ArrowPositionType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

export type UsePopoverReturnType = {
  open: HTMLElement | null;
  onClose: VoidFunction;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  setOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

export interface CustomPopoverProps extends Omit<PopoverProps, 'open'> {
  hiddenArrow?: boolean;
  arrow?: ArrowPositionType;
  open: UsePopoverReturnType['open'];
}
