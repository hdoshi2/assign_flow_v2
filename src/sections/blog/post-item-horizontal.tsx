import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import { IPostItem } from 'src/types/blog';

// ----------------------------------------------------------------------

type Props = {
  post: IPostItem;
};

export default function PostItemHorizontal({ post }: Props) {
  const theme = useTheme();

  const popover = usePopover();

  const router = useRouter();

  const smUp = useResponsive('up', 'sm');

  const {
    title,
    author,
    publish,
    coverUrl,
    createdAt,
    totalViews,
    totalShares,
    totalComments,
    description,
  } = post;

  return (
    <>
      <Stack component={Card} direction="row">
        <Stack
          sx={{
            p: theme.spacing(3, 3, 2, 3),
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
            <Label variant="soft" color={(publish === 'published' && 'info') || 'default'}>
              {publish}
            </Label>

            <Box component="span" sx={{ typography: 'caption', color: 'text.disabled' }}>
              {fDate(createdAt)}
            </Box>
          </Stack>

          <Stack spacing={1} flexGrow={1}>
            <Link
              component={RouterLink}
              href={paths.dashboard.post.details(title)}
              color="inherit"
              variant="subtitle2"
              sx={{
                ...theme.mixins.maxLine(2),
              }}
            >
              {title}
            </Link>

            <Typography
              variant="body2"
              sx={{
                ...theme.mixins.maxLine(2),
                color: 'text.secondary',
              }}
            >
              {description}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
              <Iconify icon="eva:more-horizontal-fill" />
            </IconButton>

            <Stack
              spacing={1.5}
              flexGrow={1}
              direction="row"
              flexWrap="wrap"
              justifyContent="flex-end"
              sx={{
                typography: 'caption',
                color: 'text.disabled',
              }}
            >
              <Stack direction="row" alignItems="center">
                <Iconify icon="eva:message-circle-fill" width={16} sx={{ mr: 0.5 }} />
                {fShortenNumber(totalComments)}
              </Stack>

              <Stack direction="row" alignItems="center">
                <Iconify icon="solar:eye-bold" width={16} sx={{ mr: 0.5 }} />
                {fShortenNumber(totalViews)}
              </Stack>

              <Stack direction="row" alignItems="center">
                <Iconify icon="solar:share-bold" width={16} sx={{ mr: 0.5 }} />
                {fShortenNumber(totalShares)}
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {smUp && (
          <Box
            sx={{
              width: 180,
              height: 240,
              position: 'relative',
              flexShrink: 0,
              p: 1,
            }}
          >
            <Avatar
              alt={author.name}
              src={author.avatarUrl}
              sx={{ position: 'absolute', top: 16, right: 16, zIndex: 9 }}
            />
            <Image alt={title} src={coverUrl} sx={{ height: 1, borderRadius: 1.5 }} />
          </Box>
        )}
      </Stack>

      <CustomPopover open={popover.open} onClose={popover.onClose} arrow="bottom-center">
        <MenuList>
          <MenuItem
            onClick={() => {
              popover.onClose();
              router.push(paths.dashboard.post.details(title));
            }}
          >
            <Iconify icon="solar:eye-bold" />
            View
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
              router.push(paths.dashboard.post.edit(title));
            }}
          >
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}