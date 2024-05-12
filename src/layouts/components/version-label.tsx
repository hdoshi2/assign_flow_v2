import Link from '@mui/material/Link';
import Badge, { BadgeProps, badgeClasses } from '@mui/material/Badge';

import { paths } from 'src/routes/paths';

import { APP_VERSION } from 'src/config-global';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

export default function VersionLabel({ children, sx, ...other }: BadgeProps) {
  return (
    <Badge
      {...other}
      sx={{
        [`& .${badgeClasses.badge}`]: {
          top: 8,
          right: -16,
        },
        ...sx,
      }}
      badgeContent={
        <Link href={paths.changelog} target="_blank" rel="noopener" underline="none" sx={{ ml: 1 }}>
          <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
            v{APP_VERSION}
          </Label>
        </Link>
      }
    >
      {children}
    </Badge>
  );
}
