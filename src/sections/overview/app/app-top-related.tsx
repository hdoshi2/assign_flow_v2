import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Tab, { tabClasses } from '@mui/material/Tab';
import Card, { CardProps } from '@mui/material/Card';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { svgIconClasses } from '@mui/material/SvgIcon';

import { fData, fCurrency, fShortenNumber } from 'src/utils/format-number';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: '7days',
    label: 'Top 7 days',
  },
  {
    value: '30days',
    label: 'Top 30 days',
  },
  {
    value: 'all',
    label: 'All Times',
  },
];

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  name: string;
  size: number;
  price: number;
  shortcut: string;
  downloaded: number;
  ratingNumber: number;
  totalReviews: number;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: ItemProps[];
};

export default function AppTopRelated({ title, subheader, list, ...other }: Props) {
  const [currentTab, setCurrentTab] = useState('7days');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const renderTabs = (
    <Tabs
      value={currentTab}
      onChange={handleChangeTab}
      variant="fullWidth"
      sx={{
        p: 1,
        bgcolor: 'background.neutral',
        [`& .${tabClasses.root}`]: {
          py: 1,
          zIndex: 1,
          height: 38,
          minHeight: 'auto',
        },
        [`& .${tabsClasses.indicator}`]: {
          width: 1,
          height: 1,
          borderRadius: 1,
          bgcolor: 'background.default',
          boxShadow: (theme) => theme.customShadows.z1,
        },
      }}
    >
      {TABS.map((tab) => (
        <Tab key={tab.value} value={tab.value} label={tab.label} />
      ))}
    </Tabs>
  );

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      {renderTabs}

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, minWidth: 360 }}>
          {list.map((item) => (
            <ApplicationItem key={item.id} item={item} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ApplicationItemProps = {
  item: ItemProps;
};

function ApplicationItem({ item }: ApplicationItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar
        variant="rounded"
        src={item.shortcut}
        sx={{
          p: 1,
          width: 48,
          height: 48,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="subtitle2" noWrap>
            {item.name}
          </Typography>

          <Label color={item.price === 0 ? 'default' : 'success'} sx={{ height: 20 }}>
            {item.price === 0 ? 'Free' : fCurrency(item.price)}
          </Label>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          divider={
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                bgcolor: 'text.disabled',
              }}
            />
          }
          sx={{ typography: 'caption' }}
        >
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Iconify width={16} icon="solar:download-bold" sx={{ color: 'text.disabled' }} />
            {fShortenNumber(item.downloaded)}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Iconify width={16} icon="heroicons:server-solid" sx={{ color: 'text.disabled' }} />
            {fData(item.size)}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Rating
              readOnly
              size="small"
              precision={0.5}
              name="reviews"
              value={item.ratingNumber}
              max={1}
              sx={{
                [` .${svgIconClasses.root}`]: {
                  width: 16,
                  height: 16,
                },
              }}
            />
            {fShortenNumber(item.totalReviews)}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
