import uniq from 'lodash/uniq';
import flatten from 'lodash/flatten';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';

import Scrollbar from 'src/components/scrollbar';

import { IChatParticipant, IChatConversation } from 'src/types/chat';

import { ChatRoomGroup } from './chat-room-group';
import { ChatRoomSkeleton } from './chat-skeleton';
import { ChatRoomSingle } from './chat-room-single';
import { ChatRoomAttachments } from './chat-room-attachments';
import { UseNavCollapseReturnType } from './hooks/use-collapse-nav';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

type Props = {
  loading: boolean;
  participants: IChatParticipant[];
  conversation: IChatConversation;
  collapseNav: UseNavCollapseReturnType;
};

export function ChatRoom({ collapseNav, participants, conversation, loading }: Props) {
  const theme = useTheme();

  const { collapseDesktop, openMobile, onCloseMobile } = collapseNav;

  const group = participants.length > 1;

  const attachments = uniq(flatten(conversation?.messages.map((messages) => messages.attachments)));

  const renderContent = loading ? (
    <ChatRoomSkeleton />
  ) : (
    <Scrollbar>
      {group ? (
        <ChatRoomGroup participants={participants} />
      ) : (
        <ChatRoomSingle participant={participants[0]} />
      )}

      <ChatRoomAttachments attachments={attachments} />
    </Scrollbar>
  );

  return (
    <>
      <Stack
        sx={{
          minHeight: 0,
          flex: '1 1 auto',
          width: NAV_WIDTH,
          display: { xs: 'none', lg: 'flex' },
          borderLeft: `solid 1px ${theme.palette.divider}`,
          transition: theme.transitions.create(['width'], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(collapseDesktop && { width: 0 }),
        }}
      >
        {!collapseDesktop && renderContent}
      </Stack>

      <Drawer
        anchor="right"
        open={openMobile}
        onClose={onCloseMobile}
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: {
            width: NAV_WIDTH + 40,
          },
        }}
      >
        {renderContent}
      </Drawer>
    </>
  );
}
