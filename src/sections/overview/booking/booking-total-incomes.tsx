import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { fPercent, fCurrency } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import Chart, { useChart, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  total: number;
  title: string;
  percent: number;
  chart: {
    colors?: string[];
    categories: string[];
    series: {
      data: number[];
    }[];
    options?: ChartOptionsProps;
  };
};

export default function BookingTotalIncomes({ title, total, percent, chart, sx, ...other }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [alpha(theme.palette.primary.lighter, 0.64)];

  const chartOptions = useChart({
    chart: {
      id: 'booking-total-incomes-chart',
      sparkline: {
        enabled: true,
      },
    },
    colors: chartColors,
    stroke: {
      width: 3,
    },
    grid: {
      padding: {
        top: 6,
        left: 6,
        right: 6,
        bottom: 6,
      },
    },
    xaxis: {
      categories: chart.categories,
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
    ...chart.options,
  });

  const renderTrending = (
    <Stack spacing={0.5} alignItems="flex-end">
      <Stack spacing={0.5} direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
        <Iconify icon={percent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'} />
        <Box component="span">
          {percent > 0 && '+'}
          {fPercent(percent)}
        </Box>
      </Stack>
      <Box component="span" sx={{ opacity: 0.64, typography: 'body2' }}>
        last month
      </Box>
    </Stack>
  );

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 'none',
        color: 'primary.lighter',
        bgcolor: 'primary.darker',
        ...sx,
      }}
      {...other}
    >
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
        <Stack spacing={1}>
          <Box sx={{ typography: 'subtitle2' }}>{title}</Box>
          <Box sx={{ typography: 'h3' }}>{fCurrency(total)}</Box>
        </Stack>

        {renderTrending}
      </Stack>

      <Chart type="line" series={chart.series} options={chartOptions} height={120} />

      <SvgColor
        src="/assets/background/abstract-square-3.svg"
        sx={{
          top: 0,
          left: 0,
          width: 280,
          zIndex: -1,
          height: 280,
          opacity: 0.08,
          position: 'absolute',
          color: 'primary.lighter',
          transform: 'rotate(90deg)',
        }}
      />
    </Card>
  );
}
