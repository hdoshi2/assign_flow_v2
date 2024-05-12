import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box, { BoxProps } from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';

import { fDateTime, InputDateValue } from 'src/utils/format-time';

import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Carousel, {
  useCarousel,
  useCarouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  name: string;
  price: number;
  guests: string;
  isHot: boolean;
  duration: string;
  coverUrl: string;
  avatarUrl: string;
  bookedAt: InputDateValue;
};

type Props = BoxProps & {
  title?: string;
  subheader?: string;
  list: ItemProps[];
};

export default function BookingNewest({ title, subheader, list, sx, ...other }: Props) {
  const breakpointUp = useCarouselBreakpoints();

  const carousel = useCarousel({
    align: 'start',
    slidesToShow: 1,
    slideSpacing: '24px',
    breakpoints: {
      [breakpointUp.sm]: {
        slidesToShow: 2,
      },
      [breakpointUp.md]: {
        slidesToShow: 4,
      },
    },
  });

  return (
    <Box sx={{ py: 2, ...sx }} {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={<CarouselArrowBasicButtons {...carousel.arrows} />}
        sx={{ p: 0, mb: 3 }}
      />

      <Carousel carousel={carousel}>
        {list.map((item) => (
          <BookingItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

// ----------------------------------------------------------------------

type BookingItemProps = {
  item: ItemProps;
};

function BookingItem({ item }: BookingItemProps) {
  return (
    <Paper
      sx={{
        borderRadius: 2,
        position: 'relative',
        bgcolor: 'background.neutral',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          px: 2,
          pb: 1,
          pt: 2.5,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={item.name} src={item.avatarUrl} />
          <ListItemText
            primary={item.name}
            secondary={fDateTime(item.bookedAt)}
            secondaryTypographyProps={{
              mt: 0.5,
              component: 'span',
              typography: 'caption',
              color: 'text.disabled',
            }}
          />
        </Stack>

        <Stack
          rowGap={1.5}
          columnGap={3}
          flexWrap="wrap"
          direction="row"
          alignItems="center"
          sx={{ color: 'text.secondary', typography: 'caption' }}
        >
          <Stack direction="row" alignItems="center">
            <Iconify width={16} icon="solar:calendar-date-bold" sx={{ mr: 0.5, flexShrink: 0 }} />
            {item.duration}
          </Stack>

          <Stack direction="row" alignItems="center">
            <Iconify
              width={16}
              icon="solar:users-group-rounded-bold"
              sx={{ mr: 0.5, flexShrink: 0 }}
            />
            {item.guests} Guests
          </Stack>
        </Stack>
      </Stack>

      <Label
        variant="filled"
        sx={{
          right: 16,
          zIndex: 9,
          bottom: 16,
          position: 'absolute',
        }}
      >
        {item.isHot && '🔥'} ${item.price}
      </Label>

      <Box sx={{ p: 1, position: 'relative' }}>
        <Image alt={item.coverUrl} src={item.coverUrl} ratio="1/1" sx={{ borderRadius: 1.5 }} />
      </Box>
    </Paper>
  );
}
