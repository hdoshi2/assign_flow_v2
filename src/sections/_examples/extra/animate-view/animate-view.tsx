'use client';

import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { AnimateOther } from './other';
import { AnimateScroll } from './scroll';
import { AnimateDialog } from './dialog';
import { AnimateInview } from './inview';
import { AnimateBackground } from './background';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

const TABS = [
  { value: 'inview', label: 'In View', component: <AnimateInview /> },
  { value: 'scroll', label: 'Scroll', component: <AnimateScroll /> },
  { value: 'dialog', label: 'Dialog', component: <AnimateDialog /> },
  { value: 'background', label: 'Background', component: <AnimateBackground /> },
  { value: 'other', label: 'Other', component: <AnimateOther /> },
];

// ----------------------------------------------------------------------

export default function View() {
  const [currentTab, setCurrentTab] = useState('inview');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Animate"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Animate' },
          ]}
          moreLink={['https://www.framer.com/api/motion']}
        />
      </ComponentHero>

      <ComponentContainer>
        <Tabs value={currentTab} onChange={handleChangeTab}>
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {TABS.map((tab) => tab.value === currentTab && <Box key={tab.value}>{tab.component}</Box>)}
      </ComponentContainer>
    </>
  );
}
