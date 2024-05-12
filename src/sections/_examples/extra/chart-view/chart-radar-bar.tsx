import { useTheme } from '@mui/material/styles';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = {
  chart: {
    colors?: string[];
    categories: string[];
    series: {
      name: string;
      data: number[];
    }[];
  };
};

export function ChartRadarBar({ chart }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [
    theme.palette.primary.main,
    theme.palette.warning.main,
    theme.palette.error.main,
  ];

  const chartOptions = useChart({
    chart: {
      id: 'demo-radarbar-chart',
    },
    colors: chartColors,
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.48,
    },
    legend: {
      show: true,
      position: 'right',
      floating: true,
      itemMargin: {
        vertical: 8,
      },
    },
    xaxis: {
      categories: chart.categories,
      labels: {
        style: {
          colors: [
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
          ],
        },
      },
    },
  });

  return <Chart type="radar" series={chart.series} options={chartOptions} height={280} />;
}
