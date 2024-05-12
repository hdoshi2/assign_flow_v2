import { BoxProps } from '@mui/material/Box';
import { LinkProps } from '@mui/material/Link';
import { StackProps } from '@mui/material/Stack';
import { Theme, SxProps } from '@mui/material/styles';
import { ButtonBaseProps } from '@mui/material/ButtonBase';

// ----------------------------------------------------------------------

export type SlotItemProps = {
  sx?: SxProps<Theme>;
  icon?: SxProps<Theme>;
  title?: SxProps<Theme>;
  info?: SxProps<Theme>;
  arrow?: SxProps<Theme>;
};

export type SlotProps = {
  gap?: number;
  rootItem?: SlotItemProps;
  subItem?: SxProps<Theme>;
  subheader?: SxProps<Theme>;
  paper?: SxProps<Theme>;
  tags?: SxProps<Theme>;
  moreLink?: SxProps<Theme>;
  carousel?: {
    sx: SxProps<Theme>;
    displayCount?: number;
  };
};

export type SlideProps = {
  name: string;
  path: string;
  coverUrl: string;
};

export type MenuLink = LinkProps & {
  title: string;
  path: string;
};

export type MenuCarouselProps = {
  slides: SlideProps[];
  displayCount?: number;
  sx?: SxProps<Theme>;
};

export type MenuTagsProps = BoxProps & {
  tags: MenuLink[];
};

export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemBaseProps = {
  title: string;
  path: string;
  info?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  moreLink?: MenuLink;
  tags?: MenuTagsProps['tags'];
  slides?: MenuCarouselProps['slides'];
  children?: {
    subheader?: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
  slotProps?: SlotItemProps;
};

export type NavItemProps = ButtonBaseProps &
  NavItemBaseProps &
  NavItemStateProps & {
    enabledRootRedirect?: boolean;
  };

export type NavSubItemProps = Pick<NavItemProps, 'title' | 'path' | 'active'> & {
  slotProps: SlotProps['subItem'];
};

export type NavListProps = {
  data: NavItemBaseProps;
  slotProps?: SlotProps;
  enabledRootRedirect?: boolean;
};

export type NavSubListProps = StackProps & {
  data: {
    subheader?: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
  slotProps?: SlotProps;
  title?: string;
  onCloseMenu?: VoidFunction;
};

export type NavProps = StackProps & {
  data: NavItemBaseProps[];
  slotProps?: SlotProps;
  enabledRootRedirect?: boolean;
};
