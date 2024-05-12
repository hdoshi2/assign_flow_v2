'use client';

import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const PLACEMENTS = ['top', 'start', 'bottom', 'end'] as const;

// ----------------------------------------------------------------------

export default function View() {
  const DEMO = [
    {
      name: 'Basic',
      component: (
        <ComponentBlock>
          <Switch defaultChecked />
          <Switch />
          <Switch disabled />
          <Switch disabled checked />
          <Switch defaultChecked color="default" />
        </ComponentBlock>
      ),
    },
    {
      name: 'Sizes',
      component: (
        <ComponentBlock>
          <FormGroup row>
            <FormControlLabel control={<Switch size="small" />} label="Small" />
            <FormControlLabel control={<Switch />} label="Normal" />
          </FormGroup>
        </ComponentBlock>
      ),
    },
    {
      name: 'Placement',
      component: (
        <ComponentBlock>
          <FormGroup row>
            {PLACEMENTS.map((placement) => (
              <FormControlLabel
                key={placement}
                value={placement}
                label={placement}
                labelPlacement={placement}
                control={<Switch />}
                sx={{ textTransform: 'capitalize' }}
              />
            ))}
          </FormGroup>
        </ComponentBlock>
      ),
    },
    {
      name: 'Colors',
      component: (
        <ComponentBlock>
          <FormControl component="fieldset">
            <FormGroup>
              {COLORS.map((color) => (
                <FormControlLabel
                  key={color}
                  control={<Switch defaultChecked color={color} />}
                  label={color}
                  sx={{ textTransform: 'capitalize' }}
                />
              ))}

              <FormControlLabel disabled control={<Switch color="error" />} label="Disabled" />
            </FormGroup>
          </FormControl>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Switch"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Switch' },
          ]}
          moreLink={['https://mui.com/components/switches']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
