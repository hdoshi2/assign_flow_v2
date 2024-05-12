import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export default function HomeForDesigner({ sx, ...other }: StackProps) {
  const theme = useTheme();

  return (
    <Stack
      component="section"
      sx={{
        position: 'relative',
        minHeight: { md: 720 },
        backgroundImage: {
          xs: `linear-gradient(135deg, ${alpha(theme.palette.grey[900], 0.8)} 0%, ${theme.palette.grey[900]} 75%), url(/assets/images/home/for-designer.jpg)`,
          md: `url(/assets/images/home/for-designer.jpg)`,
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        ...sx,
      }}
      {...other}
    >
      <Stack
        component={MotionViewport}
        spacing={5}
        sx={{
          px: 2,
          py: 15,
          alignItems: 'center',
          [theme.breakpoints.up('md')]: {
            px: 8,
            py: 0,
            top: 0,
            left: 0,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: 'calc(50% + 16px)',
            height: 'calc(50% + 16px)',
            borderBottomRightRadius: 24,
            backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.grey[900], 0.8)} 0%, ${theme.palette.grey[900]} 75%)`,
            '&::before': {
              inset: 0,
              content: '""',
              position: 'absolute',
              paddingRight: '4px',
              paddingBottom: '4px',
              borderBottomRightRadius: 'inherit',
              background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.primary.main})`,
              WebkitMask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            },
          },
        }}
      >
        <SectionTitle
          caption="professional kit"
          title="For designer"
          description="Use variables and variants to save time and energy on designs, design systems."
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
          slotProps={{
            caption: {
              sx: {
                ...theme.mixins.textGradient(
                  `to right, ${theme.palette.common.white}, ${alpha(theme.palette.common.white, 0.2)}`
                ),
              },
            },
            title: {
              sx: {
                ...theme.mixins.textGradient(
                  `135deg, ${theme.palette.warning.main}, ${theme.palette.primary.main}`
                ),
              },
            },
            description: {
              sx: {
                maxWidth: 320,
                color: 'common.white',
              },
            },
          }}
        />

        <Box
          component={m.div}
          variants={varFade({ distance: 24 }).inLeft}
          sx={{ alignSelf: { md: 'flex-end' } }}
        >
          <Button
            size="large"
            color="primary"
            variant="contained"
            target="_blank"
            rel="noopener"
            href={paths.components}
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          >
            Checkout Workspace
          </Button>
        </Box>
      </Stack>

      <Box
        sx={{
          right: 0,
          bottom: 0,
          position: 'absolute',
          borderStyle: 'solid',
          borderTopLeftRadius: 24,
          width: 'calc(50% + 16px)',
          height: 'calc(50% + 16px)',
          borderWidth: '4px 0 0 4px',
          borderColor: 'common.white',
          display: { xs: 'none', md: 'block' },
          bgcolor: alpha(theme.palette.grey[900], 0.48),
          '&::before': {
            top: 24,
            width: 4,
            left: -4,
            height: 4,
            content: '""',
            position: 'absolute',
            bgcolor: 'primary.main',
          },
        }}
      />
    </Stack>
  );
}
