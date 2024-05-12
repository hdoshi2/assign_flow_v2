import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import Carousel, {
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
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

export function CarouselYaxis({ data }: Props) {
  const carousel = useCarousel({ axis: 'y' });

  return (
    <Stack sx={{ position: 'relative' }}>
      <Carousel
        carousel={carousel}
        sx={{
          height: 480,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        {data.map((item, index) => (
          <CarouselItem key={item.id} index={index} item={item} />
        ))}
      </Carousel>

      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ top: 16, right: 16, position: 'absolute', color: 'warning.main' }}
      />

      <CarouselArrowBasicButtons
        {...carousel.arrows}
        options={carousel.options}
        slotProps={{
          prevBtn: { sx: { p: 0.75 } },
          nextBtn: { sx: { p: 0.75 } },
        }}
        sx={{
          p: 0.5,
          gap: 0.5,
          right: 16,
          bottom: 16,
          borderRadius: 1,
          position: 'absolute',
          bgcolor: 'common.white',
        }}
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
  return (
    <Stack sx={{ position: 'relative', height: 1 }}>
      <IndexLabel index={index + 1} />
      <Image alt={item.title} src={item.coverUrl} sx={{ height: 1 }} />
    </Stack>
  );
}
