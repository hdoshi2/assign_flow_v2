'use client';

import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import OrganizationalChart from 'src/components/organizational-chart';

import { GroupNode } from './group-node';
import { SimpleNode } from './simple-node';
import { StandardNode } from './standard-node';
import { ComponentHero } from '../../component-hero';
import { NodeProps, GROUP_DATA, SIMPLE_DATA } from './data';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export default function View() {
  const theme = useTheme();

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Organizational Chart"
          links={[{ name: 'Components', href: paths.components }, { name: 'Organizational Chart' }]}
          moreLink={[
            'https://www.npmjs.com/package/react-organizational-chart',
            'https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic',
          ]}
        />
      </ComponentHero>

      <ComponentContainer>
        <Stack spacing={5}>
          <ComponentBlock title="Simple">
            <Stack sx={{ overflowY: 'auto', py: 10 }}>
              <OrganizationalChart
                data={SIMPLE_DATA}
                lineColor={theme.palette.primary.light}
                nodeItem={(props: NodeProps) => <SimpleNode sx={{}} {...props} />}
                /* Or
                 * nodeItem={SimpleNode}
                 */
              />
            </Stack>
          </ComponentBlock>

          <ComponentBlock title="Standard">
            <Stack sx={{ overflowY: 'auto', py: 10 }}>
              <OrganizationalChart
                lineHeight="40px"
                data={SIMPLE_DATA}
                lineColor={theme.palette.primary.light}
                nodeItem={(props: NodeProps) => <StandardNode sx={{}} {...props} />}
                /* Or
                 * nodeItem={StandardNode}
                 */
              />
            </Stack>
          </ComponentBlock>

          <ComponentBlock title="Group">
            <Stack sx={{ overflowY: 'auto', py: 10 }}>
              <OrganizationalChart
                lineHeight="64px"
                data={GROUP_DATA}
                lineColor={theme.palette.primary.light}
                nodeItem={(props: NodeProps) => <GroupNode sx={{}} {...props} />}
                /* Or
                 * nodeItem={GroupNode}
                 */
              />
            </Stack>
          </ComponentBlock>
        </Stack>
      </ComponentContainer>
    </>
  );
}
