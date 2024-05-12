import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { iconButtonClasses } from '@mui/material/IconButton';
import { Theme, SxProps, useTheme } from '@mui/material/styles';

import { BREAKPOINT } from 'src/layouts/config-layout';

import Logo from 'src/components/logo';
import { useSettingsContext } from 'src/components/settings';

import Searchbar from '../components/searchbar';
import MenuButton from '../components/menu-button';
import HeaderSection from '../components/header-section';
import AccountDrawer from '../components/account-drawer';
import SettingsButton from '../components/settings-button';
import ContactsPopover from '../components/contacts-popover';
import LanguagePopover from '../components/language-popover';
import WorkspacePopover from '../components/workspace-popover';
import NotificationsPopover from '../components/notifications-popover';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
  sx?: SxProps<Theme>;
};

export function Header({ onOpenNav, sx }: Props) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.DASHBOARD);

  return (
    <HeaderSection
      disableShadow
      disableDivider={!isNavHorizontal}
      breakpoint={BREAKPOINT.DASHBOARD}
      sx={sx}
      slots={{
        leftNode: (
          <>
            {isNavHorizontal && (
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  display: 'none',
                  [breakpointUp]: { display: 'inline-flex' },
                }}
              >
                <Logo />
                <Stack alignItems="center" sx={{ color: 'divider', mx: 2.5 }}>
                  <Box sx={{ width: 3, height: 3, bgcolor: 'currentColor', borderRadius: '50%' }} />
                  <Box
                    sx={{
                      my: '2px',
                      height: 10,
                      width: '1px',
                      borderRadius: '50%',
                      bgcolor: 'currentColor',
                    }}
                  />
                  <Box sx={{ width: 3, height: 3, bgcolor: 'currentColor', borderRadius: '50%' }} />
                </Stack>
              </Stack>
            )}

            <MenuButton
              onClick={onOpenNav}
              sx={{
                mr: 0.5,
                [breakpointUp]: { display: 'none' },
              }}
            />

            <WorkspacePopover />
          </>
        ),
        rightNode: (
          <Stack direction="row" alignItems="center" spacing={{ sm: 0.75 }}>
            <Searchbar />
            <LanguagePopover />
            <NotificationsPopover />
            <ContactsPopover />
            <SettingsButton />
            <AccountDrawer />
          </Stack>
        ),
      }}
      slotProps={{
        toolbar: {
          sx: {
            ...(isNavHorizontal && {
              bgcolor: 'var(--nav-bg)',
              [`& .${iconButtonClasses.root}`]: {
                color: 'var(--nav-text-secondary-color)',
              },
              '.workspace--dropdown': {
                '& .label': {
                  color: 'var(--nav-text-primary-color)',
                },
                '& .arrow': {
                  color: 'var(--nav-text-disabled-color)',
                },
              },
              [breakpointUp]: {
                height: 'var(--layout-header-desktop-horizontal-height)',
              },
            }),
          },
        },
        container: {
          maxWidth: false,
          sx: {
            ...(!isNavHorizontal && {
              [breakpointUp]: {
                px: 5,
              },
            }),
          },
        },
      }}
    />
  );
}
