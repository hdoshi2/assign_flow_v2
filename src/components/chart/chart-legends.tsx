import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

type StyledProps = {
  isSingleSelected?: boolean;
  isMultiSelected?: boolean;
};

export const StyledLegend = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'isSingleSelected' && prop !== 'isMultiSelected',
})<StyledProps>(({ isSingleSelected, isMultiSelected, theme }) => ({
  gap: 6,
  fontSize: 13,
  justifyContent: 'flex-start',
  fontWeight: theme.typography.fontWeightMedium,
  '&:hover': {
    opacity: 0.8,
  },
  ...(isSingleSelected && {
    fontWeight: theme.typography.fontWeightBold,
  }),
  ...(isMultiSelected && {
    opacity: 0.48,
  }),
}));

export const StyledDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isSingleSelected',
})<StyledProps>(({ isSingleSelected }) => ({
  width: 12,
  height: 12,
  flexShrink: 0,
  display: 'flex',
  borderRadius: '50%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'currentColor',
  ...(isSingleSelected && {
    '&::before': {
      width: 20,
      height: 20,
      zIndex: -1,
      content: '""',
      opacity: 0.24,
      position: 'absolute',
      borderRadius: 'inherit',
      backgroundColor: 'currentColor',
    },
  }),
}));

// ----------------------------------------------------------------------

type Props = StackProps & {
  chartID?: string;
  viewOnly?: boolean;
  multiSelect?: boolean;
  legends: {
    labels?: string[];
    colors?: string[];
    values?: string[];
    sublabels?: string[];
    icons?: React.ReactNode[];
  };
};

export function ChartLegends({ chartID, legends, multiSelect, viewOnly, ...other }: Props) {
  const [singleSelected, setSingleSelected] = useState<string>('');

  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  const onSelect = useCallback(
    (inputValue: string) => {
      if (multiSelect) {
        const newSelected = multiSelected.includes(inputValue)
          ? multiSelected.filter((value) => value !== inputValue)
          : [...multiSelected, inputValue];

        setMultiSelected(newSelected);
      } else {
        setSingleSelected((prevSelected) => (prevSelected === inputValue ? '' : inputValue));
      }
    },
    [multiSelect, multiSelected]
  );

  const onToggleSeries = useCallback(
    (seriesName: string) => {
      if (chartID) {
        (window as any).ApexCharts.exec(chartID, 'toggleSeries', [seriesName]);
        onSelect(seriesName);
      }
    },
    [chartID, onSelect]
  );

  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      {legends?.labels?.map((series, index) => (
        <Stack spacing={1} key={series}>
          <StyledLegend
            disableRipple
            disabled={viewOnly}
            onClick={() => onToggleSeries(series)}
            isSingleSelected={singleSelected === series}
            isMultiSelected={multiSelected.includes(series)}
          >
            {legends.icons?.length ? (
              <Box
                component="span"
                sx={{
                  color: legends?.colors?.[index],
                  '& svg, & img': {
                    width: 20,
                    height: 20,
                  },
                }}
              >
                {legends?.icons?.[index]}
              </Box>
            ) : (
              <StyledDot
                component="span"
                isSingleSelected={singleSelected === series}
                sx={{ color: legends?.colors?.[index] }}
              />
            )}

            <Box component="span" sx={{ flexShrink: 0 }}>
              {series}
              {legends.sublabels && <> {` (${legends.sublabels[index]})`}</>}
            </Box>
          </StyledLegend>

          {legends.values && <Box sx={{ typography: 'h6' }}>{legends.values[index]}</Box>}
        </Stack>
      ))}
    </Stack>
  );
}
