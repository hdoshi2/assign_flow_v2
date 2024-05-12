import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CourseMyAccount({ ...other }: CardProps) {
  const { user } = useMockedUser();

  return (
    <Card {...other}>
      <Stack alignItems="center">
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 2, width: 96, height: 96, position: 'relative' }}
        >
          <Avatar
            src={user?.photoURL}
            alt={user?.displayName}
            sx={{
              zIndex: 9,
              width: 92,
              height: 92,
              position: 'absolute',
              border: (theme) => `solid 3px ${theme.palette.background.default}`,
            }}
          >
            {user?.displayName?.charAt(0).toUpperCase()}
          </Avatar>

          <Box
            component={m.div}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
            sx={{
              width: 1,
              zIndex: 8,
              height: 1,
              borderRadius: '50%',
              position: 'absolute',
              background: (theme) =>
                `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0)} 25%, ${theme.palette.primary.main} 100%)`,
            }}
          />
        </Stack>

        <Typography variant="subtitle1" noWrap sx={{ mb: 0.5 }}>
          {user?.displayName}
        </Typography>

        <Stack
          spacing={0.5}
          direction="row"
          alignItems="center"
          sx={{ typography: 'body2', color: 'text.secondary' }}
        >
          ID: 123987
          <IconButton size="small">
            <Iconify width={18} icon="solar:copy-bold" />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
}
