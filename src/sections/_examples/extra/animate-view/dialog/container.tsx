import { m, AnimatePresence } from 'framer-motion';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Stack, { StackProps } from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import Paper, { PaperProps } from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';

import { getVariant } from '../get-variant';

// ----------------------------------------------------------------------

type Props = StackProps & {
  open: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
  selectVariant: string;
};

export function ContainerView({ open, onOpen, onClose, selectVariant, sx, ...other }: Props) {
  return (
    <>
      <Stack
        sx={{
          borderRadius: 2,
          flex: '1 1 auto',
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.neutral',
          ...sx,
        }}
        {...other}
      >
        <Button size="large" variant="contained" onClick={onOpen}>
          Click Me!
        </Button>
      </Stack>

      <AnimatePresence>
        {open && (
          <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            onClose={onClose}
            PaperComponent={(props: PaperProps) => (
              <m.div {...getVariant(selectVariant, 320)}>
                <Paper {...props}>{props.children}</Paper>
              </m.div>
            )}
          >
            <DialogTitle id="alert-dialog-title">{`Use Google's location service?`}</DialogTitle>

            <DialogContent>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose}>Disagree</Button>
              <Button variant="contained" onClick={onClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
