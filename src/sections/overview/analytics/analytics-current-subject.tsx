import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import Chart, { useChart, ChartLegends, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    categories: string[];
    series: {
      name: string;
      data: number[];
    }[];
    options?: ChartOptionsProps;
  };
};

export default function AnalyticsCurrentSubject({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors;

  const chartOptions = useChart({
    chart: {
      id: 'analytics-current-subject-chart',
    },
    colors: chartColors,
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.48,
    },
    xaxis: {
      categories: chart.categories,
      labels: {
        style: {
          colors: [...Array(6)].map(() => theme.palette.text.secondary),
        },
      },
    },
    ...chart.options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Chart
        type="radar"
        series={chart.series}
        options={chartOptions}
        height={300}
        sx={{ my: 1 }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <ChartLegends
        viewOnly
        chartID={chartOptions.chart.id}
        legends={{
          labels: chart.series.map((i) => i.name),
          colors: chartOptions.colors,
        }}
        sx={{ p: 3, justifyContent: 'center' }}
      />
    </Card>
  );
}
