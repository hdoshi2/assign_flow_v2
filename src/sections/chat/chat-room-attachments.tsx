import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';

import { useBoolean } from 'src/hooks/use-boolean';

import { fDateTime } from 'src/utils/format-time';

import FileThumbnail from 'src/components/file-thumbnail';

import { IChatAttachment } from 'src/types/chat';

import { CollapseButton } from './styles';

// ----------------------------------------------------------------------

type Props = {
  attachments: IChatAttachment[];
};

export function ChatRoomAttachments({ attachments }: Props) {
  const collapse = useBoolean(true);

  const totalAttachments = attachments.length;

  const renderList = attachments.map((attachment, index) => (
    <Stack key={attachment.name + index} spacing={1.5} direction="row" alignItems="center">
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 40,
          height: 40,
          flexShrink: 0,
          borderRadius: 1,
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.neutral',
        }}
      >
        <FileThumbnail
          imageView
          file={attachment.preview}
          onDownload={() => console.info('DOWNLOAD')}
          sx={{ width: 28, height: 28 }}
        />
      </Stack>

      <ListItemText
        primary={attachment.name}
        secondary={fDateTime(attachment.createdAt)}
        primaryTypographyProps={{
          noWrap: true,
          typography: 'body2',
        }}
        secondaryTypographyProps={{
          mt: 0.25,
          noWrap: true,
          component: 'span',
          typography: 'caption',
          color: 'text.disabled',
        }}
      />
    </Stack>
  ));

  return (
    <>
      <CollapseButton
        selected={collapse.value}
        disabled={!totalAttachments}
        onClick={collapse.onToggle}
      >
        {`Attachments (${totalAttachments})`}
      </CollapseButton>

      {!!totalAttachments && (
        <Collapse in={collapse.value}>
          <Stack spacing={2} sx={{ p: 2 }}>
            {renderList}
          </Stack>
        </Collapse>
      )}
    </>
  );
}
