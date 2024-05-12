import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

type Props = StackProps & {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
};

export default function AppWelcome({ title, description, action, img, ...other }: Props) {
  const theme = useTheme();

  return (
    <Stack
      spacing={5}
      alignItems="center"
      justifyContent={{ md: 'space-between' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{
        ...theme.mixins.bgGradient(
          `to right, ${alpha(theme.palette.grey[900], 0.88)} 0%, ${theme.palette.grey[900]} 75%`,
          '/assets/background/overlay-5.jpg'
        ),
        borderRadius: 2,
        position: 'relative',
        color: 'common.white',
        pt: 5,
        pb: 5,
        pr: 3,
        pl: { xs: 3, md: 5 },
        height: { md: 1 },
        textAlign: { xs: 'center', md: 'left' },
        border: `solid 1px ${theme.palette.grey[800]}`,
      }}
      {...other}
    >
      <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
        <Typography variant="h4" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            opacity: 0.64,
            ...(action && {
              mb: 3,
            }),
          }}
        >
          {description}
        </Typography>

        {action && action}
      </Stack>

      {img && <Stack sx={{ maxWidth: 260, flexShrink: 0 }}>{img}</Stack>}
    </Stack>
  );
}
