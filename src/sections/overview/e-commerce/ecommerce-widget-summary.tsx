import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber, fPercent } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import Chart, { useChart, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  total: number;
  percent: number;
  chart: {
    colors?: string[];
    categories: string[];
    series: number[];
    options?: ChartOptionsProps;
  };
};

export default function EcommerceWidgetSummary({
  title,
  percent,
  total,
  chart,
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [theme.palette.primary.light, theme.palette.primary.main];

  const chartOptions = useChart({
    chart: {
      id: 'ecommerce-widget-summary-chart',
      sparkline: {
        enabled: true,
      },
    },
    colors: [chartColors[1]],
    xaxis: {
      categories: chart.categories,
    },
    grid: {
      padding: {
        top: 6,
        left: 6,
        right: 6,
        bottom: 6,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: chartColors[0], opacity: 1 },
          { offset: 100, color: chartColors[1], opacity: 1 },
        ],
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
      marker: {
        show: false,
      },
    },
    ...chart.options,
  });

  const renderTrending = (
    <Stack spacing={0.5} direction="row" alignItems="center">
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          display: 'flex',
          borderRadius: '50%',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: alpha(theme.palette.success.main, 0.16),
          color: theme.palette.mode === 'light' ? 'success.dark' : 'success.light',
          ...(percent < 0 && {
            bgcolor: alpha(theme.palette.error.main, 0.16),
            color: theme.palette.mode === 'light' ? 'error.dark' : 'error.light',
          }),
        }}
      >
        <Iconify
          width={16}
          icon={percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'}
        />
      </Box>

      <Box component="span" sx={{ typography: 'subtitle2' }}>
        {percent > 0 && '+'}
        {fPercent(percent)}
      </Box>
      <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
        last week
      </Box>
    </Stack>
  );

  return (
    <Card
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={1.5} flexGrow={1}>
        <Box sx={{ typography: 'subtitle2' }}>{title}</Box>
        <Box sx={{ typography: 'h3' }}>{fNumber(total)}</Box>
        {renderTrending}
      </Stack>

      <Chart
        type="line"
        series={[{ data: chart.series }]}
        options={chartOptions}
        width={100}
        height={66}
      />
    </Card>
  );
}
