import Container from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function ComponentHero({ children, sx, ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 5,
        minHeight: 240,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <Container>{children}</Container>

      <Box
        sx={{
          ...theme.mixins.bgGradient(
            `0deg, ${alpha(theme.palette.background.default, 0.9)}, ${alpha(theme.palette.background.default, 0.9)}`,
            '/assets/background/overlay-3-blur.jpg'
          ),
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: -1,
          position: 'absolute',
          transform: 'scaleX(-1)',
        }}
      />
    </Box>
  );
}
