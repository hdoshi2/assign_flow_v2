import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import SvgColor from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const ROWS = [
  {
    icon: '/assets/icons/home/ic-make-brand.svg',
    title: 'Branding',
    description: 'Consistent design makes it easy to brand your own.',
  },
  {
    icon: '/assets/icons/home/ic-design.svg',
    title: 'UI & UX Design',
    description: 'The kit is built on the principles of the atomic design system.',
  },
  {
    icon: '/assets/icons/home/ic-development.svg',
    title: 'Development',
    description: 'Easy to customize and extend, saving you time and money.',
  },
];

// ----------------------------------------------------------------------

export default function HomeMinimal({ sx, ...other }: StackProps) {
  const renderDescription = (
    <>
      <SectionTitle
        caption="Visualizing Success"
        title="What's in"
        txtGradient="Minimal?"
        sx={{
          mb: { xs: 5, md: 8 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      />

      <Stack
        spacing={6}
        sx={{
          maxWidth: 400,
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        {ROWS.map((card) => (
          <Stack
            component={m.div}
            key={card.title}
            variants={varFade({ distance: 24 }).inUp}
            spacing={3}
            direction="row"
          >
            <SvgColor src={card.icon} sx={{ width: 40, height: 40 }} />
            <Stack spacing={1}>
              <Typography variant="h5">{card.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );

  const renderImg = (
    <Stack
      component={m.div}
      variants={varFade({ distance: 24 }).inRight}
      alignItems="center"
      justifyContent="center"
      sx={{ height: 1, position: 'relative' }}
    >
      <Box
        sx={{
          left: 0,
          width: 720,
          borderRadius: 2,
          position: 'absolute',
          bgcolor: 'background.default',
          boxShadow: (theme) =>
            `-40px 40px 80px 0px ${alpha(theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black, 0.16)}`,
        }}
      >
        <Box
          component="img"
          alt="Home Chart"
          src="/assets/images/home/home-chart.png"
          sx={{
            width: 720,
          }}
        />
      </Box>
    </Stack>
  );

  return (
    <Stack
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
        ...sx,
      }}
      {...other}
    >
      <Lines />

      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Grid container columnSpacing={{ xs: 0, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
          <Grid xs={12} md={6} lg={7}>
            {renderDescription}
          </Grid>

          <Grid md={6} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            {renderImg}
          </Grid>
        </Grid>

        <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
      </Container>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Lines() {
  return (
    <MotionViewport>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </MotionViewport>
  );
}
