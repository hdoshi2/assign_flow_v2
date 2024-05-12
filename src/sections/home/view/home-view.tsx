'use client';

import Stack from '@mui/material/Stack';

import ScrollProgress, { useScrollProgress } from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import HomeZoneUI from '../home-zone-ui';
import HomeMinimal from '../home-minimal';
import HomePricing from '../home-pricing';
import HomeForDesigner from '../home-for-designer';
import HomeTestimonials from '../home-testimonials';
import HomeIntegrations from '../home-integrations';
import HomeAdvertisement from '../home-advertisement';
import HomeHugePackElements from '../home-hugepack-elements';
import HomeHighlightFeatures from '../home-highlight-features';

// ----------------------------------------------------------------------

export default function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <HomeHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomeMinimal />

        <HomeHugePackElements />

        <HomeForDesigner />

        <HomeHighlightFeatures />

        <HomeIntegrations />

        <HomePricing />

        <HomeTestimonials />

        <HomeFAQs />

        <HomeZoneUI />

        <HomeAdvertisement />
      </Stack>
    </>
  );
}
