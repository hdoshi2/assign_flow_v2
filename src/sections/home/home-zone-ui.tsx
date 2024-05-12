import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, CircleSvg, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export default function HomeZoneUI({ sx, ...other }: StackProps) {
  const renderDescription = (
    <SectionTitle
      caption="Looking For a"
      title="Landing page"
      txtGradient="template?"
      description="Fuse with dashboards to produce a superior product."
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    />
  );

  const renderImg = (
    <Stack
      component={m.div}
      variants={varFade({ distance: 24 }).inDown}
      alignItems="flex-end"
      sx={{
        filter: (theme) =>
          `drop-shadow(0 24px 48px ${alpha(theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black, 0.16)})`,
      }}
    >
      <Box
        component="img"
        alt="zone landing"
        src="/assets/images/home/zone-landing.jpg"
        sx={{
          width: 720,
          objectFit: 'cover',
          aspectRatio: '16/9',
          borderRadius: '16px 16px 0 16px',
          border: (theme) => `solid 2px ${theme.palette.background.default}`,
        }}
      />
      <Box
        sx={{
          p: 0.5,
          borderRadius: '0 0 8px 8px',
          bgcolor: 'background.default',
        }}
      >
        <Button
          variant="contained"
          target="_blank"
          rel="noopener"
          href={paths.zoneUI}
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          sx={{
            color: 'grey.800',
            bgcolor: 'common.white',
            '&:hover': {
              bgcolor: 'common.white',
            },
          }}
        >
          Visit Zone UI
        </Button>
      </Box>
    </Stack>
  );

  return (
    <Stack
      component="section"
      sx={{
        pt: 10,
        pb: { xs: 10, md: 20 },
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Lines />

      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 8 }}
          sx={{ position: 'relative', zIndex: 9 }}
        >
          <Grid xs={12} md={6} lg={5}>
            {renderDescription}
          </Grid>

          <Grid xs={12} md={6} lg={7}>
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
      <Stack
        spacing={8}
        alignItems="center"
        sx={{ top: 64, left: 80, position: 'absolute', transform: 'translateX(-15px)' }}
      >
        <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
        <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.24, width: 30, height: 15 }} />
      </Stack>
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </MotionViewport>
  );
}
