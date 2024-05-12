import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
import { varFade, varScale, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatXIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export const PLANS = [...Array(3)].map((_, index) => ({
  license: ['Standard', 'Plus', 'Extended'][index],
  price: [69, 129, 599][index],
  commons: [
    'One end products',
    '12 months updates',
    '6 months of support',
    'One-time payments',
    'Lifetime perpetual license.',
  ],
  options: [
    'JavaScript version',
    'TypeScript version',
    'Design Resources (Figma)',
    'Commercial applications',
  ],
  icons: [
    '/assets/icons/platforms/ic-js.svg',
    '/assets/icons/platforms/ic-ts.svg',
    '/assets/icons/platforms/ic-figma.svg',
  ],
}));

// ----------------------------------------------------------------------

export default function HomePricing({ sx, ...other }: StackProps) {
  const [currentTab, setCurrentTab] = useState('Standard');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const renderDescription = (
    <SectionTitle
      caption="plans"
      title="Transparent"
      txtGradient="pricing"
      description="Choose from flexible pricing options designed to fit your business needs and budget, with no hidden fees."
      sx={{ mb: 8, textAlign: 'center' }}
    />
  );

  const renderContentDesktop = (
    <Box
      gridTemplateColumns="repeat(3, 1fr)"
      sx={{
        display: { xs: 'none', md: 'grid' },
      }}
    >
      {PLANS.map((plan) => (
        <PlanCard
          key={plan.license}
          plan={plan}
          sx={{
            ...(plan.license === 'Plus' && {
              '@media (max-width: 1440px)': {
                borderLeft: (theme) => `dashed 1px ${alpha(theme.palette.grey[500], 0.2)}`,
                borderRight: (theme) => `dashed 1px ${alpha(theme.palette.grey[500], 0.2)}`,
              },
            }),
          }}
        />
      ))}
    </Box>
  );

  const renderContentMobile = (
    <Stack
      spacing={5}
      alignItems="center"
      sx={{
        display: { md: 'none' },
      }}
    >
      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        sx={{
          boxShadow: (theme) => `0px -2px 0px 0px ${alpha(theme.palette.grey[500], 0.08)} inset`,
        }}
      >
        {PLANS.map((tab) => (
          <Tab key={tab.license} value={tab.license} label={tab.license} />
        ))}
      </Tabs>

      <Box
        sx={{
          width: 1,
          borderRadius: 2,
          border: (theme) => `dashed 1px ${alpha(theme.palette.grey[500], 0.2)}`,
        }}
      >
        {PLANS.map(
          (tab) => tab.license === currentTab && <PlanCard key={tab.license} plan={tab} />
        )}
      </Box>
    </Stack>
  );

  return (
    <Stack component="section" sx={{ ...sx }} {...other}>
      <MotionViewport sx={{ py: 10, position: 'relative' }}>
        <FloatLine vertical sx={{ top: 0, left: 80 }} />

        <Container>{renderDescription}</Container>

        <Box
          sx={{
            position: 'relative',
            '&::before, &::after': {
              width: 64,
              height: 64,
              content: "''",
              '@media (min-width: 1440px)': {
                display: 'block',
              },
            },
          }}
        >
          <Container>{renderContentDesktop}</Container>
          <FloatLine sx={{ top: 64, left: 0 }} />
          <FloatLine sx={{ bottom: 64, left: 0 }} />
        </Box>

        <Container>{renderContentMobile}</Container>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type PlanCardProps = StackProps & {
  plan: {
    license: string;
    price: number;
    commons: string[];
    options: string[];
    icons: string[];
  };
};

function PlanCard({ plan, sx, ...other }: PlanCardProps) {
  const standardLicense = plan.license === 'Standard';

  const plusLicense = plan.license === 'Plus';

  return (
    <Stack spacing={5} sx={{ px: 6, py: 8, position: 'relative', ...sx }} {...other}>
      {plusLicense && <CardLines />}

      <Stack direction="row" alignItems="center">
        <Stack flexGrow={1}>
          <m.div variants={varFade({ distance: 24 }).inLeft}>
            <Typography variant="h4">{plan.license}</Typography>
          </m.div>

          <m.div variants={varScale({ distance: 24 }).inX}>
            <Box
              sx={{
                width: 32,
                height: 6,
                opacity: 0.24,
                borderRadius: 1,
                bgcolor: 'error.main',
                ...(standardLicense && { bgcolor: 'primary.main' }),
                ...(plusLicense && { bgcolor: 'secondary.main' }),
              }}
            />
          </m.div>
        </Stack>

        <m.div variants={varFade({ distance: 24 }).inLeft}>
          <Box component="span" sx={{ typography: 'h3' }}>
            ${plan.price}
          </Box>
        </m.div>
      </Stack>

      <Stack direction="row" spacing={2}>
        {plan.icons.map((icon, index) => (
          <Box
            component={m.img}
            variants={varFade().in}
            key={icon}
            alt={icon}
            src={icon}
            sx={{
              width: 24,
              height: 24,
              ...(standardLicense && [1, 2].includes(index) && { display: 'none' }),
            }}
          />
        ))}
        {standardLicense && (
          <Box component={m.span} variants={varFade().in} sx={{ ml: -1 }}>
            (Only)
          </Box>
        )}
      </Stack>

      <Stack spacing={2.5}>
        {plan.commons.map((option) => (
          <Stack
            key={option}
            component={m.div}
            variants={varFade().in}
            spacing={1.5}
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2' }}
          >
            <Iconify width={16} icon="eva:checkmark-fill" />
            {option}
          </Stack>
        ))}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {plan.options.map((option, index) => {
          const disabled =
            (standardLicense && [1, 2, 3].includes(index)) || (plusLicense && [3].includes(index));

          return (
            <Stack
              key={option}
              component={m.div}
              variants={varFade().in}
              spacing={1.5}
              direction="row"
              alignItems="center"
              sx={{
                typography: 'body2',
                ...(disabled && {
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }),
              }}
            >
              <Iconify width={18} icon={disabled ? 'mingcute:close-line' : 'eva:checkmark-fill'} />
              {option}
            </Stack>
          );
        })}
      </Stack>

      <m.div variants={varFade({ distance: 24 }).inUp}>
        <Button
          fullWidth
          variant={plusLicense ? 'contained' : 'outlined'}
          color="inherit"
          size="large"
          target="_blank"
          rel="noopener"
          href={paths.minimalUI}
        >
          Get started
        </Button>
      </m.div>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function CardLines() {
  return (
    <>
      <FloatLine vertical sx={{ top: -64, left: 0, height: 'calc(100% + (64px * 2))' }} />
      <FloatLine vertical sx={{ top: -64, right: 0, height: 'calc(100% + (64px * 2))' }} />
      <FloatXIcon sx={{ top: -8, left: -8 }} />
      <FloatXIcon sx={{ top: -8, right: -8 }} />
      <FloatXIcon sx={{ bottom: -8, left: -8 }} />
      <FloatXIcon sx={{ bottom: -8, right: -8 }} />
    </>
  );
}
