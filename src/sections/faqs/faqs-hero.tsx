import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import Iconify from 'src/components/iconify';
import {
  varFade,
  AnimatedText,
  MotionContainer,
  animatedTextClasses,
} from 'src/components/animate';

// ----------------------------------------------------------------------

export default function FaqsHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...theme.mixins.bgGradient(
          `0deg, ${alpha(theme.palette.grey[900], 0.8)}, ${alpha(theme.palette.grey[900], 0.8)}`,
          '/assets/images/faqs/hero.jpg'
        ),
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <AnimatedText
            component="h1"
            variant="h1"
            text={['Where', 'can we help you?']}
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

          <m.div variants={varFade().in}>
            <TextField
              fullWidth
              placeholder="Search support..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mt: 5,
                maxWidth: 360,
                [`& .${outlinedInputClasses.root}`]: {
                  bgcolor: 'common.white',
                },
                [`& .${outlinedInputClasses.input}`]: {
                  typography: 'subtitle1',
                },
              }}
            />
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
