'use client';

import Stack from '@mui/material/Stack';
import { cardClasses } from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { MainContent } from 'src/layouts/dashboard';
import { _coursesContinue, _coursesFeatured, _coursesReminder } from 'src/_mock';

import CourseProgress from '../course-progress';
import CourseContinue from '../course-continue';
import CourseFeatured from '../course-featured';
import CourseReminders from '../course-reminders';
import CourseMyAccount from '../course-my-account';
import CourseHoursSpent from '../course-hours-spent';
import CourseMyStrength from '../course-my-strength';
import CourseWidgetSummary from '../course-widget-summary';

// ----------------------------------------------------------------------

export default function OverviewCourseView() {
  const theme = useTheme();

  return (
    <MainContent
      maxWidth={false}
      disablePadding
      sx={{
        minHeight: 1,
        borderTop: {
          lg: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
        },
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          lg: 'row',
        }}
        sx={{ minHeight: 1 }}
      >
        <Stack
          spacing={3}
          sx={{
            py: { lg: 3, xl: 5 },
            px: { xs: 2, sm: 3, xl: 5 },
            flex: { lg: '1 1 auto' },
            minWidth: { lg: 0 },
            borderRight: {
              lg: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
            },
          }}
        >
          <Stack spacing={1} sx={{ mb: 2 }}>
            <Typography variant="h4">Hi, Hudson 👋</Typography>
            <Typography
              sx={{ color: 'text.secondary' }}
            >{`Let's learn something new today!`}</Typography>
          </Stack>

          <Stack
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            }}
          >
            <CourseWidgetSummary
              title="Courses in progress"
              total={6}
              icon="/assets/icons/courses/ic-courses-progress.svg"
            />

            <CourseWidgetSummary
              title="Courses completed"
              total={3}
              color="success"
              icon="/assets/icons/courses/ic-courses-completed.svg"
            />

            <CourseWidgetSummary
              title="Certificates"
              total={2}
              color="secondary"
              icon="/assets/icons/courses/ic-courses-certificates.svg"
            />
          </Stack>

          <CourseHoursSpent
            title="Hours Spent"
            chart={{
              series: [
                {
                  name: 'Weekly',
                  categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                  data: [{ data: [10, 41, 35, 151, 49] }],
                },
                {
                  name: 'Monthly',
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                  data: [{ data: [83, 112, 119, 88, 103, 112, 114, 108, 93] }],
                },
                {
                  name: 'Yearly',
                  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
                  data: [{ data: [76, 42, 29, 41, 27, 96] }],
                },
              ],
            }}
          />

          <Stack
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            alignItems="flex-start"
          >
            <CourseProgress
              title="Course Progress"
              chart={{
                series: [
                  { label: 'To Start', value: 45 },
                  { label: 'In Progress', value: 25 },
                  { label: 'Completed', value: 20 },
                ],
                colors: [
                  alpha(theme.palette.grey[500], 0.24),
                  theme.palette.success.dark,
                  theme.palette.warning.main,
                ],
              }}
            />

            <CourseContinue title="Continue Course" list={_coursesContinue} />
          </Stack>

          <CourseFeatured title="Featured Course" list={_coursesFeatured} />
        </Stack>

        <Stack
          spacing={{ xs: 3, lg: 5, xl: 8 }}
          sx={{
            width: 1,
            px: { lg: 3, xl: 5 },
            py: { lg: 8, xl: 10 },
            maxWidth: { lg: 320, xl: 360 },
            flexShrink: { lg: 0 },
            bgcolor: { lg: 'background.neutral' },
            [`& .${cardClasses.root}`]: {
              p: { xs: 3, lg: 0 },
              boxShadow: { lg: 'none' },
              bgcolor: { lg: 'transparent' },
            },
          }}
        >
          <CourseMyAccount />

          <CourseMyStrength
            title="Strength"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [{ data: [80, 50, 30, 40, 100, 20] }],
            }}
          />

          <CourseReminders title="Reminders" list={_coursesReminder} />
        </Stack>
      </Stack>
    </MainContent>
  );
}
