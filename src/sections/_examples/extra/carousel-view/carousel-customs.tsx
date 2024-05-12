import Stack from '@mui/material/Stack';

import Image from 'src/components/image';
import Carousel, {
  useCarousel,
  carouselClasses,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
  CarouselArrowFloatButtons,
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

export function CarouselCustoms({ data }: Props) {
  const carousel = useCarousel({
    align: 'start',
    slidesToShow: 2,
    slideSpacing: '20px',
  });

  return (
    <>
      <Stack sx={{ position: 'relative' }}>
        <Carousel carousel={carousel} sx={{ maxWidth: 640 }}>
          {data.map((item, index) => (
            <CarouselItem key={item.id} index={index} item={item} />
          ))}
        </Carousel>

        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{
            prevBtn: {
              sx: { bgcolor: 'primary.main', color: 'primary.contrastText' },
              svgIcon: (
                <path
                  fill="currentColor"
                  d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"
                />
              ),
            },
            nextBtn: {
              sx: { bgcolor: 'primary.main', color: 'primary.contrastText' },
              svgIcon: (
                <path
                  fill="currentColor"
                  d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"
                />
              ),
            },
          }}
        />
      </Stack>

      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          p: 5,
          mt: 5,
          borderRadius: 2,
          bgcolor: 'background.neutral',
        }}
      >
        <Stack spacing={3} alignItems="center" sx={{ width: 1 }}>
          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{ color: 'secondary.main' }}
          />

          <CarouselArrowNumberButtons
            {...carousel.arrows}
            options={carousel.options}
            totalSlides={carousel.dots.snapCount}
            selectedIndex={carousel.dots.selectedIndex + 1}
            slotProps={{
              prevBtn: {
                svgIcon: (
                  <path
                    fill="currentColor"
                    d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"
                  />
                ),
              },
              nextBtn: {
                svgIcon: (
                  <path
                    fill="currentColor"
                    d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"
                  />
                ),
              },
            }}
            sx={{ bgcolor: 'info.main', color: 'info.contrastText' }}
          />
        </Stack>

        <Stack spacing={3} alignItems="center" sx={{ width: 1 }}>
          <CarouselDotButtons
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{ color: 'primary.main' }}
          />

          <CarouselDotButtons
            variant="rounded"
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{ color: 'info.main' }}
          />

          <CarouselDotButtons
            variant="number"
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{
              [`& .${carouselClasses.dot}`]: {
                [`&.${carouselClasses.state.selected}`]: {
                  bgcolor: 'warning.main',
                  color: 'warning.contrastText',
                },
              },
            }}
          />
        </Stack>
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
