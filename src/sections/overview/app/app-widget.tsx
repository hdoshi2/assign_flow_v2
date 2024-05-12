import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { fNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import Chart, { useChart, ChartOptionsProps } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = StackProps & {
  icon: string;
  title: string;
  total: number;
  chart: {
    colors?: string[];
    series: number;
    options?: ChartOptionsProps;
  };
};

export default function AppWidget({ title, total, icon, chart, sx, ...other }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [theme.palette.primary.light, theme.palette.primary.main];

  const chartOptions = useChart({
    chart: {
      id: 'app-widget-chart',
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
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 6,
            color: theme.palette.common.white,
            fontSize: theme.typography.subtitle2.fontSize as string,
          },
        },
      },
    },
    ...chart.options,
  });

  return (
    <Stack
      spacing={3}
      direction="row"
      alignItems="center"
      sx={{
        p: 3,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        color: 'common.white',
        bgcolor: 'primary.dark',
        ...sx,
      }}
      {...other}
    >
      <Stack alignItems="center" justifyContent="center">
        <Chart
          type="radialBar"
          series={[chart.series]}
          options={chartOptions}
          width={80}
          height={80}
          sx={{ borderRadius: '50%', zIndex: 1 }}
        />

        <SvgColor
          src="/assets/background/abstract-circle-3.svg"
          sx={{
            width: 200,
            height: 200,
            opacity: 0.08,
            position: 'absolute',
            color: 'primary.light',
          }}
        />
      </Stack>

      <Stack>
        <Box component="span" sx={{ typography: 'h4' }}>
          {fNumber(total)}
        </Box>
        <Box component="span" sx={{ typography: 'subtitle2', opacity: 0.64 }}>
          {title}
        </Box>
      </Stack>

      <Iconify
        icon={icon}
        sx={{
          width: 120,
          right: -40,
          height: 120,
          opacity: 0.08,
          position: 'absolute',
        }}
      />
    </Stack>
  );
}
