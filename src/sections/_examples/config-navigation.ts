import { paramCase } from 'src/utils/change-case';

// ----------------------------------------------------------------------

const getHref = (category: string, name: string) => `/components/${category}/${paramCase(name)}`;

export const foundationNav = ['Colors', 'Typography', 'Shadows', 'Grid', 'Icons'].map((name) => ({
  name,
  href: getHref('foundation', name),
  icon: `/assets/icons/components/ic-${paramCase(name)}.svg`,
}));

export const muiNav = [
  'Accordion',
  'Alert',
  'Autocomplete',
  'Avatar',
  'Badge',
  'Breadcrumbs',
  'Buttons',
  'Checkbox',
  'Chip',
  'Dialog',
  'List',
  'Menu',
  'Pagination',
  'Pickers',
  'Popover',
  'Progress',
  'Radio button',
  'Rating',
  'Slider',
  'Stepper',
  'Switch',
  'Table',
  'Tabs',
  'Textfield',
  'Timeline',
  'Tooltip',
  'Transfer list',
  'Data grid',
  'Tree view',
].map((name) => ({
  name,
  href: getHref('mui', name),
  icon: `/assets/icons/components/ic-${paramCase(name)}.svg`,
  category: (['Data Grid', 'Pickers', 'Tree View'].includes(name) && 'MUI X') || '',
}));

export const extraNav = [
  'Chart',
  'Map',
  'Editor',
  'Copy to clipboard',
  'Upload',
  'Carousel',
  'Multi language',
  'Animate',
  'Mega menu',
  'Form validation',
  'Lightbox',
  'Image',
  'Label',
  'Scroll',
  'Scroll progress',
  'Snackbar',
  'Text max line',
  'Navigation bar',
  'Organization chart',
  'Markdown',
  'Walktour',
].map((name) => ({
  name,
  href: getHref('extra', name),
  icon: `/assets/icons/components/ic-extra-${paramCase(name)}.svg`,
  category:
    ([
      'Chart',
      'Map',
      'Editor',
      'Upload',
      'Carousel',
      'Multi language',
      'Animate',
      'Form validation',
      'Lightbox',
      'Image',
      'Scroll',
      'Scroll progress',
      'Snackbar',
      'Organization chart',
      'Markdown',
      'Walktour',
    ].includes(name) &&
      '3rd Party') ||
    '',
}));
