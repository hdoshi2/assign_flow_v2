import { paths } from 'src/routes/paths';

import { PATH_AFTER_LOGIN } from 'src/config-global';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  {
    title: 'Home',
    icon: <Iconify width={22} icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'Components',
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
    path: paths.components,
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Pricing', path: paths.pricing },
          { title: 'Payment', path: paths.payment },
          { title: 'Maintenance', path: paths.maintenance },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
      {
        subheader: 'Concepts',
        items: [
          { title: 'Shop', path: paths.product.root },
          { title: 'Product', path: paths.product.demo.details },
          { title: 'Checkout', path: paths.product.checkout },
          { title: 'Posts', path: paths.post.root },
          { title: 'Post', path: paths.post.demo.details },
        ],
      },
      {
        subheader: 'Auth Demo',
        items: [
          { title: 'Login', path: paths.authDemo.split.login },
          { title: 'Register', path: paths.authDemo.split.register },
          {
            title: 'Forgot password',
            path: paths.authDemo.split.forgotPassword,
          },
          { title: 'New password', path: paths.authDemo.split.newPassword },
          { title: 'Verify', path: paths.authDemo.split.verify },
          { title: 'Login (centered)', path: paths.authDemo.centered.login },
          { title: 'Register (centered)', path: paths.authDemo.centered.register },
          {
            title: 'Forgot password (centered)',
            path: paths.authDemo.centered.forgotPassword,
          },
          {
            title: 'New password (centered)',
            path: paths.authDemo.centered.newPassword,
          },
          { title: 'Verify (centered)', path: paths.authDemo.centered.verify },
        ],
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 403', path: paths.page403 },
          { title: 'Page 404', path: paths.page404 },
          { title: 'Page 500', path: paths.page500 },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_AFTER_LOGIN }],
      },
    ],
  },
  {
    title: 'Docs',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.docs,
  },
];
