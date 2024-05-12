import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

import { FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export default function HomeAdvertisement({ sx, ...other }: StackProps) {
  const theme = useTheme();

  const renderDescription = (
    <Stack spacing={5} sx={{ zIndex: 9 }}>
      <Box
        component={m.h2}
        variants={varFade({ distance: 24 }).inDown}
        sx={{
          m: 0,
          color: 'common.white',
          typography: { xs: 'h2', md: 'h1' },
        }}
      >
        Get started with
        <br /> Minimal kit
        <Box
          component="span"
          sx={{
            ...theme.mixins.textGradient(
              `to right, ${theme.palette.common.white}, ${alpha(theme.palette.common.white, 0.4)}`
            ),
            ml: 1,
          }}
        >
          today
        </Box>
      </Box>

      <Stack
        spacing={2}
        direction="row"
        flexWrap="wrap"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <m.div variants={varFade({ distance: 24 }).inRight}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener"
            href={paths.minimalUI}
          >
            Purchase Now
          </Button>
        </m.div>

        <m.div variants={varFade({ distance: 24 }).inRight}>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href={paths.freeUI}
            endIcon={<Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />}
            sx={{
              color: 'common.white',
              borderColor: 'common.white',
              '&:hover': {
                borderColor: 'currentColor',
              },
            }}
          >
            Get Free Version
          </Button>
        </m.div>
      </Stack>
    </Stack>
  );

  const renderImg = (
    <m.div variants={varFade().inUp}>
      <Box
        component={m.img}
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
        alt="rocket"
        src="/assets/illustrations/illustration-rocket-large.png"
        sx={{
          zIndex: 9,
          width: 360,
          aspectRatio: '1/1',
        }}
      />
    </m.div>
  );

  const renderGridBg = (
    <m.div variants={varFade().in}>
      <SvgColor
        src="assets/background/abstract-grid.svg"
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 8,
          opacity: 0.08,
          color: 'grey.500',
          position: 'absolute',
          maskSize: 'auto 100%',
        }}
      />
    </m.div>
  );

  const renderBlur = (
    <Box
      sx={{
        top: 0,
        right: 0,
        zIndex: 7,
        width: 240,
        height: 240,
        bgcolor: 'grey.500',
        position: 'absolute',
        filter: 'blur(200px)',
      }}
    />
  );

  return (
    <Stack component="section" sx={{ position: 'relative', ...sx }} {...other}>
      <Lines />

      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 9 }}>
        <Stack
          spacing={5}
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            py: 8,
            px: 5,
            borderRadius: 3,
            overflow: 'hidden',
            bgcolor: 'grey.900',
            position: 'relative',
            textAlign: { xs: 'center', md: 'left' },
            border: `solid 1px ${theme.palette.grey[800]}`,
          }}
        >
          {renderImg}

          {renderDescription}

          {renderGridBg}

          {renderBlur}
        </Stack>
      </Container>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Lines() {
  return (
    <>
      <FloatPlusIcon sx={{ left: 72, top: '50%', mt: -1 }} />
      <FloatLine vertical sx={{ top: 0, left: 80, height: 'calc(50% + 64px)' }} />
      <FloatLine sx={{ top: '50%', left: 0 }} />
    </>
  );
}
