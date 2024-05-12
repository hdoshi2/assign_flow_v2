import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';

import Iconify from 'src/components/iconify';

import SvgColor from '../../svg-color';

// ----------------------------------------------------------------------

type Props = ButtonBaseProps & {
  icon: string;
  label: string;
  selected: boolean;
  tooltip?: string;
};

export default function BaseOption({ icon, label, tooltip, selected, ...other }: Props) {
  return (
    <ButtonBase
      disableRipple
      sx={{
        px: 2,
        py: 2.5,
        borderRadius: 2,
        cursor: 'pointer',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
        '&:hover': {
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
        },
        ...(selected && {
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
        }),
      }}
      {...other}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: 1, mb: 3 }}
      >
        <SvgColor src={`/assets/icons/setting/ic-${icon}.svg`} />
        <Switch size="small" color="default" checked={selected} sx={{ mr: -0.75 }} />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
        <Box
          component="span"
          sx={{
            fontSize: 13,
            lineHeight: '18px',
            fontWeight: 'fontWeightSemiBold',
          }}
        >
          {label}
        </Box>

        {tooltip && (
          <Tooltip
            title={tooltip}
            placement="top"
            arrow
            slotProps={{
              tooltip: {
                sx: {
                  maxWidth: 240,
                },
              },
            }}
          >
            <Iconify
              icon="eva:info-outline"
              width={16}
              sx={{ cursor: 'pointer', color: 'text.disabled' }}
            />
          </Tooltip>
        )}
      </Stack>
    </ButtonBase>
  );
}
