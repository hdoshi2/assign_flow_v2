import Autoplay from 'embla-carousel-autoplay';

import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselDotButtons } from 'src/components/carousel';

import { IndexLabel, PlayButton } from './elements';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
  }[];
};

export function CarouselAutoplay({ data }: Props) {
  const carousel = useCarousel(
    {
      loop: true,
    },
    [Autoplay({ playOnInit: false, delay: 2000 })]
  );

  return (
    <>
      <PlayButton
        isPlaying={carousel.autoplay.isPlaying}
        onClick={carousel.autoplay.onTogglePlay}
      />

      <Stack sx={{ position: 'relative' }}>
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

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{ top: 16, right: 16, color: 'common.white', position: 'absolute' }}
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
    <Stack sx={{ position: 'relative' }}>
      <IndexLabel index={index + 1} />
      <Image alt={item.title} src={item.coverUrl} ratio="16/9" />
    </Stack>
  );
}
