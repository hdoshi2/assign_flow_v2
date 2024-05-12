import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import { fCurrency } from 'src/utils/format-number';

import Chart, { useChart, ChartLegends, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    icons?: React.ReactNode[];
    series: {
      label: string;
      value: number;
    }[];
    options?: ChartOptionsProps;
  };
};

export default function BankingExpensesCategories({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const chartSeries = chart.series.map((i) => i.value);

  const chartColors = chart.colors;

  const chartOptions = useChart({
    chart: {
      id: 'banking-expenses-categories-chart',
      offsetY: 12,
    },
    colors: chartColors,
    labels: chart.series.map((i) => i.label),
    stroke: {
      width: 1,
      colors: [theme.palette.background.paper],
    },
    fill: {
      opacity: 0.88,
    },
    tooltip: {
      y: {
        formatter: (value: number) => fCurrency(value),
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

      <Stack
        columnGap={5}
        rowGap={3}
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 4, pb: 3 }}
      >
        <Chart
          type="polarArea"
          series={chartSeries}
          options={chartOptions}
          width={{ xs: 240, md: 280 }}
          height={{ xs: 240, md: 280 }}
        />

        <ChartLegends
          viewOnly
          chartID={chartOptions.chart.id}
          legends={{
            colors: chartOptions.colors,
            labels: chartOptions.labels,
            icons: chart.icons,
            sublabels: chart.series.map((i) => fCurrency(i.value)),
          }}
          sx={{
            gap: 2.5,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        />
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        sx={{ textAlign: 'center', typography: 'h4' }}
      >
        <Stack spacing={1} sx={{ py: 2, borderRight: `dashed 1px ${theme.palette.divider}` }}>
          <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
            Categories
          </Box>
          9
        </Stack>

        <Stack spacing={1} sx={{ py: 2 }}>
          <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
            Categories
          </Box>
          $18,765
        </Stack>
      </Box>
    </Card>
  );
}
