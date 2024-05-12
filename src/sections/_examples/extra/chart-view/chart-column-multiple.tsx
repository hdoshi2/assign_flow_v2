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

export function ChartColumnMultiple({ chart }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [
    alpha(theme.palette.primary.dark, 0.8),
    theme.palette.warning.main,
  ];

  const chartOptions = useChart({
    chart: {
      id: 'demo-column-multiple-chart',
    },
    colors: chartColors,
    legend: {
      show: true,
    },
    xaxis: {
      categories: chart.categories,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    tooltip: {
      y: {
        formatter: (value: number) => `$ ${value} thousands`,
      },
    },
  });

  return <Chart type="bar" series={chart.series} options={chartOptions} height={320} />;
}
