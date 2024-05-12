import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart, ChartLegends, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  total: number;
  chart: {
    colors?: string[][];
    series: {
      label: string;
      value: number;
    }[];
    options?: ChartOptionsProps;
  };
};

export default function EcommerceSaleByGender({ title, subheader, total, chart, ...other }: Props) {
  const theme = useTheme();

  const chartSeries = chart.series.map((i) => i.value);

  const chartColors = chart.colors ?? [
    [theme.palette.primary.light, theme.palette.primary.main],
    [alpha(theme.palette.warning.light, 0.8), alpha(theme.palette.warning.main, 0.8)],
    [alpha(theme.palette.error.light, 0.8), alpha(theme.palette.error.main, 0.8)],
  ];

  const chartOptions = useChart({
    chart: {
      id: 'ecommerce-sale-by-gender-chart',
      sparkline: {
        enabled: true,
      },
    },
    colors: chartColors.map((color) => color[1]),
    labels: chart.series.map((i) => i.label),
    stroke: {
      width: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: chartColors.map((color) => [
          { offset: 0, color: color[0], opacity: 1 },
          { offset: 100, color: color[1], opacity: 1 },
        ]),
      },
    },
    grid: {
      padding: {
        top: -40,
        bottom: -40,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 10,
          size: '32%',
        },
        track: {
          margin: 10,
          background: alpha(theme.palette.grey[500], 0.08),
        },
        dataLabels: {
          total: {
            formatter: () => fNumber(total),
          },
          value: {
            offsetY: 2,
            fontSize: theme.typography.h5.fontSize as string,
          },
          name: {
            offsetY: -10,
          },
        },
      },
    },
    ...chart.options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Chart
        type="radialBar"
        series={chartSeries}
        options={chartOptions}
        height={{ xs: 300, xl: 320 }}
        sx={{ my: 1.5 }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <ChartLegends
        multiSelect
        chartID={chartOptions.chart.id}
        legends={{
          labels: chartOptions.labels,
          colors: chartOptions.colors,
        }}
        sx={{ p: 3, justifyContent: 'center' }}
      />
    </Card>
  );
}
