import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    categories?: string[];
    series: {
      name: string;
      data: number[];
    }[];
    options?: ChartOptionsProps;
  };
};

export default function AnalyticsConversionRates({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors;

  const chartOptions = useChart({
    chart: {
      id: 'analytics-conversion-rates-chart',
    },
    colors: chartColors,
    stroke: {
      width: 2,
      colors: ['transparent'],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: (seriesName: string) => `${seriesName}: `,
        },
      },
    },
    xaxis: {
      categories: chart.categories,
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '10px',
        colors: ['#FFFFFF', theme.palette.text.primary],
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 2,
        barHeight: '48%',
        dataLabels: {
          position: 'top',
        },
      },
    },
    ...chart.options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Chart
        type="bar"
        series={chart.series}
        options={chartOptions}
        height={318}
        sx={{ pl: 1, pr: 2, pb: 2 }}
      />
    </Card>
  );
}
