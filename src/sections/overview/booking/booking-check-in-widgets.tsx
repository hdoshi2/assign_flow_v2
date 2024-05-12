import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Card, { CardProps } from '@mui/material/Card';

import { useResponsive } from 'src/hooks/use-responsive';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  chart: {
    colors?: string[];
    series: {
      label: string;
      percent: number;
      total: number;
    }[];
    options?: ChartOptionsProps;
  };
};

export default function BookingCheckInWidgets({ chart, ...other }: Props) {
  const theme = useTheme();

  const smUp = useResponsive('up', 'sm');

  const chartColors = chart.colors ?? [
    [theme.palette.primary.light, theme.palette.primary.main],
    [theme.palette.warning.light, theme.palette.warning.main],
  ];

  const chartOptions = useChart({
    chart: {
      id: 'booking-check-in-widgets-chart',
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
          { offset: 0, color: chartColors[0][0], opacity: 1 },
          { offset: 100, color: chartColors[0][1], opacity: 1 },
        ],
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 6,
            fontSize: theme.typography.subtitle2.fontSize as string,
            fontWeight: theme.typography.subtitle2.fontWeight,
          },
        },
      },
    },
    ...chart.options,
  });

  return (
    <Card {...other}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            flexItem
            orientation={smUp ? 'vertical' : 'horizontal'}
            sx={{ borderStyle: 'dashed' }}
          />
        }
      >
        {chart.series.map((item) => (
          <Stack
            key={item.label}
            spacing={3}
            direction="row"
            alignItems="center"
            justifyContent={{ sm: 'center' }}
            sx={{
              py: 5,
              width: 1,
              px: { xs: 3, sm: 0 },
            }}
          >
            <Chart
              type="radialBar"
              series={[item.percent]}
              options={{
                ...chartOptions,
                ...(item.label !== 'Sold' && {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorStops: [
                        { offset: 0, color: chartColors[1][0], opacity: 1 },
                        { offset: 100, color: chartColors[1][1], opacity: 1 },
                      ],
                    },
                  },
                }),
              }}
              width={80}
              height={80}
            />

            <Stack spacing={0.5}>
              <Box sx={{ typography: 'h5' }}>{fNumber(item.total)}</Box>
              <Box sx={{ typography: 'body2', color: 'text.secondary' }}>{item.label}</Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
