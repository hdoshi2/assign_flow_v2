'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import TablePagination from '@mui/material/TablePagination';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fDate } from 'src/utils/format-time';
import { fData, fNumber, fPercent, fCurrency, fShortenNumber } from 'src/utils/format-number';

import { useLocales, useTranslate } from 'src/locales';

import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export default function View() {
  const router = useRouter();

  const { t, onChangeLang } = useTranslate();

  const { allLangs, currentLang } = useLocales();

  const [page, setPage] = useState(2);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },
    []
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Multi Language"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Multi Language' },
          ]}
          moreLink={[
            'https://react.i18next.com',
            'https://mui.com/guides/localization/#main-content',
          ]}
        />
      </ComponentHero>

      <ComponentContainer>
        <Grid container spacing={5} disableEqualOverflow>
          <Grid xs={12} md={4}>
            <Card>
              <CardHeader title="Langs" />

              <Box sx={{ p: 3 }}>
                <RadioGroup
                  value={currentLang.value}
                  onChange={(event) => {
                    onChangeLang(event.target.value);
                    router.refresh();
                  }}
                >
                  {allLangs.map((lang) => (
                    <FormControlLabel
                      key={lang.value}
                      value={lang.value}
                      label={lang.label}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </Card>
          </Grid>

          <Grid xs={12} md={8}>
            <Stack spacing={5}>
              <ComponentBlock
                title="Flexible"
                sx={{ flexDirection: 'column', alignItems: 'unset' }}
              >
                <Stack direction="row" alignItems="center" sx={{ typography: 'h3' }}>
                  <Iconify icon={currentLang.icon} width={32} sx={{ mr: 1, borderRadius: 1 }} />
                  {t('demo.lang')}
                </Stack>

                <Typography>{t('demo.description')}</Typography>
              </ComponentBlock>

              <ComponentBlock
                title="System (MUI)"
                sx={{ flexDirection: 'column', alignItems: 'unset' }}
              >
                <Box sx={{ typography: 'subtitle2' }}>Supports other components including:</Box>
                <Box component="ul" sx={{ pl: 3 }}>
                  <Box component="li"> Data Grid</Box>
                  <Box component="li"> Date Pickers</Box>
                </Box>

                <TablePagination
                  component="div"
                  count={100}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </ComponentBlock>

              <ComponentBlock
                title="Numbers"
                sx={{ flexDirection: 'column', alignItems: 'unset', typography: 'body2' }}
              >
                <NumberBlock
                  title="Currency"
                  type="currency"
                  data={[
                    2217.01,
                    247598.18,
                    677606.08,
                    4734447.51,
                    8471442.09,
                    undefined,
                    null,
                    NaN,
                    0,
                  ]}
                />

                <Divider />

                <NumberBlock
                  title="Percent"
                  type="percent"
                  data={[1.7, 17.67, 28.1, 41.3, 91.16, undefined, null, NaN, 0]}
                />

                <Divider />

                <NumberBlock
                  title="Shorten"
                  type="shorten"
                  data={[719, 719.63, 3683.72, 5583407.51, 3345583407.51, undefined, null, NaN, 0]}
                />

                <Divider />

                <NumberBlock
                  title="Data"
                  type="data"
                  data={[719, 719.63, 3683.72, 5583407.51, 3345583407.51, undefined, null, NaN, 0]}
                />

                <Divider />

                <NumberBlock
                  title="Number"
                  type="number"
                  data={[
                    451,
                    451.82,
                    1081.62,
                    27921.9,
                    600668.81,
                    7587054.86,
                    undefined,
                    null,
                    NaN,
                    0,
                  ]}
                />

                <Divider />

                <Stack spacing={0.5}>
                  <Box component="span" sx={{ typography: 'subtitle2' }}>
                    Date
                  </Box>
                  <Box component="span"> {fDate(new Date())}</Box>
                </Stack>
              </ComponentBlock>
            </Stack>
          </Grid>
        </Grid>
      </ComponentContainer>
    </>
  );
}

// ----------------------------------------------------------------------

type NumberBlockProps = {
  data: any[];
  title: string;
  type: 'currency' | 'percent' | 'shorten' | 'data' | 'number';
};

function NumberBlock({ data, type, title }: NumberBlockProps) {
  const renderLabel = (value: any) => {
    if (value === undefined) {
      return 'undefined';
    }
    if (value === null) {
      return 'null';
    }
    if (String(value) === 'NaN') {
      return 'NaN';
    }

    return value;
  };

  return (
    <Stack spacing={0.5}>
      <Box sx={{ typography: 'subtitle2' }}>{title}</Box>
      {data.map((numb, index) => (
        <Box key={String(index)}>
          <Box component="span" sx={{ color: 'text.primary' }}>
            {renderLabel(numb)}
          </Box>
          <Box component="span" sx={{ color: 'text.secondary' }}>
            {' => '}
            {(type === 'currency' && fCurrency(numb)) ||
              (type === 'percent' && fPercent(numb)) ||
              (type === 'shorten' && fShortenNumber(numb)) ||
              (type === 'data' && fData(numb)) ||
              (type === 'number' && fNumber(numb))}
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
