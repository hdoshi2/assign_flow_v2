import { useState, useCallback } from 'react';

import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import { fPercent, fCurrency } from 'src/utils/format-number';

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

export default function BankingBalanceStatistics({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const [selectedSeries, setSelectedSeries] = useState('Yearly');

  const currentSeries = chart.series.find((i) => i.name === selectedSeries);

  const chartColors = chart.colors ?? [
    theme.palette.primary.dark,
    theme.palette.warning.main,
    theme.palette.info.main,
  ];

  const chartOptions = useChart({
    chart: {
      id: 'banking-balance-statistics-chart',
    },
    stroke: {
      width: 2,
      colors: ['transparent'],
    },
    colors: chartColors,
    xaxis: {
      categories: currentSeries?.categories,
    },
    tooltip: {
      y: {
        formatter: (value: number) => fCurrency(value),
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
          sublabels: [`+${fPercent(43)}`, `+${fPercent(3)}`, `+${fPercent(8)}`],
          values: [fCurrency(6789), fCurrency(1234), fCurrency(1012)],
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
