import { Options } from 'react-markdown';

import { Theme, SxProps } from '@mui/material/styles';

// ----------------------------------------------------------------------

export interface MarkdownProps extends Options {
  asHtml?: boolean;
  sx?: SxProps<Theme>;
}
