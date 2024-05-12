'use client';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export default function View() {
  const theme = useTheme();

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="TextMaxLine"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'TextMaxLine' },
          ]}
        />
      </ComponentHero>

      <ComponentContainer
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
        }}
      >
        <ComponentBlock
          title="1 Line"
          sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
        >
          <Typography noWrap sx={{ width: 1 }}>
            Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
            sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
            pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
          </Typography>
        </ComponentBlock>

        <ComponentBlock
          title="2 Line"
          sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
        >
          <Typography
            sx={{
              ...theme.mixins.maxLine(2),
            }}
          >
            Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
            sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
            pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
          </Typography>
        </ComponentBlock>

        <ComponentBlock
          title="3 Line"
          sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
        >
          <Typography
            sx={{
              ...theme.mixins.maxLine(3),
            }}
          >
            Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
            sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
            pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
          </Typography>
        </ComponentBlock>

        <ComponentBlock
          title="4 Line"
          sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
        >
          <Typography
            sx={{
              ...theme.mixins.maxLine(3),
            }}
          >
            Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
            sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
            pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
          </Typography>
        </ComponentBlock>

        <ComponentBlock
          title="As Link"
          sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
        >
          <Link
            href="#"
            color="primary"
            sx={{
              maxWidth: 300,
              ...theme.mixins.maxLine(3),
            }}
          >
            Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
            sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
            pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
          </Link>
        </ComponentBlock>

        <ComponentBlock
          title="Persistent"
          sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
        >
          <Typography
            variant="h6"
            sx={{
              ...theme.mixins.maxLine(3, theme.typography.h6),
              bgcolor: 'background.neutral',
            }}
          >
            Donec posuere vulputate arcu.
          </Typography>
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
