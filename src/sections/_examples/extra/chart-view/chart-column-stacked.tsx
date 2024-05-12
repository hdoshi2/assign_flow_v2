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

export function ChartColumnStacked({ chart }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [
    alpha(theme.palette.primary.dark, 0.8),
    theme.palette.warning.main,
    theme.palette.info.main,
    theme.palette.error.main,
  ];

  const chartOptions = useChart({
    chart: {
      id: 'demo-column-stacked-chart',
      stacked: true,
    },
    colors: chartColors,
    stroke: {
      width: 0,
    },
    legend: {
      show: true,
      itemMargin: {
        vertical: 8,
      },
      position: 'right',
    },
    xaxis: {
      type: 'datetime',
      categories: chart.categories,
    },
    plotOptions: {
      bar: {
        columnWidth: '36%',
      },
    },
  });

  return <Chart type="bar" series={chart.series} options={chartOptions} height={320} />;
}
