import { useState, useCallback } from 'react';

import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import { fNumber, fShortenNumber } from 'src/utils/format-number';

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
    categories: string[];
    series: {
      name: string;
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ChartOptionsProps;
  };
};

export default function AppAreaInstalled({ title, subheader, chart, ...other }: Props) {
  const [selectedSeries, setSelectedSeries] = useState('2023');

  const chartColors = chart.colors;

  const chartOptions = useChart({
    chart: {
      id: 'app-area-installed-chart',
      stacked: true,
    },
    colors: chartColors,
    stroke: {
      width: 0,
    },
    xaxis: {
      categories: chart.categories,
    },
    tooltip: {
      y: {
        formatter: (value: number) => fNumber(value),
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
      },
    },
    ...chart.options,
  });

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  const currentSeries = chart.series.find((i) => i.name === selectedSeries);

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
          values: [fShortenNumber(1234), fShortenNumber(6789), fShortenNumber(1012)],
        }}
        sx={{ px: 3, gap: 3 }}
      />

      <Chart
        key={selectedSeries}
        type="bar"
        series={currentSeries?.data}
        options={chartOptions}
        height={320}
        sx={{ py: 3, px: 1 }}
      />
    </Card>
  );
}
