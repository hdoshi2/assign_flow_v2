import { grey, primary } from '../palette';

// ----------------------------------------------------------------------

export type PresetType = 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';

const cyan = {
  lighter: '#CCF4FE',
  light: '#68CDF9',
  main: '#078DEE',
  dark: '#0351AB',
  darker: '#012972',
  contrastText: '#FFFFFF',
};

const purple = {
  lighter: '#EBD6FD',
  light: '#B985F4',
  main: '#7635dc',
  dark: '#431A9E',
  darker: '#200A69',
  contrastText: '#FFFFFF',
};

const blue = {
  lighter: '#CDE9FD',
  light: '#6BB1F8',
  main: '#0C68E9',
  dark: '#063BA7',
  darker: '#021D6F',
  contrastText: '#FFFFFF',
};

const orange = {
  lighter: '#FEF4D4',
  light: '#FED680',
  main: '#fda92d',
  dark: '#B66816',
  darker: '#793908',
  contrastText: grey[800],
};

const red = {
  lighter: '#FFE3D5',
  light: '#FFC1AC',
  main: '#FF3030',
  dark: '#B71833',
  darker: '#7A0930',
  contrastText: '#FFFFFF',
};

export const presetOptions = [
  { name: 'default', value: primary.main },
  { name: 'cyan', value: cyan.main },
  { name: 'purple', value: purple.main },
  { name: 'blue', value: blue.main },
  { name: 'orange', value: orange.main },
  { name: 'red', value: red.main },
];

export function getPrimaryPreset(preset: PresetType) {
  return {
    default: primary,
    cyan,
    purple,
    blue,
    orange,
    red,
  }[preset];
}
