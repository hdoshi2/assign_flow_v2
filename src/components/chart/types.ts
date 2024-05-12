import { ApexOptions } from 'apexcharts';

import { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

export type ChartOptionsProps = ApexOptions;

export type ChartProps = StackProps & {
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick'
    | 'boxPlot'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | 'rangeArea'
    | 'treemap';
  series?: ApexOptions['series'];
  options?: ApexOptions;
  [key: string]: any;
};
