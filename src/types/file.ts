import { InputDateValue, DatePickerValue } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type IFileFilterValue = string | string[] | DatePickerValue;

export type IFileFilters = {
  name: string;
  type: string[];
  startDate: DatePickerValue;
  endDate: DatePickerValue;
};

// ----------------------------------------------------------------------

export type IFileShared = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  permission: string;
};

export type IFolderManager = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  tags: string[];
  totalFiles?: number;
  isFavorited: boolean;
  shared: IFileShared[] | null;
  createdAt: InputDateValue;
  modifiedAt: InputDateValue;
};

export type IFileManager = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  tags: string[];
  isFavorited: boolean;
  shared: IFileShared[] | null;
  createdAt: InputDateValue;
  modifiedAt: InputDateValue;
};

export type IFile = IFileManager | IFolderManager;
