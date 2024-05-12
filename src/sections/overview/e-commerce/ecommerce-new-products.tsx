import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card, { CardProps } from '@mui/material/Card';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselDotButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  name: string;
  coverUrl: string;
};

type Props = CardProps & {
  list: ItemProps[];
};

export default function EcommerceNewProducts({ list, ...other }: Props) {
  const carousel = useCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 8000 })]);

  return (
    <Card {...other}>
      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ right: 20, bottom: 20, color: 'primary.light', position: 'absolute' }}
      />

      <Carousel carousel={carousel}>
        {list.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: ItemProps;
};

function CarouselItem({ item }: CarouselItemProps) {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative' }}>
      <CardContent
        sx={{
          left: 0,
          width: 1,
          bottom: 0,
          zIndex: 9,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
          New
        </Typography>

        <Typography noWrap variant="h5" sx={{ mt: 1, mb: 3 }}>
          {item.name}
        </Typography>

        <Button color="primary" variant="contained">
          Buy Now
        </Button>
      </CardContent>

      <Image
        alt={item.name}
        src={item.coverUrl}
        overlay={`linear-gradient(to bottom, ${alpha(theme.palette.grey[900], 0)} 0%, ${
          theme.palette.grey[900]
        } 75%)`}
        sx={{
          width: 1,
          height: {
            xs: 288,
            xl: 320,
          },
        }}
      />
    </Box>
  );
}
