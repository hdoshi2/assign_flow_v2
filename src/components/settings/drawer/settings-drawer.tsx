'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer, { drawerClasses } from '@mui/material/Drawer';

import { paper } from 'src/theme/css';

import Iconify from '../../iconify';
import NavOptions from './nav-options';
import BaseOption from './base-option';
import Scrollbar from '../../scrollbar';
import PresetsOptions from './presets-options';
import { useSettingsContext } from '../context';
import FullScreenButton from './fullscreen-button';

// ----------------------------------------------------------------------

export default function SettingsDrawer() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2, pr: 1, pl: 2.5 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Settings
      </Typography>

      <FullScreenButton />

      <Tooltip title="Reset">
        <IconButton onClick={settings.onReset}>
          <Badge color="error" variant="dot" invisible={!settings.canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>

      <Tooltip title="Close">
        <IconButton onClick={settings.onClose}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </Tooltip>
    </Stack>
  );

  const renderMode = (
    <BaseOption
      label="Dark mode"
      icon="moon"
      selected={settings.themeMode === 'dark'}
      onClick={() =>
        settings.onUpdateField('themeMode', settings.themeMode === 'light' ? 'dark' : 'light')
      }
    />
  );

  const renderContrast = (
    <BaseOption
      label="Contrast"
      icon="contrast"
      selected={settings.themeContrast === 'bold'}
      onClick={() =>
        settings.onUpdateField(
          'themeContrast',
          settings.themeContrast === 'default' ? 'bold' : 'default'
        )
      }
    />
  );

  const renderRTL = (
    <BaseOption
      label="Right to left"
      icon="align-right"
      selected={settings.themeDirection === 'rtl'}
      onClick={() =>
        settings.onUpdateField('themeDirection', settings.themeDirection === 'ltr' ? 'rtl' : 'ltr')
      }
    />
  );

  const renderCompact = (
    <BaseOption
      tooltip="Dashboard only and available at large resolutions > 1600px (xl)"
      label="Compact"
      icon="autofit-width"
      selected={settings.themeStretch}
      onClick={() => settings.onUpdateField('themeStretch', !settings.themeStretch)}
    />
  );

  const renderPresets = (
    <PresetsOptions
      value={settings.themeColorPresets}
      onClickOption={(newValue) =>
        settings.onUpdateField('themeColorPresets', newValue as typeof settings.themeColorPresets)
      }
    />
  );

  const renderNav = (
    <NavOptions
      colorValue={settings.themeNavColor}
      colorOptions={['integrate', 'apparent']}
      onClickColorOption={(newValue) =>
        settings.onUpdateField('themeNavColor', newValue as typeof settings.themeNavColor)
      }
      layoutValue={settings.themeLayout}
      layoutOptions={['vertical', 'horizontal', 'mini']}
      onClickLayoutOption={(newValue) =>
        settings.onUpdateField('themeLayout', newValue as typeof settings.themeLayout)
      }
    />
  );

  return (
    <Drawer
      anchor="right"
      open={settings.open}
      onClose={settings.onClose}
      slotProps={{
        backdrop: { invisible: true },
      }}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          ...paper({ theme, bgcolor: theme.palette.background.default }),
          width: 360,
        },
      }}
    >
      {renderHead}

      <Scrollbar>
        <Stack spacing={6} sx={{ px: 2.5, pt: 1, pb: 5 }}>
          <Box gap={2} display="grid" gridTemplateColumns="repeat(2, 1fr)">
            {renderMode}

            {renderContrast}

            {renderRTL}

            {renderCompact}
          </Box>

          {renderNav}

          {renderPresets}
        </Stack>
      </Scrollbar>
    </Drawer>
  );
}
