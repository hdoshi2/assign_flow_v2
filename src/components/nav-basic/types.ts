import { StackProps } from '@mui/material/Stack';
import { Theme, SxProps } from '@mui/material/styles';
import { ButtonBaseProps } from '@mui/material/ButtonBase';

// ----------------------------------------------------------------------

export type SlotItemProps = {
  sx?: SxProps<Theme>;
  icon?: SxProps<Theme>;
  texts?: SxProps<Theme>;
  title?: SxProps<Theme>;
  caption?: SxProps<Theme>;
  info?: SxProps<Theme>;
  arrow?: SxProps<Theme>;
};

export type SlotProps = {
  gap?: number;
  rootItem?: SlotItemProps;
  subItem?: SlotItemProps;
  paper?: SxProps<Theme>;
};

export type NavItemStateProps = {
  depth?: number;
  open?: boolean;
  active?: boolean;
  disabled?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemBaseProps = {
  title: string;
  path: string;
  caption?: string;
  disabled?: boolean;
  info?: React.ReactNode;
  icon?: React.ReactNode;
  children?: any;
  slotProps?: SlotItemProps;
};

export type NavItemProps = ButtonBaseProps &
  NavItemBaseProps &
  NavItemStateProps & {
    enabledRootRedirect?: boolean;
  };

export type NavListProps = {
  data: NavItemBaseProps;
  depth: number;
  slotProps?: SlotProps;
  enabledRootRedirect?: boolean;
};

export type NavSubListProps = {
  data: NavItemBaseProps[];
  depth: number;
  slotProps?: SlotProps;
  enabledRootRedirect?: boolean;
};

export type NavProps = StackProps & {
  data: NavItemBaseProps[];
  slotProps?: SlotProps;
  enabledRootRedirect?: boolean;
};
