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

export function ChartArea({ chart }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [
    alpha(theme.palette.primary.dark, 0.8),
    theme.palette.warning.main,
  ];

  const chartOptions = useChart({
    chart: {
      id: 'demo-area-chart',
    },
    colors: chartColors,
    legend: {
      show: true,
    },
    xaxis: {
      type: 'datetime',
      categories: chart.categories,
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  });

  return <Chart type="area" series={chart.series} options={chartOptions} height={320} />;
}
