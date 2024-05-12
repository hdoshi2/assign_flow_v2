import { InputDateValue } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type IMailLabel = {
  id: string;
  type: string;
  name: string;
  color: string;
  unreadCount?: number;
};

export type IMailSender = {
  name: string;
  email: string;
  avatarUrl: string | null;
};

export type IMailAttachment = {
  id: string;
  name: string;
  size: number;
  type: string;
  path: string;
  preview: string;
  createdAt: InputDateValue;
  modifiedAt: InputDateValue;
};

export type IMail = {
  id: string;
  folder: string;
  subject: string;
  message: string;
  isUnread: boolean;
  from: IMailSender;
  to: IMailSender[];
  labelIds: string[];
  isStarred: boolean;
  isImportant: boolean;
  createdAt: InputDateValue;
  attachments: IMailAttachment[];
};

export type IMails = {
  byId: Record<string, IMail>;
  allIds: string[];
};
