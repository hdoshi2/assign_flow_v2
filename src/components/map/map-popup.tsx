import { PopupProps } from 'react-map-gl';

import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

export type MapControlPopupProps = PopupProps & BoxProps;

// ----------------------------------------------------------------------

export default function MapPopup({ sx, children, ...other }: MapControlPopupProps) {
  return (
    <Box anchor="bottom" sx={sx} {...other}>
      {children}
    </Box>
  );
}
