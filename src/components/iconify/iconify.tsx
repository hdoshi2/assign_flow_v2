import { Icon } from '@iconify/react';
import React, { useState, useEffect, forwardRef } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { IconifyProps } from './types';
import { iconifyClasses } from './classes';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  icon: IconifyProps;
};

const Iconify = forwardRef<SVGElement, Props>(({ icon, width = 20, sx, ...other }, ref) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const placeholder = (
    <Box
      component="svg"
      className={iconifyClasses}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );

  if (!mounted) {
    return placeholder;
  }

  return (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      className={iconifyClasses}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
});

export default Iconify;
