import useSWR from 'swr';
import { useMemo } from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import { fetcher } from 'src/utils/axios';

import { NavSectionVertical } from 'src/components/nav-section';

// ----------------------------------------------------------------------

function useGetNavItems() {
  const URL = '/api/navbar';

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      data: data?.navItems ?? [],
      isLoading,
      error,
      isValidating,
      isEmpty: !isLoading && !data?.navItems.length,
    }),
    [data?.navItems, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function NavAPI() {
  const navItems = useGetNavItems();

  return (
    <Stack
      spacing={0.5}
      component={Paper}
      variant="outlined"
      sx={{
        p: 2,
        width: 1,
        mx: 'auto',
        maxWidth: 320,
        borderRadius: 2,
      }}
    >
      {navItems.isLoading ? (
        [...Array(8)].map((i, index) => (
          <Skeleton key={index} variant="rounded" height={48} sx={{ borderRadius: 1 }} />
        ))
      ) : (
        <NavSectionVertical data={navItems.data} />
      )}
    </Stack>
  );
}
