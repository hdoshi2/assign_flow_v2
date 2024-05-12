'use client';

import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export default function View() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Icons"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Icons' },
          ]}
          moreLink={[
            'https://mui.com/components/material-icons',
            'https://iconify.design/icon-sets',
          ]}
        />
      </ComponentHero>

      <ComponentContainer>
        <ComponentBlock title="Material">
          <Link
            href="https://mui.com/components/icons/#main-content"
            target="_blank"
            rel="noopener"
          >
            https://mui.com/components/icons/#main-content
          </Link>
        </ComponentBlock>

        <ComponentBlock title="Iconify">
          <Tooltip title="Iconify">
            <Iconify icon="eva:color-palette-fill" width={24} />
          </Tooltip>
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'action.active' }} />
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'action.disabled' }} />
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'primary.main' }} />
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'secondary.main' }} />
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'info.main' }} />
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'success.main' }} />
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'warning.main' }} />
          <Iconify icon="eva:color-palette-fill" width={24} sx={{ color: 'error.main' }} />
        </ComponentBlock>

        <ComponentBlock title="SvgColor">
          <Tooltip title="SvgColor">
            <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" />
          </Tooltip>
          <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'action.active' }} />
          <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'action.disabled' }} />
          <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'primary.main' }} />
          <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'secondary.main' }} />
          <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'info.main' }} />
          <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'success.main' }} />
          <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'warning.main' }} />
          <SvgColor src="/assets/icons/navbar/ic-dashboard.svg" sx={{ color: 'error.main' }} />
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
