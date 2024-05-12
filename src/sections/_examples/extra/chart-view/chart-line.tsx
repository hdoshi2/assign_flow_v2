import { alpha, useTheme } from '@mui/material/styles';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = {
  chart: {
    colors?: string[];
    categories: string[];
    series: {
      name?: string;
      data: number[];
    }[];
  };
};

export function ChartLine({ chart }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [
    alpha(theme.palette.primary.dark, 0.8),
    theme.palette.warning.main,
  ];

  const chartOptions = useChart({
    chart: {
      id: 'demo-line-chart',
    },
    colors: chartColors,
    legend: {
      show: true,
    },
    xaxis: {
      categories: chart.categories,
    },
  });

  return <Chart type="line" series={chart.series} options={chartOptions} height={320} />;
}
