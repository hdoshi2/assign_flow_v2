'use client';

import { SimpleLayout } from 'src/layouts';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <SimpleLayout compact>{children}</SimpleLayout>;
}