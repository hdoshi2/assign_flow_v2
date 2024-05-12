import { Editor, Extension, EditorOptions } from '@tiptap/react';

import { Theme, SxProps } from '@mui/material/styles';
import { ButtonBaseProps } from '@mui/material/ButtonBase';

// ----------------------------------------------------------------------

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type EditorProps = Partial<EditorOptions> & {
  value?: string;
  fullItem?: boolean;
  errorText?: string;
  sx?: SxProps<Theme>;
  placeholder?: string;
  helperText?: React.ReactNode;
  slotProps?: {
    wrap: SxProps<Theme>;
  };
  onChange?: (value: string) => void;
};

export type ToolbarBlockProps = {
  editor: Editor | null;
};

export type ToolbarProps = {
  fullScreen: boolean;
  editor: Editor | null;
  onToggleFullScreen: VoidFunction;
  fullItem?: EditorProps['fullItem'];
};

export type ToolbarItemProps = ButtonBaseProps & {
  icon?: React.ReactNode;
  label?: string;
  active?: boolean;
  disabled?: boolean;
};

export type CodeHighlightBlockProps = {
  extension: Extension;
  updateAttributes: (attributes: Record<string, any>) => void;
  node: {
    attrs: {
      language: string;
    };
  };
};
