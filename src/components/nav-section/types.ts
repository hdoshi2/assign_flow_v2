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
  subheader?: SxProps<Theme>;
  paper?: SxProps<Theme>;
  currentRole?: string;
};

export type NavItemStateProps = {
  depth?: number;
  open?: boolean;
  active?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemBaseProps = {
  title: string;
  path: string;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  caption?: string;
  disabled?: boolean;
  roles?: string[];
  children?: any;
  slotProps?: SlotItemProps;
};

export type NavItemProps = ButtonBaseProps &
  NavItemStateProps &
  NavItemBaseProps & {
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

export type NavGroupProps = {
  subheader?: string;
  items: NavItemBaseProps[];
  slotProps?: SlotProps;
  enabledRootRedirect?: boolean;
};

export type NavProps = StackProps & {
  data: {
    subheader?: string;
    items: NavItemBaseProps[];
  }[];
  slotProps?: SlotProps;
  enabledRootRedirect?: boolean;
};

export type AccordionState = {
  open: boolean;
  openItem: NavItemBaseProps | null;
  activeItem: NavItemBaseProps | null;
};

export type Accordion = {
  state: AccordionState;
  setState: (updateState: Partial<AccordionState>) => void;
};
