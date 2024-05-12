import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Carousel, {
  useCarousel,
  CarouselDotButtons,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

import { IndexLabel } from './elements';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
  }[];
};

export function CarouselRightToLeft({ data }: Props) {
  const carousel = useCarousel({
    direction: 'rtl',
  });

  return (
    <Stack dir="rtl" sx={{ position: 'relative' }}>
      <Carousel
        carousel={carousel}
        sx={{
          borderRadius: 2,
        }}
      >
        {data.map((item, index) => (
          <CarouselItem key={item.id} index={index} item={item} />
        ))}
      </Carousel>

      <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options} />

      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ top: 16, right: 16, color: 'info.main', position: 'absolute' }}
      />
    </Stack>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  index: number;
  item: Props['data'][0];
};

function CarouselItem({ item, index }: CarouselItemProps) {
  const theme = useTheme();

  return (
    <Stack sx={{ position: 'relative' }}>
      <IndexLabel index={index + 1} />

      <Image
        alt={item.title}
        src={item.coverUrl}
        ratio="16/10"
        overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 20%, ${
          theme.palette.grey[900]
        } 80%)`}
      />

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{
          p: 3,
          left: 0,
          width: 1,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {item.title}
        </Typography>

        <IconButton color="inherit">
          <Iconify icon="eva:more-horizontal-fill" />
        </IconButton>
      </Stack>
    </Stack>
  );
}
