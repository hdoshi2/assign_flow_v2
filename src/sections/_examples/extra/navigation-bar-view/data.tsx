import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

/**
 * ICON USED
 * * Case 1: Add [iconify]* prefix for use as link
 * for use as link. Suitable in case of using data through API
 * `solar:accessibility-outline ` => `[iconify]solar:accessibility-outline`
 *
 ** Case 2: Add [initial] prefix to display original icon
 * `/assets/icons/app/ic-app-drive.svg` => `[initial]/assets/icons/app/ic-app-drive.svg`
 *
 ** Case 3: Use internal components
 * 1. `/assets/icons/app/ic-app-drive.svg`
 * 2. <img src="/assets/icons/app/ic-app-drive.svg"/>
 * 3. <Iconify icon="carbon:3d-mpr-toggle" />
 */

export const BASIC_NAV_ITEMS = [
  {
    title: 'Home',
    path: '#',
    icon: '[iconify]solar:accessibility-outline',
  },
  {
    title: 'Page',
    path: '/basic/page',
    caption: 'This is the caption',
    icon: '[initial]/assets/icons/app/ic-app-drive.svg',
    info: <Label color="error">+3</Label>,
    children: [
      {
        title: 'Page 1',
        path: '/basic/page/1',
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
        caption: 'This is the caption',
        children: [
          { title: 'Page 1.1', path: '/basic/page/1/1', info: '+3' },
          { title: 'Page 1.2', path: '/basic/page/1/2' },
        ],
      },
      {
        title: 'Page 2',
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
        path: '/basic/page/2',
        children: [
          { title: 'Page 2.1', path: '/basic/page/2/1' },
          { title: 'Page 2.2', path: '/basic/page/2/2' },
          {
            title: 'Page 2.3',
            path: '/basic/page/2/3',
            children: [
              { title: 'Page 2.3.1', path: '/basic/page/2/3/1' },
              { title: 'Page 2.3.2', path: '/basic/page/2/3/2' },
              { title: 'Page 2.3.3', path: '/basic/page/2/3/3' },
            ],
          },
        ],
      },
      { title: 'Page 3', path: '#', icon: <Iconify icon="carbon:3d-mpr-toggle" /> },
    ],
  },
  { title: 'Blog', path: '#', icon: '[iconify]solar:feed-outline' },
  { title: 'Contact', path: '#', disabled: true, icon: '[iconify]solar:phone-calling-outline' },
  {
    title: 'External',
    path: 'https://www.google.com/',
    icon: '/assets/icons/app/ic-app-dropbox.svg',
  },
];

// ----------------------------------------------------------------------

export const NAV_ITEMS = [
  {
    subheader: 'Marketing',
    items: [
      {
        title: 'Landing',
        path: '#landing',
        icon: '/assets/icons/navbar/ic-dashboard.svg',
        roles: ['admin'],
        caption: 'Display only admin role',
      },
      {
        title: 'Services',
        path: '#services',
        icon: '/assets/icons/navbar/ic-analytics.svg',
        roles: ['admin', 'user'],
      },
      {
        title: 'Blog',
        path: '#blog',
        icon: '/assets/icons/navbar/ic-blog.svg',
        children: [
          { title: 'Item 1', path: '#blog/item-1', caption: 'Display caption', info: '+2' },
          { title: 'Item 2', path: '#blog/item-2' },
        ],
      },
    ],
  },
  {
    subheader: 'Travel',
    items: [
      {
        title: 'About',
        path: '#about',
        icon: '/assets/icons/navbar/ic-user.svg',
      },
      {
        title: 'Contact',
        path: '#contact',
        icon: '/assets/icons/navbar/ic-tour.svg',
      },
      {
        title: 'Level',
        path: '#level',
        icon: '/assets/icons/navbar/ic-menu-item.svg',
        children: [
          {
            title: 'Level 2a',
            path: '#level/2a',
            icon: '/assets/icons/navbar/ic-chat.svg',
            caption: 'This is the caption',
            info: '+3',
            children: [
              { title: 'Level 3a', path: '#level/2a/3a' },
              {
                title: 'Level 3b',
                path: '#level/2a/3b',
                children: [
                  { title: 'Level 4a', path: '#level/2a/3b/4a' },
                  { title: 'Level 4b', path: '#level/2a/3b/4b' },
                ],
              },
              { title: 'Level 3c', path: '#level/2a/3c' },
            ],
          },
          { title: 'Level 2b', path: '#level/2b', icon: '/assets/icons/navbar/ic-mail.svg' },
          { title: 'Level 2c', path: '#level/2c', icon: '/assets/icons/navbar/ic-calendar.svg' },
        ],
      },
      {
        title: 'Icon',
        path: '#icon',
        icon: '/assets/icons/navbar/ic-file.svg',
        info: '+3',
      },
    ],
  },
];
