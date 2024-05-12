import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import Tab, { tabClasses } from '@mui/material/Tab';
import Card, { CardProps } from '@mui/material/Card';
import Tabs, { tabsClasses } from '@mui/material/Tabs';

import { fPercent, fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function BankingOverview({ sx, ...other }: CardProps) {
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState('income');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const chartColors =
    currentTab === 'income' ? [theme.palette.primary.dark] : [theme.palette.warning.dark];

  const chartOptions = useChart({
    chart: {
      id: 'banking-overview-chart',
    },
    colors: chartColors,
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    stroke: {
      width: 3,
    },
    tooltip: {
      marker: {
        show: false,
      },
      y: {
        formatter: (value: number) => fCurrency(value),
        title: {
          formatter: () => '',
        },
      },
    },
  });

  const tabs = [
    {
      value: 'income',
      label: 'Income',
      percent: 8.2,
      total: 9990,
      chart: {
        series: [{ data: [5, 31, 33, 50, 100, 76, 72, 76, 89] }],
      },
    },
    {
      value: 'expenses',
      label: 'Expenses',
      percent: -6.6,
      total: 1989,
      chart: {
        series: [{ data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }],
      },
    },
  ];

  const renderBalance = (
    <Stack flexGrow={1} spacing={1}>
      <Stack
        spacing={0.5}
        direction="row"
        alignItems="center"
        sx={{ color: 'text.secondary', typography: 'subtitle2' }}
      >
        Total Balance
        <Iconify width={16} icon="eva:info-outline" sx={{ color: 'text.disabled' }} />
      </Stack>
      <Box sx={{ typography: 'h3' }}>{fCurrency(49990)}</Box>
    </Stack>
  );

  const renderActions = (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Button variant="soft" size="small" startIcon={<Iconify icon="eva:arrow-upward-fill" />}>
        Send
      </Button>
      <Button variant="soft" size="small" startIcon={<Iconify icon="mingcute:add-line" />}>
        Add card
      </Button>
      <Button variant="soft" size="small" startIcon={<Iconify icon="eva:arrow-downward-fill" />}>
        Request
      </Button>
    </Stack>
  );

  const renderTabs = (
    <Tabs
      value={currentTab}
      onChange={handleChangeTab}
      variant="fullWidth"
      sx={{
        p: 1,
        my: 3,
        borderRadius: 2,
        minHeight: 'auto',
        bgcolor: 'background.neutral',
        [`& .${tabClasses.root}`]: {
          zIndex: 1,
          minHeight: 'auto',
          [`&:not(.${tabClasses.selected})`]: {
            color: 'inherit',
          },
        },
        [`& .${tabsClasses.indicator}`]: {
          width: 1,
          height: 1,
          borderRadius: 1.5,
          bgcolor: 'background.default',
          boxShadow: theme.customShadows.z8,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={
            <Stack
              spacing={{ xs: 1, md: 2.5 }}
              direction={{ xs: 'column', md: 'row' }}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{ p: 3, width: 1 }}
            >
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 48,
                  height: 48,
                  flexShrink: 0,
                  borderRadius: '50%',
                  color: 'primary.lighter',
                  bgcolor: 'primary.darker',
                  display: { xs: 'none', md: 'inline-flex' },
                  ...(tab.value === 'expenses' && {
                    color: 'warning.lighter',
                    bgcolor: 'warning.darker',
                  }),
                }}
              >
                <Iconify
                  width={24}
                  icon={
                    tab.value === 'expenses'
                      ? 'eva:diagonal-arrow-right-up-fill'
                      : 'eva:diagonal-arrow-left-down-fill'
                  }
                />
              </Stack>

              <Stack spacing={1}>
                <Stack
                  spacing={0.5}
                  direction="row"
                  alignItems="center"
                  sx={{ typography: 'subtitle2' }}
                >
                  {tab.label}
                  <Tooltip title={tab.label} placement="top">
                    <Iconify width={16} icon="eva:info-outline" sx={{ color: 'text.disabled' }} />
                  </Tooltip>
                </Stack>

                <Box sx={{ typography: 'h4' }}>{fCurrency(tab.total)}</Box>
              </Stack>

              <Label
                color={tab.percent < 0 ? 'error' : 'success'}
                startIcon={
                  <Iconify
                    width={24}
                    icon={
                      tab.percent < 0
                        ? 'solar:double-alt-arrow-down-bold-duotone'
                        : 'solar:double-alt-arrow-up-bold-duotone'
                    }
                  />
                }
                sx={{
                  top: 8,
                  right: 8,
                  position: { md: 'absolute' },
                }}
              >
                {tab.percent > 0 && '+'}
                {fPercent(tab.percent)}
              </Label>
            </Stack>
          }
        />
      ))}
    </Tabs>
  );

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Stack spacing={2} alignItems="flex-start" direction={{ xs: 'column', md: 'row' }}>
        {renderBalance}
        {renderActions}
      </Stack>

      {renderTabs}

      <Chart
        type="line"
        series={currentTab === 'income' ? tabs[0].chart.series : tabs[1].chart.series}
        options={chartOptions}
        height={270}
      />
    </Card>
  );
}
