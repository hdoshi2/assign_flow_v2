'use client';

import { AuthSplitLayout } from 'src/layouts';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <AuthSplitLayout title="Hi, Welcome back">{children}</AuthSplitLayout>;
}
