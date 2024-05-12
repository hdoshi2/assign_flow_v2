import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledControlPanel = styled('div')(({ theme }) => ({
  ...theme.mixins.bgBlur(alpha(theme.palette.grey[900], 0.8)),
  zIndex: 9,
  minWidth: 200,
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 1.5,
}));
