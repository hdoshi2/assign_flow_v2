import { layoutVars } from 'src/layouts/config-layout';

import { Header } from './header';
import { Footer } from './footer';
import { Main, Wrap, CompactContent } from './wrap';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  compact?: boolean;
};

export default function SimpleLayout({ children, compact }: Props) {
  return (
    <Wrap sx={layoutVars}>
      {/* Put you alert */}

      <Header />

      <Main>{compact ? <CompactContent>{children}</CompactContent> : children}</Main>

      <Footer />
    </Wrap>
  );
}
