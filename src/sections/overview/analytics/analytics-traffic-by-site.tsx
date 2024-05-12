import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: {
    value: string;
    label: string;
    total: number;
    icon: string;
  }[];
};

export default function AnalyticsTrafficBySite({ title, subheader, list, ...other }: Props) {
  const theme = useTheme();

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box display="grid" gap={2} gridTemplateColumns="repeat(2, 1fr)" sx={{ p: 3 }}>
        {list.map((site) => (
          <Stack
            key={site.label}
            alignItems="center"
            sx={{
              py: 2.5,
              borderRadius: 1.5,
              textAlign: 'center',
              border: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
            }}
          >
            <Iconify
              width={32}
              icon={site.icon}
              color={
                (site.value === 'facebook' && '#1877F2') ||
                (site.value === 'google' && '#DF3E30') ||
                (site.value === 'linkedin' && '#006097') ||
                (site.value === 'twitter' && theme.palette.text.primary) ||
                ''
              }
            />

            <Typography variant="h6" sx={{ mt: 1 }}>
              {fShortenNumber(site.total)}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {site.label}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Card>
  );
}
