import AutoHeight from 'embla-carousel-auto-height';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
import ListItemText from '@mui/material/ListItemText';

import { fDateTime, InputDateValue } from 'src/utils/format-time';

import Carousel, { useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  name: string;
  rating: number;
  tags: string[];
  avatarUrl: string;
  description: string;
  postedAt: InputDateValue;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: ItemProps[];
};

export default function BookingCustomerReviews({ title, subheader, list, ...other }: Props) {
  const carousel = useCarousel({ align: 'start' }, [AutoHeight()]);

  const customerInfo = list.find((_, index) => index === carousel.dots.selectedIndex);

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={<CarouselArrowBasicButtons {...carousel.arrows} />}
      />

      <Carousel carousel={carousel}>
        {list.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </Carousel>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={2} direction="row" alignItems="center" sx={{ p: 3 }}>
        <Button
          fullWidth
          color="error"
          variant="soft"
          onClick={() => console.info('ACCEPT', customerInfo?.id)}
        >
          Reject
        </Button>

        <Button
          fullWidth
          color="inherit"
          variant="contained"
          onClick={() => console.info('REJECT', customerInfo?.id)}
        >
          Accept
        </Button>
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ReviewItemProps = {
  item: ItemProps;
};

function ReviewItem({ item }: ReviewItemProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        p: 3,
        position: 'relative',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt={item.name} src={item.avatarUrl} sx={{ width: 48, height: 48 }} />

        <ListItemText
          primary={item.name}
          secondary={`Posted ${fDateTime(item.postedAt)}`}
          secondaryTypographyProps={{
            component: 'span',
            typography: 'caption',
            mt: 0.5,
            color: 'text.disabled',
          }}
        />
      </Stack>

      <Rating value={item.rating} size="small" readOnly precision={0.5} />

      <Typography variant="body2">{item.description}</Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {item.tags.map((tag) => (
          <Chip size="small" variant="soft" key={tag} label={tag} />
        ))}
      </Stack>
    </Stack>
  );
}
