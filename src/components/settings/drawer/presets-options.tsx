import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

import { presetOptions } from 'src/theme/options/presets';

import SvgColor from '../../svg-color';

// ----------------------------------------------------------------------

type Props = {
  value: string;
  onClickOption: (newValue: string) => void;
};

export default function PresetsOptions({ value, onClickOption }: Props) {
  const renderLabel = (
    <Box
      component="span"
      sx={{
        px: 1.25,
        top: -12,
        fontSize: 13,
        borderRadius: 22,
        lineHeight: '22px',
        position: 'absolute',
        bgcolor: 'text.primary',
        fontWeight: 'fontWeightSemiBold',
        color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
      }}
    >
      Presets
    </Box>
  );

  return (
    <Box
      sx={{
        px: 2,
        pb: 2,
        pt: 4,
        borderRadius: 2,
        position: 'relative',
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
      }}
    >
      {renderLabel}

      <Box gap={2} display="grid" gridTemplateColumns="repeat(3, 1fr)">
        {presetOptions.map((option) => {
          const selected = value === option.name;

          return (
            <ButtonBase
              key={option.name}
              onClick={() => onClickOption(option.name)}
              sx={{
                color: option.value,
                height: 64,
                borderRadius: 1.5,
                ...(selected && {
                  bgcolor: alpha(option.value, 0.08),
                }),
              }}
            >
              <SvgColor
                src="/assets/icons/setting/ic-siderbar-duotone.svg"
                sx={{ width: 28, height: 28, color: 'currentColor' }}
              />
            </ButtonBase>
          );
        })}
      </Box>
    </Box>
  );
}
