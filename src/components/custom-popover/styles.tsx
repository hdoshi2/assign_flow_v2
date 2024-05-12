import { alpha, styled } from '@mui/material/styles';

import { ArrowPositionType } from './types';

// ----------------------------------------------------------------------

export const StyledArrow = styled('span')<{ arrow: ArrowPositionType }>(({ arrow, theme }) => {
  const SIZE = 14;

  const POSITION = -(SIZE / 2) + 0.5;

  const styles = {
    top: { top: POSITION, transform: 'rotate(135deg)' },
    bottom: { bottom: POSITION, transform: 'rotate(-45deg)' },
    left: { left: POSITION, transform: 'rotate(45deg)' },
    right: { right: POSITION, transform: 'rotate(-135deg)' },
  };

  return {
    width: SIZE,
    height: SIZE,
    position: 'absolute',
    borderBottomLeftRadius: SIZE / 4,
    clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
    backgroundColor: theme.palette.background.paper,
    border: `solid 1px ${alpha(
      theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
      0.12
    )}`,
    /**
     * Top
     */
    ...(arrow === 'top-left' && { ...styles.top, left: 20 }),
    ...(arrow === 'top-center' && { ...styles.top, left: 0, right: 0, margin: 'auto' }),
    ...(arrow === 'top-right' && { ...styles.top, right: 20 }),
    /**
     * Bottom
     */
    ...(arrow === 'bottom-left' && { ...styles.bottom, left: 20 }),
    ...(arrow === 'bottom-center' && { ...styles.bottom, left: 0, right: 0, margin: 'auto' }),
    ...(arrow === 'bottom-right' && { ...styles.bottom, right: 20 }),
    /**
     * Left
     */
    ...(arrow === 'left-top' && { ...styles.left, top: 20 }),
    ...(arrow === 'left-center' && { ...styles.left, top: 0, bottom: 0, margin: 'auto' }),
    ...(arrow === 'left-bottom' && { ...styles.left, bottom: 20 }),
    /**
     * Right
     */
    ...(arrow === 'right-top' && { ...styles.right, top: 20 }),
    ...(arrow === 'right-center' && { ...styles.right, top: 0, bottom: 0, margin: 'auto' }),
    ...(arrow === 'right-bottom' && { ...styles.right, bottom: 20 }),
  };
});
