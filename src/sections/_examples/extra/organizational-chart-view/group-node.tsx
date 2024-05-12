import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import { ColorSchema } from 'src/theme/palette';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { toast } from 'src/components/snackbar';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import { NodeProps } from './data';

// ----------------------------------------------------------------------

export function GroupNode({ sx, name, role, depth, group, avatarUrl, totalChildren }: NodeProps) {
  const theme = useTheme();

  const popover = usePopover();

  const onDelete = () => {
    popover.onClose();
    toast.warning(`onDelete: ${name}`);
  };

  const onEdit = () => {
    popover.onClose();
    toast.info(`onEdit: ${name}`);
  };

  const lightMode = theme.palette.mode === 'light';

  const styles = (color: ColorSchema) => ({
    bgcolor: alpha(theme.palette[color].main, 0.08),
    border: `solid 1px ${alpha(theme.palette[color].main, 0.24)}`,
    color: lightMode ? theme.palette[color].darker : theme.palette[color].lighter,
  });

  const isLabel = depth === 1;

  const rootGr = group === 'root';

  const productGr = group === 'product design';

  const developmentGr = group === 'development';

  const marketingGr = group === 'marketing';

  return (
    <>
      <Stack sx={{ position: 'relative', display: 'inline-flex' }} alignItems="center">
        {!isLabel && (
          <Avatar
            alt={name}
            src={avatarUrl ?? ''}
            sx={{
              mt: -3.5,
              zIndex: 9,
              width: 56,
              height: 56,
              position: 'absolute',
              border: `solid 4px ${theme.palette.background.paper}`,
            }}
          />
        )}

        <Card
          sx={{
            pt: 5,
            pb: 3,
            minWidth: 200,
            borderRadius: 1.5,
            textTransform: 'capitalize',
            ...(isLabel && { py: 2 }),
            ...(isLabel && productGr && styles('primary')),
            ...(isLabel && developmentGr && styles('info')),
            ...(isLabel && marketingGr && styles('warning')),
            ...sx,
          }}
        >
          <IconButton
            color={popover.open ? 'inherit' : 'default'}
            onClick={popover.onOpen}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <Iconify icon="eva:more-horizontal-fill" />
          </IconButton>

          {depth !== 1 && !rootGr && (
            <Box
              sx={{
                top: 0,
                left: 0,
                width: 1,
                height: 4,
                position: 'absolute',
                borderRadius: 1.5,
                ...(productGr && { bgcolor: 'primary.light' }),
                ...(developmentGr && { bgcolor: 'info.light' }),
                ...(marketingGr && { bgcolor: 'warning.light' }),
              }}
            />
          )}

          <Typography variant={isLabel ? 'subtitle1' : 'subtitle2'} noWrap>
            {name}

            {isLabel && (
              <Label
                color={(developmentGr && 'info') || (marketingGr && 'warning') || 'primary'}
                sx={{ ml: 1 }}
              >
                {totalChildren}
              </Label>
            )}
          </Typography>

          {!isLabel && (
            <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
              {role}
            </Typography>
          )}
        </Card>
      </Stack>

      <CustomPopover open={popover.open} onClose={popover.onClose} arrow="left-center">
        <MenuList>
          <MenuItem onClick={onDelete} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>

          <MenuItem onClick={onEdit}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
