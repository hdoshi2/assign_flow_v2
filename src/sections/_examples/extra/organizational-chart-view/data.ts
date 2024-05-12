import { Theme, SxProps } from '@mui/material/styles';

import { _mock } from 'src/_mock';

import { OrgChartBaseNode } from 'src/components/organizational-chart';

// ----------------------------------------------------------------------

export type NodeProps = OrgChartBaseNode & {
  id?: string;
  name: string;
  group?: string;
  role?: string;
  avatarUrl?: string;
  children?: any;
  sx?: SxProps<Theme>;
};

const rootNode = {
  role: 'ceo, co-founder',
  name: _mock.fullName(1),
  avatarUrl: _mock.image.avatar(1),
};

const group = {
  product: 'product design',
  development: 'development',
  marketing: 'marketing',
};

// ----------------------------------------------------------------------

export const SIMPLE_DATA = {
  ...rootNode,
  children: [
    {
      role: 'lead',
      id: _mock.id(2),
      name: _mock.fullName(2),
      avatarUrl: _mock.image.avatar(2),
      children: [
        {
          role: 'senior',
          id: _mock.id(3),
          name: _mock.fullName(3),
          avatarUrl: _mock.image.avatar(3),
        },
      ],
    },
    {
      role: 'lead',
      id: _mock.id(4),
      name: _mock.fullName(4),
      avatarUrl: _mock.image.avatar(4),
      children: [
        {
          role: 'senior',
          id: _mock.id(5),
          name: _mock.fullName(5),
          avatarUrl: _mock.image.avatar(5),
          children: [
            {
              role: 'back end developer',
              id: _mock.id(6),
              name: _mock.fullName(6),
              avatarUrl: _mock.image.avatar(6),
              children: [
                {
                  role: 'back end developer',
                  id: _mock.id(7),
                  name: _mock.fullName(7),
                  avatarUrl: _mock.image.avatar(7),
                },
              ],
            },
            {
              role: 'front end',
              id: _mock.id(8),
              name: _mock.fullName(8),
              avatarUrl: _mock.image.avatar(8),
            },
          ],
        },
      ],
    },
    {
      role: 'lead',
      id: _mock.id(9),
      name: _mock.fullName(9),
      avatarUrl: _mock.image.avatar(9),
      children: [
        {
          role: 'support',
          id: _mock.id(10),
          name: _mock.fullName(10),
          avatarUrl: _mock.image.avatar(10),
        },
        {
          role: 'content writer',
          id: _mock.id(11),
          name: _mock.fullName(11),
          avatarUrl: _mock.image.avatar(11),
        },
      ],
    },
  ],
};

// ----------------------------------------------------------------------

export const GROUP_DATA = {
  ...rootNode,
  children: [
    {
      name: group.product,
      group: group.product,
      children: [
        {
          group: group.product,
          role: 'lead',
          id: _mock.id(2),
          name: _mock.fullName(2),
          avatarUrl: _mock.image.avatar(2),
          children: [
            {
              group: group.product,
              role: 'senior',
              id: _mock.id(3),
              name: _mock.fullName(3),
              avatarUrl: _mock.image.avatar(3),
            },
          ],
        },
      ],
    },
    {
      name: group.development,
      group: group.development,
      children: [
        {
          group: group.development,
          role: 'lead',
          id: _mock.id(4),
          name: _mock.fullName(4),
          avatarUrl: _mock.image.avatar(4),
          children: [
            {
              group: group.development,
              role: 'senior',
              id: _mock.id(5),
              name: _mock.fullName(5),
              avatarUrl: _mock.image.avatar(5),
              children: [
                {
                  group: group.development,
                  role: 'back end developer',
                  id: _mock.id(6),
                  name: _mock.fullName(6),
                  avatarUrl: _mock.image.avatar(6),
                  children: [
                    {
                      group: group.development,
                      role: 'back end developer',
                      id: _mock.id(7),
                      name: _mock.fullName(7),
                      avatarUrl: _mock.image.avatar(7),
                    },
                  ],
                },
                {
                  group: group.development,
                  role: 'front end',
                  id: _mock.id(8),
                  name: _mock.fullName(8),
                  avatarUrl: _mock.image.avatar(8),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: group.marketing,
      group: group.marketing,
      children: [
        {
          group: group.marketing,
          role: 'lead',
          id: _mock.id(9),
          name: _mock.fullName(9),
          avatarUrl: _mock.image.avatar(9),
          children: [
            {
              group: group.marketing,
              role: 'lead',
              id: _mock.id(10),
              name: _mock.fullName(10),
              avatarUrl: _mock.image.avatar(10),
            },
            {
              group: group.marketing,
              role: 'content writer',
              id: _mock.id(11),
              name: _mock.fullName(11),
              avatarUrl: _mock.image.avatar(11),
            },
          ],
        },
      ],
    },
  ],
};
