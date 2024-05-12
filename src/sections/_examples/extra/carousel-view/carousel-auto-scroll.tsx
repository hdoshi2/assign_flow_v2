import AutoScroll from 'embla-carousel-auto-scroll';

import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselProgressBar } from 'src/components/carousel';

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

export function CarouselAutoScroll({ data }: Props) {
  const carousel = useCarousel(
    {
      loop: true,
    },
    [AutoScroll({ playOnInit: false })]
  );

  return (
    <>
      <PlayButton
        isPlaying={carousel.autoScroll.isPlaying}
        onClick={carousel.autoScroll.onTogglePlay}
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

        <CarouselProgressBar
          {...carousel.progress}
          sx={{ top: 20, right: 20, color: 'info.light', position: 'absolute' }}
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
