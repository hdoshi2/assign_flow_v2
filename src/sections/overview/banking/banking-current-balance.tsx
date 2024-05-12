import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Theme, SxProps } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';

import { fCurrency } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import Carousel, { useCarousel, CarouselDotButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  cardType: string;
  balance: number;
  cardHolder: string;
  cardNumber: string;
  cardValid: string;
};

type Props = {
  list: ItemProps[];
  sx?: SxProps<Theme>;
};

export default function BankingCurrentBalance({ list, sx }: Props) {
  const currency = useBoolean();

  const carousel = useCarousel();

  return (
    <Stack
      sx={{
        mb: 2,
        borderRadius: 2,
        position: 'relative',
        backgroundSize: 'cover',
        background: 'url("/assets/background/overlay-4.jpg") no-repeat center center',
        '&::before, &::after': {
          left: 0,
          right: 0,
          mx: '28px',
          zIndex: -2,
          height: 40,
          bottom: -16,
          content: "''",
          opacity: 0.16,
          borderRadius: 1.5,
          bgcolor: 'grey.500',
          position: 'absolute',
        },
        '&::after': {
          mx: '16px',
          bottom: -8,
          opacity: 0.32,
        },
        ...sx,
      }}
    >
      <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ right: 16, position: 'absolute', bottom: 16, color: 'primary.main' }}
      />

      <Carousel carousel={carousel} sx={{ color: 'common.white' }}>
        {list.map((card) => (
          <CardItem
            card={card}
            key={card.id}
            showCurrency={currency.value}
            onToggleCurrency={currency.onToggle}
          />
        ))}
      </Carousel>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type CardItemProps = {
  card: ItemProps;
  showCurrency: boolean;
  onToggleCurrency: VoidFunction;
};

function CardItem({ card, showCurrency, onToggleCurrency }: CardItemProps) {
  const popover = usePopover();

  const handleDelete = useCallback(() => {
    popover.onClose();
    console.info('DELETE', card.id);
  }, [card.id, popover]);

  const handleEdit = useCallback(() => {
    popover.onClose();
    console.info('EDIT', card.id);
  }, [card.id, popover]);

  return (
    <>
      <Stack justifyContent="space-between" sx={{ p: 3 }}>
        <IconButton
          color="inherit"
          onClick={popover.onOpen}
          sx={{
            top: 8,
            right: 8,
            zIndex: 9,
            opacity: 0.48,
            position: 'absolute',
            ...(popover.open && {
              opacity: 1,
            }),
          }}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>

        <Stack spacing={1.5}>
          <Box component="span" sx={{ typography: 'subtitle2', opacity: 0.48 }}>
            Current Balance
          </Box>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Box component="span" sx={{ typography: 'h4' }}>
              {showCurrency ? '********' : fCurrency(card.balance)}
            </Box>

            <IconButton color="inherit" onClick={onToggleCurrency} sx={{ opacity: 0.48 }}>
              <Iconify icon={showCurrency ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
            </IconButton>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ typography: 'subtitle1', my: 3 }}
        >
          <Box
            sx={{
              px: 0.75,
              bgcolor: 'white',
              borderRadius: 0.5,
              display: 'inline-flex',
            }}
          >
            {card.cardType === 'mastercard' && <Iconify width={24} icon="logos:mastercard" />}
            {card.cardType === 'visa' && <Iconify width={24} icon="logos:visa" />}
          </Box>
          {card.cardNumber}
        </Stack>

        <Stack direction="row" spacing={5} sx={{ typography: 'subtitle1' }}>
          <Stack spacing={1}>
            <Box component="span" sx={{ typography: 'caption', opacity: 0.48 }}>
              Card Holder
            </Box>
            <Box component="span">{card.cardHolder}</Box>
          </Stack>
          <Stack spacing={1}>
            <Box component="span" sx={{ typography: 'caption', opacity: 0.48 }}>
              Valid Dates
            </Box>
            <Box component="span">{card.cardValid}</Box>
          </Stack>
        </Stack>
      </Stack>

      <CustomPopover open={popover.open} onClose={popover.onClose}>
        <MenuList>
          <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>

          <MenuItem onClick={handleEdit}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
