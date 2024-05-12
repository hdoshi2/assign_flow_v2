'use client';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { CarouselYaxis } from './carousel-yaxis';
import { CarouselAlign } from './carousel-align';
import { CarouselScale } from './carousel-scale';
import { ComponentHero } from '../../component-hero';
import { CarouselOpacity } from './carousel-opacity';
import { CarouselCustoms } from './carousel-customs';
import { CarouselThumbsX } from './carousel-thumbs-x';
import { CarouselThumbsY } from './carousel-thumbs-y';
import { CarouselAutoplay } from './carousel-autoplay';
import { CarouselProgress } from './carousel-progress';
import { CarouselParallax } from './carousel-parallax';
import { CarouselAnimation } from './carousel-animation';
import { CarouselAutoScroll } from './carousel-auto-scroll';
import { CarouselCenterMode } from './carousel-center-mode';
import { CarouselAutoHeight } from './carousel-auto-height';
import { CarouselRightToLeft } from './carousel-right-to-left';
import { ScrollToViewTemplate } from '../../component-template';
import { CarouselVariableWidths } from './carousel-variable-widths';

// ----------------------------------------------------------------------

const _carouselsExample = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  coverUrl: _mock.image.cover(index),
  description: _mock.description(index),
}));

const DEMO = [
  {
    name: 'Align',
    component: <CarouselAlign data={_carouselsExample.slice(11, 15)} />,
  },
  {
    name: 'Progress',
    component: <CarouselProgress data={_carouselsExample.slice(3, 7)} />,
  },
  {
    name: 'Opacity',
    component: <CarouselOpacity data={_carouselsExample.slice(8, 12)} />,
  },
  {
    name: 'Scale',
    component: <CarouselScale data={_carouselsExample.slice(10, 14)} />,
  },
  {
    name: 'Parallax',
    component: <CarouselParallax data={_carouselsExample.slice(11, 15)} />,
  },
  {
    name: 'Right-to-left',
    component: <CarouselRightToLeft data={_carouselsExample.slice(15, 19)} />,
  },
  {
    name: 'Autoplay',
    component: <CarouselAutoplay data={_carouselsExample.slice(2, 6)} />,
  },
  {
    name: 'Auto Scroll',
    component: <CarouselAutoScroll data={_carouselsExample.slice(3, 7)} />,
  },
  {
    name: 'Thumbs-x',
    component: <CarouselThumbsX data={_carouselsExample.slice(3, 11)} />,
  },
  {
    name: 'Thumbs-y',
    component: <CarouselThumbsY data={_carouselsExample.slice(2, 10)} />,
  },
  {
    name: 'Variable widths',
    component: <CarouselVariableWidths data={_carouselsExample.slice(8, 12)} />,
  },
  {
    name: 'Auto height',
    component: <CarouselAutoHeight data={_carouselsExample.slice(14, 18)} />,
  },
  {
    name: 'Y-axis',
    component: <CarouselYaxis data={_carouselsExample.slice(4, 8)} />,
  },
  {
    name: 'Center mode',
    component: <CarouselCenterMode data={_carouselsExample.slice(8, 20)} />,
  },
  {
    name: 'Animation',
    component: <CarouselAnimation data={_carouselsExample.slice(16, 20)} />,
  },
  {
    name: 'Customs',
    component: <CarouselCustoms data={_carouselsExample.slice(8, 14)} />,
  },
];

// ----------------------------------------------------------------------

export default function View() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Carousel"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Carousel' },
          ]}
          moreLink={['https://www.embla-carousel.com/']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
