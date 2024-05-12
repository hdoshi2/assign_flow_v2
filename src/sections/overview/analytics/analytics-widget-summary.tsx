import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber, fPercent, fShortenNumber } from 'src/utils/format-number';

import { ColorSchema } from 'src/theme/palette';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import Chart, { useChart, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  total: number;
  percent: number;
  color?: ColorSchema;
  icon: React.ReactNode;
  chart: {
    categories: string[];
    series: number[];
    options?: ChartOptionsProps;
  };
};

export default function AnalyticsWidgetSummary({
  icon,
  title,
  total,
  chart,
  percent,
  color = 'primary',
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  const chartColors = [theme.palette[color].dark];

  const chartOptions = useChart({
    chart: {
      id: 'analytics-widget-summary-chart',
      sparkline: {
        enabled: true,
      },
    },
    colors: chartColors,
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
    <Stack
      spacing={0.5}
      direction="row"
      alignItems="center"
      sx={{ position: 'absolute', top: 16, right: 16 }}
    >
      <Iconify width={20} icon={percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'} />
      <Box component="span" sx={{ typography: 'subtitle2' }}>
        {percent > 0 && '+'}
        {fPercent(percent)}
      </Box>
    </Stack>
  );

  return (
    <Card
      sx={{
        ...theme.mixins.bgGradient(
          `135deg, ${alpha(theme.palette[color].lighter, 0.48)}, ${alpha(theme.palette[color].light, 0.48)}`
        ),
        p: 3,
        boxShadow: 'none',
        position: 'relative',
        color: `${color}.darker`,
        backgroundColor: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ width: 48, height: 48, mb: 3 }}>{icon}</Box>

      {renderTrending}

      <Stack direction="row" alignItems="flex-end">
        <Stack spacing={1} flexGrow={1}>
          <Box sx={{ typography: 'subtitle2', whiteSpace: 'nowrap' }}>{title}</Box>
          <Box sx={{ typography: 'h4' }}>{fShortenNumber(total)}</Box>
        </Stack>

        <Chart
          type="line"
          series={[{ data: chart.series }]}
          options={chartOptions}
          width={84}
          height={56}
        />
      </Stack>

      <SvgColor
        src="/assets/background/abstract-square-3.svg"
        sx={{
          top: 0,
          left: -20,
          width: 240,
          zIndex: -1,
          height: 240,
          opacity: 0.24,
          position: 'absolute',
          color: `${color}.main`,
        }}
      />
    </Card>
  );
}
