import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import { fCurrency, fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Label, { labelClasses } from 'src/components/label';
import Carousel, {
  useCarousel,
  useCarouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  title: string;
  price: number;
  coverUrl: string;
  totalDuration: number;
  totalStudents: number;
};

type Props = StackProps & {
  title: string;
  list: ItemProps[];
};

export default function CourseFeatured({ title, list, ...other }: Props) {
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
        slidesToShow: 3,
      },
      [breakpointUp.lg]: {
        slidesToShow: '44%',
      },
    },
  });

  return (
    <Stack {...other}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <CarouselArrowBasicButtons {...carousel.arrows} />
      </Stack>

      <Carousel
        carousel={carousel}
        slotProps={{
          slide: { py: 3 },
        }}
        sx={{ px: 0.5 }}
      >
        {list.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: ItemProps;
};

function CarouselItem({ item }: CarouselItemProps) {
  const theme = useTheme();

  const renderImage = (
    <Box sx={{ px: 1, pt: 1 }}>
      <Image alt={item.title} src={item.coverUrl} ratio="5/4" sx={{ borderRadius: 1.5 }} />
    </Box>
  );

  const renderLabels = (
    <Stack
      spacing={1}
      direction="row"
      flexWrap="wrap"
      sx={{
        mb: 1.5,
        [`& .${labelClasses.root}`]: {
          typography: 'caption',
          color: 'text.secondary',
        },
      }}
    >
      <Label startIcon={<Iconify width={12} icon="solar:clock-circle-outline" />}>1h 40m</Label>

      <Label startIcon={<Iconify width={12} icon="solar:users-group-rounded-bold" />}>
        {fShortenNumber(item.totalStudents)}
      </Label>
    </Stack>
  );

  const renderFooter = (
    <Stack spacing={0.5} direction="row" alignItems="center" sx={{ mt: 2.5 }}>
      <Box component="span" sx={{ typography: 'h6' }}>
        {fCurrency(item.price)}
      </Box>
      <Box component="span" sx={{ typography: 'body2', color: 'text.secondary', flexGrow: 1 }}>
        / year
      </Box>
      <Button variant="contained" size="small">
        Join
      </Button>
    </Stack>
  );

  return (
    <Card>
      {renderImage}

      <Stack sx={{ px: 2, py: 2.5 }}>
        {renderLabels}

        <Link
          variant="subtitle2"
          color="inherit"
          underline="none"
          sx={{
            ...theme.mixins.maxLine(2, theme.typography.subtitle2),
          }}
        >
          {item.title}
        </Link>

        {renderFooter}
      </Stack>
    </Card>
  );
}
