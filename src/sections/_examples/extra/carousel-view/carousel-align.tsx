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

export function CarouselAlign({ data }: Props) {
  const carousel = useCarousel({
    containScroll: false,
    slidesToShow: '70%',
    slideSpacing: '20px',
  });

  return (
    <>
      <Carousel carousel={carousel}>
        {data.map((item, index) => (
          <CarouselItem key={item.id} index={index} item={item} />
        ))}
      </Carousel>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 3 }}>
        <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  index: number;
  item: Props['data'][0];
};

function CarouselItem({ item, index }: CarouselItemProps) {
  return (
    <Stack sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      <IndexLabel index={index + 1} />
      <Image alt={item.title} src={item.coverUrl} ratio="16/10" />
    </Stack>
  );
}
