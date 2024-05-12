import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { toast } from 'src/components/snackbar';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import { NodeProps } from './data';

// ----------------------------------------------------------------------

export function StandardNode({ name, avatarUrl, role, sx }: NodeProps) {
  const popover = usePopover();

  const onDelete = () => {
    popover.onClose();
    toast.warning(`onDelete: ${name}`);
  };

  const onEdit = () => {
    popover.onClose();
    toast.info(`onEdit: ${name}`);
  };

  return (
    <>
      <Card
        sx={{
          p: 2,
          minWidth: 200,
          borderRadius: 1.5,
          textAlign: 'left',
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
          textTransform: 'capitalize',
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

        <Avatar alt={name} src={avatarUrl ?? ''} sx={{ mr: 2, mb: 1, width: 48, height: 48 }} />

        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>

        <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
          {role}
        </Typography>
      </Card>

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
