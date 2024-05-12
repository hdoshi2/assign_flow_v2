import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { varFade, MotionContainer } from 'src/components/animate';
import Carousel, { useCarousel, CarouselArrowNumberButtons } from 'src/components/carousel';

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

export function CarouselAnimation({ data }: Props) {
  const carousel = useCarousel();

  return (
    <Stack sx={{ position: 'relative' }}>
      <Carousel
        carousel={carousel}
        sx={{
          borderRadius: 2,
        }}
      >
        {data.map((item, index) => (
          <CarouselItem
            key={item.id}
            index={index}
            item={item}
            selected={index === carousel.dots.selectedIndex}
          />
        ))}
      </Carousel>

      <CarouselArrowNumberButtons
        {...carousel.arrows}
        options={carousel.options}
        totalSlides={carousel.dots.snapCount}
        selectedIndex={carousel.dots.selectedIndex + 1}
        sx={{ top: 16, right: 16, position: 'absolute' }}
      />
    </Stack>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  index: number;
  selected: boolean;
  item: Props['data'][0];
};

function CarouselItem({ item, index, selected }: CarouselItemProps) {
  const theme = useTheme();

  return (
    <Stack sx={{ position: 'relative' }}>
      <IndexLabel index={index + 1} />

      <Image dir="ltr" alt={item.title} src={item.coverUrl} ratio="16/9" />

      <Box
        sx={{
          ...theme.mixins.bgGradient(
            `to top, ${theme.palette.grey[900]}, ${alpha(theme.palette.grey[900], 0)}`
          ),
          top: 0,
          width: 1,
          height: 1,
          position: 'absolute',
        }}
      />

      <CardContent
        component={MotionContainer}
        animate={selected}
        action
        sx={{
          left: 0,
          bottom: 0,
          maxWidth: 720,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <m.div variants={varFade().inRight}>
          <Typography variant="h3" gutterBottom>
            {item.title}
          </Typography>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Typography variant="body2" noWrap gutterBottom>
            {item.description}
          </Typography>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            View More
          </Button>
        </m.div>
      </CardContent>
    </Stack>
  );
}
