import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog, { DialogProps } from '@mui/material/Dialog';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

interface Props extends DialogProps {
  onClose: VoidFunction;
}

export default function PaymentNewCardDialog({ onClose, ...other }: Props) {
  return (
    <Dialog maxWidth="sm" onClose={onClose} {...other}>
      <DialogTitle> New Card </DialogTitle>

      <DialogContent sx={{ overflow: 'unset' }}>
        <Stack spacing={2.5}>
          <TextField
            autoFocus
            label="Card Number"
            placeholder="XXXX XXXX XXXX XXXX"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Card Holder"
            placeholder="JOHN DOE"
            InputLabelProps={{ shrink: true }}
          />

          <Stack spacing={2} direction="row">
            <TextField
              label="Expiration Date"
              placeholder="MM/YY"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="CVV/CVC"
              placeholder="***"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      arrow
                      placement="top"
                      title="Three-digit number on the back of your VISA card"
                      slotProps={{
                        tooltip: { sx: { maxWidth: 160, textAlign: 'center' } },
                      }}
                    >
                      <Iconify width={18} icon="eva:info-outline" />
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'caption', color: 'text.disabled' }}
          >
            <Iconify icon="carbon:locked" sx={{ mr: 0.5 }} />
            Your transaction is secured with SSL encryption
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button color="inherit" variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button variant="contained" onClick={onClose}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
