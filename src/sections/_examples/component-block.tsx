import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import Container, { ContainerProps } from '@mui/material/Container';

// ----------------------------------------------------------------------

type ComponentBlockProps = StackProps & {
  title?: string;
};

export function ComponentBlock({ title, sx, children, ...other }: ComponentBlockProps) {
  return (
    <Stack
      sx={{
        px: 3,
        py: 6,
        gap: 2,
        width: 1,
        flexWrap: 'wrap',
        borderRadius: 1.5,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        boxShadow: (theme) => `0 0 0 1px ${alpha(theme.palette.grey[500], 0.16)}`,
        ...sx,
      }}
      {...other}
    >
      {title && (
        <Box
          component="span"
          sx={{
            px: 1,
            top: 0,
            ml: 2.5,
            left: 0,
            py: 0.25,
            borderRadius: 2,
            color: 'grey.800',
            position: 'absolute',
            bgcolor: 'common.white',
            transform: 'translateY(-50%)',
            fontSize: (theme) => theme.typography.caption.fontSize,
            fontWeight: (theme) => theme.typography.fontWeightSemiBold,
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.4)}`,
          }}
        >
          {title}
        </Box>
      )}

      {children}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ComponentContainer({ children, sx, ...other }: ContainerProps) {
  return (
    <Container
      sx={{
        mt: 10,
        mb: 15,
        gap: 5,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Container>
  );
}
