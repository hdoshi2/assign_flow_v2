import { m, useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack, { StackProps } from '@mui/material/Stack';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { varFade, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

export default function HomeHero({ sx, ...other }: StackProps) {
  const theme = useTheme();

  const scroll = useScrollPercent();

  const mdUp = 'md';

  const lgUp = 'lg';

  const opacity = Number((1 - scroll.percent / 100).toFixed(1));

  const renderContent = (
    <Stack
      spacing={5}
      alignItems="center"
      sx={{
        transform: `translateY(${scroll.percent / 4}%)`,
      }}
    >
      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <MotionDiv>
          <Stack
            component="h1"
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            sx={{
              ...theme.typography.h2,
              my: 0,
              mx: 'auto',
              maxWidth: 680,
              fontFamily: theme.typography.fontSecondaryFamily,
              [theme.breakpoints.up(lgUp)]: {
                fontSize: 72,
                lineHeight: '90px',
              },
            }}
          >
            <Box component="span" sx={{ opacity: 0.24, width: 1 }}>
              Boost your building
            </Box>
            process with
            <Box
              component={m.span}
              animate={{ backgroundPosition: '200% center' }}
              transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              sx={{
                ...theme.mixins.textGradient(
                  `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
                ),
                ml: 1.5,
                backgroundSize: '400%',
              }}
            >
              Minimal
            </Box>
          </Stack>
        </MotionDiv>

        <MotionDiv>
          <Typography
            variant="body2"
            sx={{
              mx: 'auto',
              maxWidth: 392,
              [theme.breakpoints.up(mdUp)]: {
                maxWidth: 560,
              },
              [theme.breakpoints.up(lgUp)]: {
                fontSize: 20,
                lineHeight: '36px',
              },
            }}
          >
            The starting point for your next project is based on MUI. Easy customization helps you
            build apps faster and better.
          </Typography>
        </MotionDiv>
      </Stack>

      <MotionDiv>
        <Stack
          spacing={1.5}
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          sx={{ typography: 'subtitle2' }}
        >
          <AvatarGroup
            sx={{
              [`& .${avatarClasses.root}`]: {
                width: 32,
                height: 32,
              },
            }}
          >
            {[...Array(3)].map((_, index) => (
              <Avatar
                key={_mock.fullName(index + 1)}
                alt={_mock.fullName(index + 1)}
                src={_mock.image.avatar(index + 1)}
              />
            ))}
          </AvatarGroup>
          160+ Happy Customers
        </Stack>
      </MotionDiv>

      <Stack spacing={2} direction="row" flexWrap="wrap" justifyContent="center">
        <MotionDiv>
          <Stack alignItems="center" spacing={2.5}>
            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              color="inherit"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="iconoir:flash" width={24} />}
            >
              Live Preview
            </Button>

            <Link
              color="inherit"
              variant="caption"
              target="_blank"
              rel="noopener"
              href={paths.freeUI}
              underline="always"
              sx={{ gap: 0.5, alignItems: 'center', display: 'inline-flex' }}
            >
              Get Free Version
              <Iconify icon="eva:external-link-fill" width={16} />
            </Link>
          </Stack>
        </MotionDiv>

        <MotionDiv>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            startIcon={<Iconify icon="solar:figma-outline" width={24} />}
            target="_blank"
            rel="noopener"
            href={paths.figma}
            sx={{ borderColor: 'text.primary' }}
          >
            Design Preview
          </Button>
        </MotionDiv>
      </Stack>

      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <MotionDiv>
          <Typography variant="overline" sx={{ opacity: 0.4 }}>
            Available For
          </Typography>
        </MotionDiv>

        <Stack spacing={2.5} direction="row">
          {['js', 'ts', 'nextjs', 'vite', 'figma'].map((platform) => (
            <MotionDiv key={platform}>
              {platform === 'nextjs' ? (
                <SvgColor
                  src={`/assets/icons/platforms/ic-${platform}.svg`}
                  sx={{ width: 24, height: 24 }}
                />
              ) : (
                <Box
                  component="img"
                  alt={platform}
                  src={`/assets/icons/platforms/ic-${platform}.svg`}
                  sx={{ width: 24, height: 24 }}
                />
              )}
            </MotionDiv>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Stack
      component="section"
      sx={{
        overflow: 'hidden',
        [theme.breakpoints.up(mdUp)]: {
          opacity,
          pt: 10,
          pb: 10,
          minHeight: 760,
          height: '100vh',
          display: 'block',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
        },
        ...sx,
      }}
      {...other}
    >
      <Stack
        ref={scroll.elementRef}
        sx={{
          pt: 10,
          pb: 10,
          width: 1,
          position: 'relative',
          mt: 'calc(var(--layout-header-mobile-height) * -1)',
          [theme.breakpoints.up(mdUp)]: {
            minHeight: 1,
            position: 'fixed',
            mt: 'calc(var(--layout-header-desktop-height) * -1)',
          },
        }}
      >
        <Container
          component={MotionContainer}
          sx={{
            zIndex: 9,
            [theme.breakpoints.up(mdUp)]: {
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              justifyContent: 'center',
            },
          }}
        >
          {renderContent}
        </Container>

        <HeroBackground />
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function MotionDiv({ children }: { children: React.ReactNode }) {
  return <m.div variants={varFade({ distance: 24 }).inUp}>{children}</m.div>;
}

// ----------------------------------------------------------------------

function useScrollPercent() {
  const elementRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const onScroll = useCallback(() => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

      if (scrollPercent >= 100) {
        setPercent(100);
      } else {
        setPercent(Math.floor(scrollPercent));
      }
    });
  }, [elementRef, scrollY]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return {
    elementRef,
    percent,
  };
}
