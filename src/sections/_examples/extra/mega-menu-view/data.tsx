import { _mock } from 'src/_mock';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

export const NAV_ITEMS = [
  {
    title: 'Item 1',
    path: '#',
    icon: '[iconify]solar:home-2-outline',
    slides: [...Array(16)].map((_, index) => ({
      name: _mock.productName(index),
      coverUrl: _mock.image.product(index),
      path: '#',
    })),
    moreLink: { title: 'More Categories', path: '#' },
    tags: [
      { title: 'Paper Cup', path: '#' },
      { title: 'Lotion Pump', path: '#' },
      { title: 'Brush Cutter', path: '#' },
      { title: 'Display Rack', path: '#' },
      { title: 'Glass Bottle', path: '#' },
    ],
    children: [
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Item 2',
    path: '#',
    icon: '[iconify]solar:atom-outline',
    children: [
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Item 3',
    path: '#',
    icon: '[iconify]solar:chart-square-outline',
    info: <Label color="info">+3</Label>,
    children: [
      {
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Item 4',
    path: '#',
    icon: '[iconify]solar:confetti-minimalistic-outline',
    info: '+72',
    children: [
      {
        items: [
          { title: 'Foods', path: '#' },
          { title: 'Cosmetics  ', path: '#' },
          { title: 'Clothes ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Item 5',
    path: '#',
    icon: '[iconify]solar:gallery-circle-outline',
    children: [
      {
        items: [
          { title: 'Foods', path: '#' },
          { title: 'Cosmetics  ', path: '#' },
          { title: 'Clothes ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Item 6',
    path: '#',
    icon: '[iconify]solar:hanger-2-outline',
    children: [
      {
        items: [
          { title: 'Foods', path: '#' },
          { title: 'Cosmetics  ', path: '#' },
          { title: 'Clothes ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Item 7',
    path: '#',
    icon: '[iconify]solar:letter-outline',
    children: [
      {
        items: [
          { title: 'Foods', path: '#' },
          { title: 'Cosmetics  ', path: '#' },
          { title: 'Clothes ', path: '#' },
        ],
      },
    ],
  },
  {
    title: 'Item 8',
    path: 'https://www.google.com/',
    icon: '[iconify]solar:airbuds-case-open-outline',
    disabled: true,
  },
];
