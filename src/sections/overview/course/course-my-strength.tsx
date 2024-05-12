import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  chart: {
    colors?: string[];
    categories: string[];
    series: {
      name?: string;
      data: number[];
    }[];
  };
};

export default function CourseMyStrength({ title, chart, ...other }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [theme.palette.primary.main];

  const chartOptions = useChart({
    chart: {
      id: 'course-my-strength-chart',
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

  return (
    <Card {...other}>
      <Typography variant="h6">{title}</Typography>
      <Chart type="radar" series={chart.series} options={chartOptions} height={280} />
    </Card>
  );
}
