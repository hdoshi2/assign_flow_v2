import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack, { StackProps } from '@mui/material/Stack';

import { varScale, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export default function HomeIntegrations({ sx, ...other }: StackProps) {
  const renderDescription = (
    <SectionTitle
      caption="Integrations"
      title="Robust integration"
      txtGradient="framework"
      description="A comprehensive suite of integrations offers diverse functionalities."
      sx={{
        textAlign: { xs: 'center', md: 'left' },
      }}
    />
  );

  const renderImg = (
    <Box
      component={m.img}
      variants={{
        ...varScale().in,
        initial: { scale: 0.8, opacity: 0 },
      }}
      alt="Integration"
      src="/assets/illustrations/illustration-integration.png"
      sx={{
        width: 720,
        objectFit: 'cover',
        aspectRatio: '1/1',
      }}
    />
  );

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

      <Container component={MotionViewport}>
        <Grid disableEqualOverflow container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={6} lg={5}>
            {renderDescription}
          </Grid>

          <Grid
            xs={12}
            md={6}
            lg={7}
            sx={{
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            {renderImg}
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Lines() {
  return (
    <MotionViewport>
      <Stack
        spacing={8}
        alignItems="center"
        sx={{
          top: 64,
          left: 80,
          zIndex: 2,
          bottom: 64,
          position: 'absolute',
          transform: 'translateX(-7px)',
          '& span': { position: 'static', opacity: 0.12 },
        }}
      >
        <FloatDotIcon />
        <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
        <Box sx={{ flexGrow: 1 }} />
        <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
        <FloatDotIcon />
      </Stack>
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </MotionViewport>
  );
}
