import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { fPercent } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  title: string;
  coverUrl: string;
  totalLesson: number;
  currentLesson: number;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: ItemProps[];
};

export default function CourseContinue({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3 }}>
        {list.map((item) => (
          <CourseItem key={item.id} item={item} />
        ))}
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

type CourseItemProps = {
  item: ItemProps;
};

function CourseItem({ item }: CourseItemProps) {
  const percent = (item.currentLesson / item.totalLesson) * 100;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar
        alt={item.title}
        src={item.coverUrl}
        variant="rounded"
        sx={{ width: 56, height: 56 }}
      />

      <Stack
        sx={{
          minWidth: 0,
          flex: '1 1 auto',
        }}
      >
        <Link color="inherit" noWrap sx={{ mb: 0.5, typography: 'subtitle2' }}>
          {item.title}
        </Link>

        <Box component="span" sx={{ color: 'text.secondary', typography: 'caption' }}>
          Lessons: {item.currentLesson}/{item.totalLesson}
        </Box>

        <Stack spacing={2} direction="row" alignItems="center" sx={{ width: 1 }}>
          <LinearProgress
            color="warning"
            variant="determinate"
            value={percent}
            sx={{
              width: 1,
              height: 6,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.16),
              [` .${linearProgressClasses.bar}`]: {
                opacity: 0.8,
              },
            }}
          />
          <Box
            component="span"
            sx={{
              width: 40,
              typography: 'caption',
              color: 'text.secondary',
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
