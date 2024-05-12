import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { fPercent } from 'src/utils/format-number';
import { fDateTime, InputDateValue } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  title: string;
  totalLesson: number;
  currentLesson: number;
  reminderAt: InputDateValue;
};

type Props = CardProps & {
  title: string;
  list: ItemProps[];
};

export default function CourseReminders({ title, list, ...other }: Props) {
  const theme = useTheme();

  const colors = [
    theme.palette.info.main,
    theme.palette.error.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
  ];

  return (
    <Card {...other}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        {title}
      </Typography>

      <Stack spacing={3}>
        {list.map((item, index) => (
          <CourseItem
            key={item.id}
            item={item}
            sx={{
              color: colors[index],
            }}
          />
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

type CourseItemProps = StackProps & {
  item: ItemProps;
};

function CourseItem({ item, ...other }: CourseItemProps) {
  const percent = (item.currentLesson / item.totalLesson) * 100;

  return (
    <Stack direction="row" spacing={1.5} {...other}>
      <Box
        sx={{
          width: 6,
          my: '3px',
          height: 16,
          flexShrink: 0,
          opacity: 0.24,
          borderRadius: 1,
          bgcolor: 'currentColor',
        }}
      />

      <Stack spacing={1} sx={{ flex: '1 1 auto', minWidth: 0 }}>
        <Link variant="subtitle2" color="inherit" noWrap sx={{ color: 'text.primary' }}>
          {item.title}
        </Link>

        <Stack
          spacing={0.5}
          direction="row"
          alignItems="center"
          sx={{ typography: 'caption', color: 'text.secondary' }}
        >
          <Iconify width={16} icon="solar:calendar-date-bold" />
          {fDateTime(item.reminderAt)}
        </Stack>

        <Stack spacing={2} direction="row" alignItems="center">
          <LinearProgress
            color="warning"
            variant="determinate"
            value={percent}
            sx={{
              width: 1,
              height: 6,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.16),
              [` .${linearProgressClasses.bar}`]: {
                bgcolor: 'currentColor',
              },
            }}
          />
          <Box
            component="span"
            sx={{
              width: 40,
              typography: 'caption',
              color: 'text.primary',
              fontWeight: 'fontWeightMedium',
            }}
          >
            {fPercent(percent)}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
