import { useState, useCallback } from 'react';

import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { fShortenNumber } from 'src/utils/format-number';

import Chart, {
  useChart,
  ChartSelect,
  ChartLegends,
  ChartOptionsProps,
} from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    series: {
      name: string;
      categories: string[];
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ChartOptionsProps;
  };
};

export default function BookingStatistics({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const [selectedSeries, setSelectedSeries] = useState('Yearly');

  const currentSeries = chart.series.find((i) => i.name === selectedSeries);

  const chartColors = [theme.palette.primary.dark, alpha(theme.palette.error.main, 0.48)];

  const chartOptions = useChart({
    chart: {
      id: 'booking-statistics-chart',
    },
    colors: chartColors,
    stroke: {
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: currentSeries?.categories,
    },
    tooltip: {
      y: {
        formatter: (value: number) => `${value}`,
      },
    },
    ...chart.options,
  });

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <ChartSelect
            options={chart.series.map((i) => i.name)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
        sx={{ mb: 3 }}
      />

      <ChartLegends
        multiSelect
        chartID={chartOptions.chart.id}
        legends={{
          colors: chartOptions.colors,
          labels: chart.series[0].data.map((i) => i.name),
          values: [fShortenNumber(6789), fShortenNumber(1234)],
        }}
        sx={{ px: 3, gap: 3 }}
      />

      <Chart
        type="bar"
        series={currentSeries?.data}
        options={chartOptions}
        height={320}
        sx={{ py: 3, px: 1 }}
      />
    </Card>
  );
}
