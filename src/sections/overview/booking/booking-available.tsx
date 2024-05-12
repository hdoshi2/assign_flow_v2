import sumBy from 'lodash/sumBy';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type ItemProps = {
  label: string;
  value: number;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    series: ItemProps[];
    options?: ChartOptionsProps;
  };
};

export default function BookingAvailable({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const total = sumBy(chart.series, 'value');

  const chartSeries = (chart.series.filter((i) => i.label === 'Sold out')[0].value / total) * 100;

  const chartColors = chart.colors ?? [theme.palette.primary.light, theme.palette.primary.main];

  const chartOptions = useChart({
    chart: {
      id: 'booking-available-chart',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: chartColors[0], opacity: 1 },
          { offset: 100, color: chartColors[1], opacity: 1 },
        ],
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: -20,
        },
        track: {
          margin: -20,
          background: alpha(theme.palette.grey[500], 0.08),
        },
        dataLabels: {
          name: {
            offsetY: -12,
          },
          value: {
            offsetY: 6,
          },
          total: {
            label: 'Tours',
            formatter: () => fNumber(total),
          },
        },
      },
    },
    ...chart.options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />

      <Chart type="radialBar" series={[chartSeries]} options={chartOptions} height={240} />

      <Stack spacing={2} sx={{ p: 5 }}>
        {chart.series.map((item) => (
          <Stack
            key={item.label}
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{
              typography: 'subtitle2',
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 0.75,
                bgcolor: alpha(theme.palette.grey[500], 0.16),
                ...(item.label === 'Sold out' && {
                  bgcolor: chartColors[1],
                }),
              }}
            />
            <Box sx={{ color: 'text.secondary', flexGrow: 1 }}>{item.label}</Box>
            {item.value} Tours
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
