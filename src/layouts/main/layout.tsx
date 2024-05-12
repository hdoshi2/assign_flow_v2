import { layoutVars } from 'src/layouts/config-layout';

import { Footer } from './footer';
import { Header } from './header';
import { Wrap, Main } from './wrap';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Wrap sx={layoutVars}>
      {/* Put you alert */}
      <Header />

      <Main>{children}</Main>

      <Footer />
    </Wrap>
  );
}
