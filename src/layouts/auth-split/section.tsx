import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { BREAKPOINT } from 'src/layouts/config-layout';

// ----------------------------------------------------------------------

const METHODS = [
  {
    id: 'jwt',
    label: 'Jwt',
    path: paths.auth.jwt.login,
    icon: '/assets/icons/auth/ic-jwt.svg',
  },
  {
    id: 'firebase',
    label: 'Firebase',
    path: paths.auth.firebase.login,
    icon: '/assets/icons/auth/ic-firebase.svg',
  },
  {
    id: 'amplify',
    label: 'Amplify',
    path: paths.auth.amplify.login,
    icon: '/assets/icons/auth/ic-amplify.svg',
  },
  {
    id: 'auth0',
    label: 'Auth0',
    path: paths.auth.auth0.login,
    icon: '/assets/icons/auth/ic-auth0.svg',
  },
  {
    id: 'supabase',
    label: 'Supabase',
    path: paths.auth.supabase.login,
    icon: '/assets/icons/auth/ic-supabase.svg',
  },
];

type Props = StackProps & {
  method?: string;
  title?: string;
  subtitle?: string;
  imgUrl?: string;
};

export function Section({ method, imgUrl, title, subtitle, sx, ...other }: Props) {
  const theme = useTheme();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.AUTH_SPLIT);

  return (
    <Stack
      spacing={8}
      alignItems="center"
      justifyContent="center"
      sx={{
        ...theme.mixins.bgGradient(
          `0deg, ${alpha(theme.palette.background.default, 0.92)}, ${alpha(theme.palette.background.default, 0.92)}`,
          '/assets/background/overlay-3-blur.jpg'
        ),
        px: 3,
        pb: 3,
        width: 1,
        maxWidth: 480,
        display: 'none',
        position: 'relative',
        pt: 'var(--layout-header-desktop-height)',
        [breakpointUp]: {
          display: 'flex',
        },
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={2} sx={{ textAlign: 'center' }}>
        <Typography variant="h3">{title ?? 'Manage the job'}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {subtitle ?? 'More effectively with optimized workflows.'}
        </Typography>
      </Stack>

      <Box
        component="img"
        alt="Dashboard Illustration"
        src={imgUrl ?? '/assets/illustrations/illustration-dashboard.png'}
        sx={{
          width: 1,
          aspectRatio: '4/3',
          objectFit: 'cover',
        }}
      />

      <Stack direction="row" spacing={2}>
        {METHODS.map((option) => (
          <Tooltip key={option.label} title={option.label} placement="top">
            <Link component={RouterLink} href={option.path}>
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{
                  width: 32,
                  height: 32,
                  ...(method !== option.id && {
                    filter: 'grayscale(100%)',
                  }),
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
}
