import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

export type CountryFlagProps = BoxProps & {
  code: string;
};

export function CountryFlag({ code, sx, ...other }: CountryFlagProps) {
  return (
    <Box
      component="img"
      loading="lazy"
      srcSet={`https://flagcdn.com/w40/${code}.png 2x`}
      src={`https://flagcdn.com/w20/${code}.png`}
      alt=""
      sx={{
        width: 22,
        height: 22,
        aspectRatio: '1/1',
        objectFit: 'cover',
        borderRadius: '50%',
        ...sx,
      }}
      {...other}
    />
  );
}
