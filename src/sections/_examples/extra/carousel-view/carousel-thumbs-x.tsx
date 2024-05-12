import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import Carousel, {
  useCarousel,
  CarouselThumb,
  CarouselThumbs,
  CarouselArrowNumberButtons,
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

export function CarouselThumbsX({ data }: Props) {
  const carousel = useCarousel({
    thumbs: {
      slideSpacing: '12px',
    },
  });

  return (
    <Stack spacing={3}>
      <Stack sx={{ position: 'relative' }}>
        <Carousel
          carousel={carousel}
          sx={{
            borderRadius: 2,
          }}
        >
          {data.map((item, index) => (
            <Stack key={item.id} sx={{ position: 'relative' }}>
              <IndexLabel index={index + 1} />
              <Image alt={item.title} src={item.coverUrl} ratio="16/9" />
            </Stack>
          ))}
        </Carousel>

        <CarouselArrowNumberButtons
          {...carousel.arrows}
          options={carousel.options}
          totalSlides={carousel.dots.snapCount}
          selectedIndex={carousel.dots.selectedIndex + 1}
          sx={{ right: 16, bottom: 16, position: 'absolute' }}
        />
      </Stack>

      <CarouselThumbs ref={carousel.thumbs.thumbsRef} options={carousel.options?.thumbs}>
        {data.map((item, index) => (
          <CarouselThumb
            key={item.id}
            index={index}
            src={item.coverUrl}
            selected={index === carousel.thumbs.selectedIndex}
            onClick={() => carousel.thumbs.onClickThumb(index)}
          />
        ))}
      </CarouselThumbs>
    </Stack>
  );
}
