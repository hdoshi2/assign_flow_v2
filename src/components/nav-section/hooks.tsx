import Box from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

import Iconify from '../iconify';
import SvgColor from '../svg-color';

// ----------------------------------------------------------------------

type UseNavItemProps = {
  path: string;
  depth?: number;
  hasChild?: boolean;
  icon?: React.ReactNode;
  externalLink?: boolean;
  enabledRootRedirect?: boolean;
};

type UseNavItemReturnType = {
  subItem: boolean;
  rootItem: boolean;
  subDeepItem: boolean;
  baseProps: Record<string, any>;
  renderIcon: React.ReactNode;
};

export function useNavItem({
  path,
  icon,
  depth,
  hasChild,
  externalLink,
  enabledRootRedirect,
}: UseNavItemProps): UseNavItemReturnType {
  const rootItem = depth === 1;

  const subItem = !rootItem;

  const subDeepItem = Number(depth) > 2;

  const linkProps = externalLink
    ? { href: path, target: '_blank', rel: 'noopener' }
    : { component: RouterLink, href: path };

  const baseProps = hasChild && !enabledRootRedirect ? { component: 'div' } : linkProps;

  let renderIcon = icon;

  if (typeof icon === 'string') {
    switch (true) {
      case icon.startsWith('[iconify]'):
        renderIcon = <Iconify width={30} icon={icon.replace('[iconify]', '')} />;
        break;
      case icon.startsWith('[initial]'):
        renderIcon = <Box component="img" src={icon.replace('[initial]', '')} />;
        break;
      default:
        renderIcon = <SvgColor src={icon} />;
        break;
    }
  }

  return {
    subItem,
    rootItem,
    subDeepItem,
    baseProps,
    renderIcon,
  };
}
