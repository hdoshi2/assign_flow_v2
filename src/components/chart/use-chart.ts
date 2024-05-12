import merge from 'lodash/merge';

import { alpha, useTheme } from '@mui/material/styles';

import { ChartOptionsProps } from './types';

// ----------------------------------------------------------------------

export default function useChart(options?: ChartOptionsProps) {
  const theme = useTheme();

  const LABEL_TOTAL = {
    show: true,
    label: 'Total',
    color: theme.palette.text.secondary,
    ...theme.typography.subtitle2,
  };

  const LABEL_VALUE = {
    offsetY: 8,
    color: theme.palette.text.primary,
    ...theme.typography.h4,
  };

  const baseOptions = {
    /**
     * Chart
     */
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        speed: 360,
        animateGradually: {
          enabled: true,
          delay: 120,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 360,
        },
      },
      parentHeightOffset: 0,
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily,
    },

    /**
     * Colors
     */
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.success.main,
      theme.palette.warning.dark,
      theme.palette.success.darker,
      theme.palette.info.dark,
      theme.palette.info.darker,
    ],

    /**
     * States
     */
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
    },

    /**
     * Fill
     */
    fill: {
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    /**
     * Data labels
     */
    dataLabels: {
      enabled: false,
    },

    /**
     * Stroke
     */
    stroke: {
      width: 2.5,
      curve: 'smooth',
      lineCap: 'round',
    },

    /**
     * Grid
     */
    grid: {
      strokeDashArray: 3,
      borderColor: theme.palette.divider,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    /**
     * Xaxis
     */
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      tickAmount: 5,
    },

    /**
     * Markers
     */
    markers: {
      size: 0,
      strokeColors: theme.palette.background.paper,
    },

    /**
     * Tooltip
     */
    tooltip: {
      theme: false,
      fillSeriesColor: false,
      x: {
        show: true,
      },
    },

    /**
     * Legend
     */
    legend: {
      show: false,
      fontSize: 13,
      position: 'top',
      fontWeight: 500,
      horizontalAlign: 'right',
      itemMargin: {
        horizontal: 8,
      },
      labels: {
        colors: theme.palette.text.primary,
      },
    },

    /**
     * plotOptions
     */
    plotOptions: {
      /**
       * plotOptions: Bar
       */
      bar: {
        borderRadius: 4,
        columnWidth: '48%',
        borderRadiusApplication: 'end',
      },

      /**
       * plotOptions: Pie + Donut
       */
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL,
          },
        },
      },

      /**
       * plotOptions: Radialbar
       */
      radialBar: {
        hollow: {
          margin: -8,
          size: '100%',
        },
        track: {
          margin: -8,
          strokeWidth: '50%',
          background: alpha(theme.palette.grey[500], 0.16),
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL,
        },
      },

      /**
       * * plotOptions: Radar
       */
      radar: {
        polygons: {
          fill: { colors: ['transparent'] },
          strokeColors: theme.palette.divider,
          connectorColors: theme.palette.divider,
        },
      },

      /**
       * * plotOptions: polarArea
       */
      polarArea: {
        rings: {
          strokeColor: theme.palette.divider,
        },
        spokes: {
          connectorColors: theme.palette.divider,
        },
      },
    },

    /**
     * Responsive
     */
    responsive: [
      {
        // sm
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
              columnWidth: '80%',
            },
          },
        },
      },
      {
        // md
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '60%',
            },
          },
        },
      },
    ],
  };

  return merge(baseOptions, options);
}
