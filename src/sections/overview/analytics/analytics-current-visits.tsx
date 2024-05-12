import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart, ChartLegends, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    series: {
      label: string;
      value: number;
    }[];
    options?: ChartOptionsProps;
  };
};

export default function AnalyticsCurrentVisits({ title, subheader, chart, ...other }: Props) {
  const chartSeries = chart.series.map((i) => i.value);

  const chartColors = chart.colors;

  const chartOptions = useChart({
    chart: {
      id: 'analytics-current-visits-chart',
      sparkline: {
        enabled: true,
      },
    },
    colors: chartColors,
    labels: chart.series.map((i) => i.label),
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: (seriesName: string) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
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
        type="pie"
        series={chartSeries}
        options={chartOptions}
        height={{ xs: 240, xl: 260 }}
        sx={{ my: 6 }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <ChartLegends
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
