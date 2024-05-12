import { useRef, useState } from 'react';
import { m, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle, SectionCaption } from './components/section-title';
import { FloatLine, FloatTriangleLeftIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export default function HomeHugePackElements({ sx, ...other }: StackProps) {
  return (
    <Stack
      component="section"
      sx={{
        pt: 10,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Lines />

      <Container
        component={MotionViewport}
        sx={{
          mb: { xs: 5, md: 15 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid
          disableEqualOverflow
          container
          rowSpacing={{ xs: 3, md: 0 }}
          columnSpacing={{ xs: 0, md: 8 }}
        >
          <Grid xs={12} md={6} lg={7}>
            <SectionCaption title="Interface Starter Kit" />
            <SectionTitle title="Large bundle of" txtGradient="elements" sx={{ mt: 3 }} />
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <m.div variants={varFade({ distance: 24 }).inUp}>
              <Typography
                sx={{
                  fontSize: { md: 20 },
                  lineHeight: { md: 36 / 20 },
                  color: 'text.disabled',
                }}
              >
                <Box component="span" sx={{ color: 'text.primary' }}>
                  Explore a comprehensive range of elements
                </Box>
                <br />
                like menus, sliders, buttons, inputs, and others, all conveniently gathered here.
              </Typography>
            </m.div>
          </Grid>
        </Grid>

        <m.div variants={varFade({ distance: 24 }).inUp}>
          <Button
            size="large"
            color="inherit"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href={paths.components}
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            sx={{ mt: 5, mx: 'auto' }}
          >
            Browse Components
          </Button>
        </m.div>
      </Container>

      <ScrollContent />
    </Stack>
  );
}

// ----------------------------------------------------------------------

function ScrollContent() {
  const targetRef = useRef(null);

  const [startScroll, setStartScroll] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const x2 = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest !== 0 && latest !== 1) {
      setStartScroll(true);
    } else {
      setStartScroll(false);
    }
  });

  return (
    <Box ref={targetRef} sx={{ height: '300vh', position: 'relative', zIndex: 9 }}>
      <Stack
        sx={{
          position: 'sticky',
          overflow: 'hidden',
          top: 'var(--layout-header-desktop-offset-height)',
          height: 'calc(100vh - var(--layout-header-desktop-offset-height))',
          ...(startScroll && {
            justifyContent: 'center',
          }),
        }}
      >
        <Stack spacing={5}>
          <Box component={m.div} style={{ x: x1 }}>
            <Box
              sx={{
                height: 160,
                width: '300%',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center center',
                backgroundImage: (theme) =>
                  `url(/assets/images/home/bundle-${theme.palette.mode}-1.png)`,
              }}
            />
          </Box>

          <Box component={m.div} style={{ x: x2 }}>
            <Box
              sx={{
                height: 520,
                width: '300%',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center center',
                backgroundImage: (theme) =>
                  `url(/assets/images/home/bundle-${theme.palette.mode}-2.png)`,
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Lines() {
  return (
    <MotionViewport>
      <FloatTriangleLeftIcon sx={{ top: 80, left: 80, opacity: 0.4 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </MotionViewport>
  );
}
