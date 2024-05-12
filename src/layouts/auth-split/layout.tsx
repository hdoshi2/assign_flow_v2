import Stack, { StackProps } from '@mui/material/Stack';

import { useAuthContext } from 'src/auth/hooks';
import { layoutVars } from 'src/layouts/config-layout';

import { Header } from './header';
import { Section } from './section';
import { Main, Content } from './wrap';

// ----------------------------------------------------------------------

type Props = StackProps & {
  title?: string;
  subtitle?: string;
  imgUrl?: string;
  children: React.ReactNode;
};

export default function AuthSplitLayout({
  children,
  imgUrl,
  title,
  subtitle,
  sx,
  ...other
}: Props) {
  const { method } = useAuthContext();

  return (
    <Stack
      sx={{
        ...layoutVars,
        minHeight: '100vh',
        ...sx,
      }}
      {...other}
    >
      <Header />

      <Main>
        <Section method={method} imgUrl={imgUrl} title={title} subtitle={subtitle} />
        <Content>{children}</Content>
      </Main>
    </Stack>
  );
}
