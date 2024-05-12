import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
  varFade,
  AnimatedText,
  MotionContainer,
  animatedTextClasses,
} from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <Box
      sx={{
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
          'url(/assets/background/overlay-1.svg), url(/assets/images/about/hero.jpg)',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: {
              xs: 'center',
              md: 'unset',
            },
          }}
        >
          <AnimatedText
            component="h1"
            variant="h1"
            text={['Who', 'we are?']}
            variants={varFade({ distance: 40 }).inRight}
            sx={{
              color: 'common.white',
              [`& .${animatedTextClasses.line}[data-index="0"]`]: {
                [`& .${animatedTextClasses.word}[data-index="0"]`]: {
                  color: 'primary.main',
                },
              },
            }}
          />

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: 'common.white',
                fontWeight: 'fontWeightSemiBold',
              }}
            >
              Let&apos;s work together and
              <br /> make awesome site easily
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
