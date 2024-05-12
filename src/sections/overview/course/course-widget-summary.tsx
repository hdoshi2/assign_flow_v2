import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';

import { ColorSchema } from 'src/theme/palette';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = CardProps & {
  icon: string;
  title: string;
  total: number;
  color?: ColorSchema;
};

export default function CourseWidgetSummary({
  title,
  total,
  icon,
  color = 'warning',
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        py: 3,
        pl: 3,
        pr: 2.5,
        ...sx,
      }}
      {...other}
    >
      <Stack flexGrow={1}>
        <Box sx={{ typography: 'h3' }}>{fNumber(total)}</Box>
        <Typography noWrap variant="subtitle2" component="div" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
      </Stack>

      <SvgColor
        src={icon}
        sx={{
          top: 24,
          width: 36,
          right: 20,
          height: 36,
          position: 'absolute',
          background: `linear-gradient(135deg, ${theme.palette[color].main} 0%, ${theme.palette[color].dark} 100%)`,
        }}
      />

      <Box
        sx={{
          top: -44,
          width: 160,
          zIndex: -1,
          height: 160,
          right: -104,
          opacity: 0.12,
          borderRadius: 3,
          position: 'absolute',
          transform: 'rotate(40deg)',
          background: `linear-gradient(to right, ${theme.palette[color].main} 0%, ${alpha(theme.palette[color].main, 0)} 100%)`,
        }}
      />
    </Card>
  );
}
