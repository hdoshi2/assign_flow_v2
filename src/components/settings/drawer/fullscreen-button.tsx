import { useState, useCallback } from 'react';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import SvgColor, { svgColorClasses } from '../../svg-color';

// ----------------------------------------------------------------------

export default function FullScreenButton() {
  const [fullscreen, setFullscreen] = useState(false);

  const onToggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }, []);

  return (
    <Tooltip title={fullscreen ? 'Exit' : 'Full Screen'}>
      <IconButton
        onClick={onToggleFullScreen}
        sx={{
          [`& .${svgColorClasses.root}`]: {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.grey[500]} 0%, ${theme.palette.grey[600]} 100%)`,
            ...(fullscreen && {
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            }),
          },
        }}
      >
        <SvgColor
          src={`/assets/icons/setting/${fullscreen ? 'ic-exit-full-screen' : 'ic-full-screen'}.svg`}
          sx={{ width: 18, height: 18 }}
        />
      </IconButton>
    </Tooltip>
  );
}
