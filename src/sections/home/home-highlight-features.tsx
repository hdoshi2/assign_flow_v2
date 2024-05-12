import { useRef, useState } from 'react';
import { m, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import { useClientRect } from 'src/hooks/use-client-rect';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const ITEMS = [
  {
    title: 'Dark Mode',
    subtitle: 'A dark theme that feels easier on the eyes.',
    icon: 'solar:cloudy-moon-bold-duotone',
    imgUrl: '/assets/images/home/highlight-darkmode.jpg',
  },
  {
    title: 'Color Presets',
    subtitle: 'Express your own style with just one click.',
    icon: 'solar:pallete-2-bold-duotone',
    imgUrl: '/assets/images/home/highlight-darkmode.jpg',
  },
  {
    title: 'Right-to-left',
    subtitle: 'Support languages such as Arabic, Persian, and Hebrew.',
    icon: 'solar:align-right-bold-duotone',
    imgUrl: '/assets/images/home/highlight-rtl.jpg',
  },
];

// ----------------------------------------------------------------------

export default function HomeHighlightFeatures({ sx, ...other }: StackProps) {
  const { elementRef: containerRef, width: containerWidth, left: containerLeft } = useClientRect();

  return (
    <Stack
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 10, md: 20 },
        ...sx,
      }}
      {...other}
    >
      <Lines />

      <Container component={MotionViewport}>
        <Stack
          ref={containerRef}
          spacing={5}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <SectionTitle caption="App Features" title="Highlight" txtGradient="features" />

          <SvgIcon
            component={m.svg}
            variants={varFade({ distance: 24 }).inDown}
            sx={{ width: 28, height: 28, color: 'grey.500' }}
          >
            <path
              d="M13.9999 6.75956L7.74031 0.5H20.2594L13.9999 6.75956Z"
              fill="#currentColor"
              opacity={0.12}
            />
            <path
              d="M13.9998 23.8264L2.14021 11.9668H25.8593L13.9998 23.8264Z"
              fill="#currentColor"
              opacity={0.24}
            />
          </SvgIcon>
        </Stack>
      </Container>

      <ScrollContent containerWidth={containerWidth} containerLeft={containerLeft} />
    </Stack>
  );
}

// ----------------------------------------------------------------------

type ScrollContentProps = {
  containerLeft: number;
  containerWidth: number;
};

function ScrollContent({ containerWidth, containerLeft }: ScrollContentProps) {
  const targetRef = useRef(null);

  const [progressValue, setProgressValue] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-240%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgressValue(latest);
  });

  const startScroll = progressValue !== 0 && progressValue !== 1;

  return (
    <Box ref={targetRef} sx={{ zIndex: 9, height: '300vh', position: 'relative' }}>
      <Stack
        sx={{
          position: 'sticky',
          overflow: 'hidden',
          pl: `${containerLeft}px`,
          top: 'var(--layout-header-desktop-offset-height)',
          height: 'calc(100vh - var(--layout-header-desktop-offset-height))',
          '&::before': {
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            m: 'auto',
            width: 0.64,
            content: "''",
            position: 'absolute',
            bgcolor: 'transparent',
            display: { xs: 'none', md: 'block' },
            transition: (theme) =>
              theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.complex,
              }),
            ...(startScroll && {
              bgcolor: 'background.neutral',
            }),
          },
          ...(startScroll && {
            justifyContent: 'center',
          }),
        }}
      >
        <Box component={m.div} style={{ x }} sx={{ display: 'flex', gap: 8 }}>
          {ITEMS.map((item) => (
            <Box key={item.title} sx={{ pt: 8, pb: 10 }}>
              <Stack direction="row" spacing={2} sx={{ mb: 6 }}>
                <Iconify width={28} icon={item.icon} sx={{ mt: '10px' }} />
                <Stack spacing={2}>
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{item.subtitle}</Typography>
                </Stack>
              </Stack>

              <Box
                sx={{
                  borderRadius: 2,
                  width: containerWidth ?? 1600,
                  height: (containerWidth / 16) * 9,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundImage: `url(${item.imgUrl})`,
                  boxShadow: (theme) =>
                    `-40px 40px 80px 0px ${alpha(theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black, 0.16)}`,
                }}
              />
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Lines() {
  return (
    <MotionViewport>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </MotionViewport>
  );
}
