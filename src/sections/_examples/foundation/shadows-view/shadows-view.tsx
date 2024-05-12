'use client';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';

import { paths } from 'src/routes/paths';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const boxProps = {
  display: 'grid',
  gap: { xs: 3, md: 5 },
  gridTemplateColumns: {
    xs: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  },
};

// ----------------------------------------------------------------------

export default function View() {
  const theme = useTheme();

  const SYSTEM = theme.shadows.slice(1, theme.shadows.length);

  const CUSTOMS = [
    ['z1', theme.customShadows.z1],
    ['z4', theme.customShadows.z4],
    ['z8', theme.customShadows.z8],
    ['z12', theme.customShadows.z12],
    ['z16', theme.customShadows.z16],
    ['z20', theme.customShadows.z20],
    ['z24', theme.customShadows.z24],
    ['card', theme.customShadows.card],
    ['dropdown', theme.customShadows.dropdown],
    ['dialog', theme.customShadows.dialog],
  ];

  const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

  const DEMO = [
    {
      name: 'System',
      component: (
        <Box {...boxProps}>
          {SYSTEM.map((shadow, index) => (
            <ShadowCard key={shadow} title={`z${index + 1}`} sx={{ boxShadow: shadow }} />
          ))}
        </Box>
      ),
    },
    {
      name: 'Customs',
      component: (
        <Box {...boxProps}>
          {CUSTOMS.map((shadow) => (
            <ShadowCard key={shadow[0]} title={shadow[0]} sx={{ boxShadow: shadow[1] }} />
          ))}
        </Box>
      ),
    },
    {
      name: 'Colors',
      component: (
        <Box {...boxProps}>
          {COLORS.map((color) => (
            <ShadowCard
              key={color}
              title={color}
              sx={{
                color: theme.palette[color].contrastText,
                bgcolor: theme.palette[color].main,
                boxShadow: theme.customShadows[color],
              }}
            />
          ))}
        </Box>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Shadows"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Shadows' },
          ]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}

// ----------------------------------------------------------------------

function ShadowCard({ sx, title }: PaperProps) {
  return (
    <Paper
      sx={{
        padding: 3,
        display: 'flex',
        alignItems: 'center',
        typography: 'subtitle2',
        justifyContent: 'center',
        textTransform: 'capitalize',
        ...sx,
      }}
    >
      {title}
    </Paper>
  );
}
