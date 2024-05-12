import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import { fCurrency } from 'src/utils/format-number';

import Scrollbar from 'src/components/scrollbar';
import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  name: string;
  coverUrl: string;
  price: number;
  priceSale: number;
  colors: string[];
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: ItemProps[];
};

export default function EcommerceLatestProducts({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, minWidth: 360 }}>
          {list.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ProductItemProps = {
  product: ItemProps;
};

function ProductItem({ product }: ProductItemProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        variant="rounded"
        alt={product.name}
        src={product.coverUrl}
        sx={{ width: 48, height: 48, flexShrink: 0 }}
      />

      <Stack spacing={0.5} sx={{ flex: '1 1 auto', minWidth: 0 }}>
        <Link noWrap sx={{ color: 'text.primary', typography: 'subtitle2' }}>
          {product.name}
        </Link>

        <Stack spacing={0.5} direction="row" sx={{ typography: 'body2', color: 'text.secondary' }}>
          {!!product.priceSale && (
            <Box component="span" sx={{ textDecoration: 'line-through' }}>
              {fCurrency(product.priceSale)}
            </Box>
          )}
          <Box component="span" sx={{ color: product.priceSale ? 'error.main' : 'inherit' }}>
            {fCurrency(product.price)}
          </Box>
        </Stack>
      </Stack>

      <ColorPreview limit={3} colors={product.colors} />
    </Stack>
  );
}
