import AutoHeight from 'embla-carousel-auto-height';

import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

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

export function CarouselAutoHeight({ data }: Props) {
  const carousel = useCarousel({}, [AutoHeight()]);

  return (
    <>
      <Carousel carousel={carousel}>
        {data.map((item, index) => (
          <CarouselItem key={item.id} item={item} index={index} />
        ))}
      </Carousel>

      <CarouselArrowBasicButtons
        {...carousel.arrows}
        options={carousel.options}
        sx={{ mt: 3, width: 1, justifyContent: 'center' }}
      />
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
    <Stack sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
      <IndexLabel index={index + 1} />
      <Image
        alt={item.title}
        src={item.coverUrl}
        sx={{
          width: 1,
          ...(index === 0 && { height: 200 }),
          ...(index === 1 && { height: 300 }),
          ...(index === 2 && { height: 200 }),
          ...(index === 3 && { height: 500 }),
        }}
      />
    </Stack>
  );
}
