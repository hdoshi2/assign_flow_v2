import { m } from 'framer-motion';

import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import Label from 'src/components/label';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

type Props = {
  item: {
    name: string;
    icon: string;
    href: string;
    category?: string;
  };
};

export function ComponentCard({ item }: Props) {
  return (
    <Paper
      component={RouterLink}
      href={item.href}
      variant="outlined"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        textDecoration: 'none',
        borderColor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      {item.category && (
        <Label
          color={item.category === 'MUI X' ? 'info' : 'default'}
          sx={{ top: 8, right: 8, zIndex: 9, position: 'absolute' }}
        >
          {item.category}
        </Label>
      )}

      <CardActionArea
        component={m.div}
        whileHover="hover"
        sx={{
          p: 2.5,
          borderRadius: 0,
          color: 'text.secondary',
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        }}
      >
        <m.div variants={varHover(1.1)} transition={varTranHover()}>
          <Image
            alt={item.name}
            src={item.icon}
            ratio="1/1"
            sx={{
              width: 200,
              maxWidth: 1,
            }}
          />
        </m.div>
      </CardActionArea>

      <Typography variant="subtitle2" sx={{ p: 2, textAlign: 'center' }}>
        {item.name}
      </Typography>
    </Paper>
  );
}