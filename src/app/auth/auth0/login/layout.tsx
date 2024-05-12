'use client';

import { GuestGuard } from 'src/auth/guard';
import { AuthSplitLayout } from 'src/layouts';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard>
      <AuthSplitLayout title="Hi, Welcome back">{children}</AuthSplitLayout>
    </GuestGuard>
  );
}
