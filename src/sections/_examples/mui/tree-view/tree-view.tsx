'use client';

import { paths } from 'src/routes/paths';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { CustomIcons } from './custom-icon';
import { CustomStyling } from './custom-styling';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { BasicRichTree, BasicSimpleTree } from './basic';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export default function View() {
  const DEMO = [
    {
      name: 'Simple Tree View',
      component: (
        <ComponentBlock>
          <BasicSimpleTree />
        </ComponentBlock>
      ),
    },
    {
      name: 'Rich Tree View',
      component: (
        <ComponentBlock>
          <BasicRichTree />
        </ComponentBlock>
      ),
    },
    {
      name: 'Custom styling',
      component: (
        <ComponentBlock>
          <CustomStyling />
        </ComponentBlock>
      ),
    },
    {
      name: 'Custom icon',
      component: (
        <ComponentBlock>
          <CustomIcons />
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Tree View"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Tree View' },
          ]}
          moreLink={['https://mui.com/x/react-tree-view/']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
