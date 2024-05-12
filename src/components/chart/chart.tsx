'use client';

import dynamic from 'next/dynamic';

import Stack from '@mui/material/Stack';

import { ChartProps } from './types';
import { ChartLoading } from './chart-loading';

// ----------------------------------------------------------------------

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <ChartLoading />,
});

// ----------------------------------------------------------------------

export default function Chart({ type, series, width = '100%', options, sx, ...other }: ChartProps) {
  return (
    <Stack
      sx={{
        width,
        flexShrink: 0,
        borderRadius: 1.5,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <ApexChart type={type} series={series} options={options} width="100%" height="100%" />
    </Stack>
  );
}
