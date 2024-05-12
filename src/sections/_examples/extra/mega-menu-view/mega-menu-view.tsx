'use client';

import { paths } from 'src/routes/paths';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { DemoMegaMenuMobile } from './mobile';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';
import { DemoMegaMenuDesktopVertical } from './desktop-vertical';
import { DemoMegaMenuDesktopHorizontal } from './desktop-horizontal';

// ----------------------------------------------------------------------

export default function View() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Mega Menu"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Mega Menu' },
          ]}
        />
      </ComponentHero>

      <DemoMegaMenuDesktopHorizontal />

      <ComponentContainer sx={{ alignItems: 'flex-start' }}>
        <DemoMegaMenuMobile />
        <DemoMegaMenuDesktopVertical />
      </ComponentContainer>
    </>
  );
}
