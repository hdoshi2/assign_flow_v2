import { m, MotionProps } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
import { alpha, Theme, SxProps, useTheme } from '@mui/material/styles';

import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

type TextProps = {
  title: string;
  variants?: MotionProps['variants'];
  sx?: SxProps<Theme>;
};

type Props = StackProps & {
  caption?: string;
  title: string;
  txtGradient?: string;
  description?: string;
  slotProps?: {
    title?: Omit<TextProps, 'title'>;
    caption?: Omit<TextProps, 'title'>;
    description?: Omit<TextProps, 'title'>;
  };
};

export function SectionTitle({
  caption,
  title,
  txtGradient,
  description,
  slotProps,
  ...other
}: Props) {
  const theme = useTheme();

  return (
    <Stack spacing={3} {...other}>
      {caption && (
        <SectionCaption
          title={caption}
          variants={slotProps?.caption?.variants}
          sx={slotProps?.caption?.sx}
        />
      )}

      <Typography
        component={m.h2}
        variant="h2"
        variants={slotProps?.title?.variants ?? varFade({ distance: 24 }).inUp}
        sx={slotProps?.title?.sx}
      >
        {`${title} `}
        <Box
          component="span"
          sx={{
            opacity: 0.4,
            display: 'inline-block',
            ...theme.mixins.textGradient(
              `to right, ${theme.palette.text.primary}, ${alpha(theme.palette.text.primary, 0.2)}`
            ),
          }}
        >
          {txtGradient}
        </Box>
      </Typography>

      {description && (
        <Typography
          component={m.p}
          variants={slotProps?.description?.variants ?? varFade({ distance: 24 }).inUp}
          sx={{
            color: 'text.secondary',
            ...slotProps?.description?.sx,
          }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function SectionCaption({ title, variants, sx }: TextProps) {
  return (
    <Stack
      component={m.span}
      variants={variants ?? varFade({ distance: 24 }).inUp}
      sx={{
        typography: 'overline',
        color: 'text.disabled',
        ...sx,
      }}
    >
      {title}
    </Stack>
  );
}
