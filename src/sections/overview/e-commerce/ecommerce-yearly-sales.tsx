import { useState, useCallback } from 'react';

import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

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
    categories?: string[];
    options?: ChartOptionsProps;
    series: {
      name: string;
      data: {
        name: string;
        data: number[];
      }[];
    }[];
  };
};

export default function EcommerceYearlySales({ title, subheader, chart, ...other }: Props) {
  const [selectedSeries, setSelectedSeries] = useState('2023');

  const chartColors = chart.colors;

  const chartOptions = useChart({
    chart: {
      id: 'ecommerce-yearly-sales-chart',
    },
    colors: chartColors,
    xaxis: {
      categories: chart.categories,
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
          values: [fShortenNumber(1234), fShortenNumber(6789)],
        }}
        sx={{ px: 3, gap: 3 }}
      />

      <Chart
        type="area"
        series={currentSeries?.data}
        options={chartOptions}
        height={320}
        sx={{ py: 3, px: 1 }}
      />
    </Card>
  );
}
