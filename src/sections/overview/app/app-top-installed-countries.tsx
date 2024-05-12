import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';

import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  country: string;
  android: number;
  windows: number;
  apple: number;
  flag: string;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: ItemProps[];
};

export default function AppTopInstalledCountries({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, minWidth: 360 }}>
          {list.map((item) => (
            <CountryItem key={item.id} item={item} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

type CountryItemProps = {
  item: ItemProps;
};

function CountryItem({ item }: CountryItemProps) {
  const largeItem = (
    <Stack spacing={1} direction="row" alignItems="center" sx={{ minWidth: 120 }}>
      <Iconify icon={item.flag} sx={{ borderRadius: 0.65, width: 28 }} />
      <Typography component="span" variant="subtitle2" noWrap>
        {item.country}
      </Typography>
    </Stack>
  );

  const smallItem = (icon: string, system: number) => (
    <Stack
      spacing={0.5}
      direction="row"
      alignItems="center"
      sx={{ minWidth: 80, typography: 'body2' }}
    >
      <Iconify icon={icon} width={14} sx={{ color: 'text.secondary' }} />
      {fShortenNumber(system)}
    </Stack>
  );

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      {largeItem}

      {smallItem('ant-design:android-filled', item.android)}
      {smallItem('mingcute:windows-fill', item.windows)}
      {smallItem('mingcute:apple-fill', item.apple)}
    </Stack>
  );
}
