import { alpha, styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { editorClasses } from './classes';

// ----------------------------------------------------------------------

const MARGIN = '0.75em';

type StyledRootProps = StackProps & {
  error?: boolean;
  disabled?: boolean;
  fullScreen?: boolean;
};
export const StyledRoot = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'error' && prop !== 'disabled' && prop !== 'fullScreen',
})<StyledRootProps>(({ error, disabled, fullScreen, theme }) => ({
  /**
   * Root
   */
  minHeight: 240,
  maxHeight: 480,
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${alpha(theme.palette.grey[500], 0.2)}`,

  ...(error && {
    border: `solid 1px ${theme.palette.error.main}`,
  }),
  ...(fullScreen && {
    top: 16,
    left: 16,
    maxHeight: '100%',
    position: 'fixed',
    zIndex: theme.zIndex.modal,
    width: `calc(100% - ${32}px)`,
    height: `calc(100% - ${32}px)`,
    backgroundColor: theme.palette.background.default,
  }),
  /**
   * Content
   */
  [`& .${editorClasses.content.root}`]: {
    display: 'flex',
    flex: '1 1 auto',
    overflowY: 'auto',
    flexDirection: 'column',
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    backgroundColor: alpha(theme.palette.grey[500], 0.08),
    ...(error && {
      backgroundColor: alpha(theme.palette.error.main, 0.08),
    }),
    '& .tiptap.ProseMirror': {
      flex: '1 1 auto',
      outline: 'none',
      padding: theme.spacing(0, 2),
      '> * + *': {
        marginBottom: MARGIN,
      },
    },
  },
  /**
   * Heading & Paragraph
   */
  h1: { ...theme.typography.h1, marginTop: MARGIN, marginBottom: MARGIN },
  h2: { ...theme.typography.h2, marginTop: MARGIN, marginBottom: MARGIN },
  h3: { ...theme.typography.h3, marginTop: MARGIN, marginBottom: MARGIN },
  h4: { ...theme.typography.h4, marginTop: MARGIN, marginBottom: MARGIN },
  h5: { ...theme.typography.h5, marginTop: MARGIN, marginBottom: MARGIN },
  h6: { ...theme.typography.h6, marginTop: MARGIN, marginBottom: MARGIN },
  p: { ...theme.typography.body1, marginTop: MARGIN, marginBottom: MARGIN },
  [`& .${editorClasses.content.heading}`]: {},
  /**
   * List
   */
  [`& .${editorClasses.content.bulletList}`]: {
    paddingLeft: 16,
  },
  [`& .${editorClasses.content.orderedList}`]: {
    paddingLeft: 16,
  },
  [`& .${editorClasses.content.listItem}`]: {
    lineHeight: 2,
    '& > p': {
      margin: 0,
      display: 'inline-block',
    },
  },
  /**
   * Placeholder
   */
  [`& .${editorClasses.content.placeholder}`]: {
    '&:first-child::before': {
      ...theme.typography.body2,
      height: 0,
      float: 'left',
      pointerEvents: 'none',
      content: 'attr(data-placeholder)',
      color: theme.palette.text.disabled,
    },
  },
  /**
   * Link
   */
  [`& .${editorClasses.content.link}`]: {
    color: theme.palette.primary.main,
  },
  /**
   * Hr Divider
   */
  [`& .${editorClasses.content.hr}`]: {
    flexShrink: 0,
    borderWidth: 0,
    margin: '2rem 0',
    msFlexNegative: 0,
    WebkitFlexShrink: 0,
    borderStyle: 'solid',
    borderBottomWidth: 'thin',
    borderColor: theme.palette.divider,
  },
  /**
   * Image
   */
  [`& .${editorClasses.content.image}`]: {
    width: '100%',
    height: 'auto',
    margin: 'auto',
    maxWidth: '100%',
  },
  /**
   * Blockquote
   */
  [`& .${editorClasses.content.blockquote}`]: {
    lineHeight: 1.5,
    fontSize: '1.5em',
    margin: '40px auto',
    position: 'relative',
    fontFamily: 'Georgia, serif',
    padding: theme.spacing(3, 3, 3, 8),
    color: theme.palette.text.secondary,
    borderLeft: `solid 8px ${alpha(theme.palette.grey[500], 0.08)}`,
    [theme.breakpoints.up('md')]: {
      width: '100%',
      maxWidth: 720,
    },
    '& p': {
      margin: 0,
      fontSize: 'inherit',
      fontFamily: 'inherit',
    },
    '&::before': {
      left: 16,
      top: -8,
      display: 'block',
      fontSize: '3em',
      content: '"\\201C"',
      position: 'absolute',
      color: theme.palette.text.disabled,
    },
  },
  /**
   * Code inline
   */
  [`& .${editorClasses.content.codeInline}`]: {
    padding: theme.spacing(0.25, 0.5),
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
    borderRadius: theme.shape.borderRadius / 2,
    backgroundColor: alpha(theme.palette.grey[500], 0.2),
  },
  /**
   * Code block
   */
  [`& .${editorClasses.content.codeBlock}`]: {
    position: 'relative',
    '& pre': {
      overflowX: 'auto',
      color: theme.palette.common.white,
      padding: theme.spacing(5, 3, 3, 3),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[900],
      fontFamily: "'JetBrainsMono', monospace",
      '& code': {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    [`& .${editorClasses.content.langSelect}`]: {
      top: 8,
      right: 8,
      zIndex: 1,
      padding: 4,
      outline: 'none',
      borderRadius: 4,
      position: 'absolute',
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightMedium,
      borderColor: alpha(theme.palette.grey[500], 0.08),
      backgroundColor: alpha(theme.palette.grey[500], 0.08),
    },
  },
  /**
   * Disabled
   */
  ...(disabled && {
    opacity: 0.48,
    pointerEvents: 'none',
  }),
}));
