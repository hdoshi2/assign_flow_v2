import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';

import { MotionContainer } from 'src/components/animate';

import { Dots, Lines, Texts, Circles, PlusIcon } from './hero-svg';

// ----------------------------------------------------------------------

export function HeroBackground() {
  const theme = useTheme();

  const lightMode = theme.palette.mode === 'light';

  const strokeCount = 12;

  return (
    <Stack
      component={MotionContainer}
      alignItems="center"
      justifyContent="center"
      sx={{
        '--stroke-dasharray': 3,
        '--stroke-spacing': '80px',
        /* line */
        '--hero-line-stroke-width': 1,
        '--hero-line-stroke-color': lightMode
          ? alpha(theme.palette.grey[500], 0.32)
          : alpha(theme.palette.grey[600], 0.16),
        /* text */
        '--hero-text-stroke-width': 1,
        '--hero-text-stroke-color': lightMode
          ? alpha(theme.palette.grey[500], 0.24)
          : alpha(theme.palette.grey[600], 0.12),
        /* circle */
        '--hero-circle-stroke-width': 1,
        '--hero-circle-stroke-color': lightMode
          ? alpha(theme.palette.grey[500], 0.48)
          : alpha(theme.palette.grey[600], 0.24),
        /* plus */
        '--hero-plus-stroke-color': theme.palette.text.disabled,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        position: 'absolute',
      }}
    >
      <Dots />

      <Texts />

      <Box
        component={m.svg}
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="1080"
        fill="none"
        viewBox="0 0 1440 1080"
        initial="hidden"
        animate="visible"
        sx={{ width: 1, height: 1 }}
      >
        <defs>
          <radialGradient
            id="mask_gradient_id"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(720 0 0 420 720 560)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.08} />
          </radialGradient>

          <mask id="mask_id">
            <ellipse cx="50%" cy="50%" rx="50%" ry="36%" fill="url(#mask_gradient_id)" />
          </mask>
        </defs>

        <g mask="url(#mask_id)">
          <Circles />
          <PlusIcon />
          <Lines strokeCount={strokeCount} />
        </g>
      </Box>

      <Box
        component={m.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: -1,
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            theme.palette.mode === 'light'
              ? `linear-gradient(180deg, ${theme.palette.background.default} 12%, ${alpha(theme.palette.background.default, 0.92)} 50%, ${theme.palette.background.default} 88%), url('/assets/background/overlay-3.jpg')`
              : `url('/assets/images/home/hero/hero-blur.png'), linear-gradient(180deg, ${theme.palette.background.default} 12%, ${alpha(theme.palette.background.default, 0.96)} 50%, ${theme.palette.background.default} 88%), url('/assets/background/overlay-3.jpg')`,
        }}
      />
    </Stack>
  );
}
