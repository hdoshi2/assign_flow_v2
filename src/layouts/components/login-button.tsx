import Button, { ButtonProps } from '@mui/material/Button';

import { RouterLink } from 'src/routes/components';

import { PATH_AFTER_LOGIN } from 'src/config-global';

// ----------------------------------------------------------------------

export default function LoginButton({ sx, ...other }: ButtonProps) {
  return (
    <Button
      component={RouterLink}
      href={PATH_AFTER_LOGIN}
      variant="outlined"
      sx={{
        mr: 1,
        ...sx,
      }}
      {...other}
    >
      Login
    </Button>
  );
}
