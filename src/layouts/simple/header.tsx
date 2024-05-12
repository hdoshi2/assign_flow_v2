import Link from '@mui/material/Link';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Logo from 'src/components/logo';

import HeaderSection from '../components/header-section';
import SettingsButton from '../components/settings-button';

// ----------------------------------------------------------------------

export function Header() {
  return (
    <HeaderSection
      slots={{
        leftNode: <Logo />,
        rightNode: (
          <>
            <SettingsButton />

            <Link
              href={paths.faqs}
              component={RouterLink}
              color="inherit"
              sx={{ typography: 'subtitle2', ml: 1 }}
            >
              Need help?
            </Link>
          </>
        ),
      }}
      slotProps={{
        container: { maxWidth: false },
      }}
    />
  );
}
