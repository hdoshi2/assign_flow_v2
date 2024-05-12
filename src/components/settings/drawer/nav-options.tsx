import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { alpha, useTheme } from '@mui/material/styles';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';

import Iconify from 'src/components/iconify';

import SvgColor, { svgColorClasses } from '../../svg-color';

// ----------------------------------------------------------------------

type Props = {
  colorOptions: string[];
  layoutOptions: string[];
  colorValue: string;
  layoutValue: string;
  onClickColorOption: (newValue: string) => void;
  onClickLayoutOption: (newValue: string) => void;
};

export default function NavOptions({
  colorOptions,
  layoutOptions,
  colorValue,
  layoutValue,
  onClickLayoutOption,
  onClickColorOption,
}: Props) {
  const theme = useTheme();

  const cssVars = {
    '--item-bg': theme.palette.grey[500],
    '--item-radius': '12px',
    '--item-border-color': alpha(theme.palette.grey[500], 0.08),
    '--item-active-bg': `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    '--item-active-shadow': `-8px 8px 20px -4px ${alpha(theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black, 0.12)}`,
  };

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
        alignItems: 'center',
        display: 'inline-flex',
        bgcolor: 'text.primary',
        fontWeight: 'fontWeightSemiBold',
        color: theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
      }}
    >
      Nav
      <Tooltip title="Dashboard only" placement="right">
        <Iconify
          icon="eva:info-outline"
          width={14}
          sx={{ mr: -0.5, ml: 0.5, cursor: 'pointer', opacity: 0.48 }}
        />
      </Tooltip>
    </Box>
  );

  const smallLabelStyles = {
    fontSize: 11,
    lineHeight: '14px',
    color: 'text.secondary',
    fontWeight: 'fontWeightSemiBold',
  };

  const renderLayout = (
    <Stack spacing={1.5}>
      <Box component="span" sx={smallLabelStyles}>
        Layout
      </Box>

      <Stack direction="row" spacing={2}>
        {layoutOptions.map((option) => (
          <LayoutOption
            key={option}
            option={option}
            selected={layoutValue === option}
            onClick={() => onClickLayoutOption(option)}
          />
        ))}
      </Stack>
    </Stack>
  );

  const renderColor = (
    <Stack spacing={1.5} sx={{ mt: 2.5 }}>
      <Box component="span" sx={smallLabelStyles}>
        Color
      </Box>

      <Stack direction="row" spacing={2}>
        {colorOptions.map((option) => (
          <ColorOption
            key={option}
            option={option}
            selected={colorValue === option}
            onClick={() => onClickColorOption(option)}
          />
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        ...cssVars,
        px: 2,
        pb: 2,
        pt: 4,
        borderRadius: 2,
        position: 'relative',
        border: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
      }}
    >
      {renderLabel}

      {renderLayout}

      {renderColor}
    </Box>
  );
}

// ----------------------------------------------------------------------

type OptionProps = ButtonBaseProps & {
  option: string;
  selected: boolean;
};

export function LayoutOption({ option, selected, sx, ...other }: OptionProps) {
  const renderNav = () => {
    const baseStyles = {
      flexShrink: 0,
      borderRadius: 1,
      bgcolor: 'var(--item-bg)',
    };

    const circle = (
      <Box
        sx={{
          ...baseStyles,
          width: 10,
          height: 10,
          opacity: 0.8,
          ...(selected && {
            opacity: 1,
            background: 'var(--item-active-bg)',
          }),
        }}
      />
    );

    const primaryItem = (
      <Box
        sx={{
          ...baseStyles,
          width: 1,
          height: 4,
          opacity: 0.48,
          ...(option === 'horizontal' && { width: 16 }),
          ...(selected && { background: 'var(--item-active-bg)' }),
        }}
      />
    );

    const secondaryItem = (
      <Box
        sx={{
          ...baseStyles,
          width: 1,
          height: 4,
          maxWidth: 14,
          opacity: 0.24,
          ...(option === 'horizontal' && { maxWidth: 10 }),
          ...(selected && { background: 'var(--item-active-bg)' }),
        }}
      />
    );

    return (
      <Stack
        spacing={0.5}
        flexShrink={0}
        sx={{
          p: 0.75,
          width: 32,
          height: 1,
          borderRightWidth: 1,
          borderRightStyle: 'solid',
          borderRightColor: 'var(--item-border-color)',
          ...(option === 'mini' && { width: 22 }),
          ...(option === 'horizontal' && {
            width: 1,
            height: 22,
            alignItems: 'center',
            flexDirection: 'row',
            borderRight: 'none',
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: 'var(--item-border-color)',
          }),
        }}
      >
        {circle}
        {primaryItem}
        {secondaryItem}
      </Stack>
    );
  };

  const renderContent = (
    <Box sx={{ p: 0.5, flexGrow: 1, height: 1, width: 1 }}>
      <Box
        sx={{
          width: 1,
          height: 1,
          opacity: 0.2,
          borderRadius: 0.75,
          bgcolor: 'var(--item-bg)',
          ...(selected && { background: 'var(--item-active-bg)' }),
        }}
      />
    </Box>
  );

  return (
    <ButtonBase
      disableRipple
      sx={{
        width: 1,
        height: 64,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 'var(--item-radius)',
        borderColor: 'var(--item-border-color)',
        ...(option === 'horizontal' && {
          flexDirection: 'column',
        }),
        ...(selected && {
          boxShadow: 'var(--item-active-shadow)',
        }),
        ...sx,
      }}
      {...other}
    >
      {renderNav()}
      {renderContent}
    </ButtonBase>
  );
}

// ----------------------------------------------------------------------

export function ColorOption({ option, selected, sx, ...other }: OptionProps) {
  return (
    <ButtonBase
      disableRipple
      sx={{
        width: 1,
        height: 56,
        color: 'text.disabled',
        borderRadius: 'var(--item-radius)',
        ...(selected && {
          borderWidth: 1,
          borderStyle: 'solid',
          color: 'text.primary',
          boxShadow: 'var(--item-active-shadow)',
          borderColor: 'var(--item-border-color)',
          [`& .${svgColorClasses.root}`]: {
            background: 'var(--item-active-bg)',
          },
        }),
        ...sx,
      }}
      {...other}
    >
      <SvgColor
        src={`/assets/icons/setting/ic-sidebar-${option === 'integrate' ? 'outline' : 'filled'}.svg`}
        sx={{ mr: 1.5 }}
      />

      <Box
        component="span"
        sx={{
          fontSize: 13,
          lineHeight: '18px',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightSemiBold',
        }}
      >
        {option}
      </Box>
    </ButtonBase>
  );
}
