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

export default function CourseProgress({ title, subheader, chart, ...other }: Props) {
  const chartSeries = chart.series.map((i) => i.value);

  const chartColors = chart.colors;

  const chartOptions = useChart({
    chart: {
      id: 'course-progress-chart',
      sparkline: {
        enabled: true,
      },
    },
    colors: chartColors,
    labels: chart.series.map((i) => i.label),
    stroke: {
      width: 0,
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
          size: '72%',
          labels: {
            value: {
              formatter: (value: number | string) => fNumber(value),
            },
            total: {
              formatter: (w: { globals: { seriesTotals: number[] } }) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return fNumber(sum);
              },
            },
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
        type="donut"
        series={chartSeries}
        options={chartOptions}
        height={{ xs: 220, xl: 240 }}
        sx={{ mx: 'auto', my: 5 }}
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
