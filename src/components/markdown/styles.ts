import ReactMarkdown from 'react-markdown';

import { alpha, styled } from '@mui/material/styles';

import { markdownClasses } from './classes';

// ----------------------------------------------------------------------

const MARGIN = '0.75em';

export const StyledRoot = styled(ReactMarkdown)(({ theme }) => {
  const lightMode = theme.palette.mode === 'light';

  return {
    '> * + *': {
      marginBottom: MARGIN,
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
    /**
     * Hr Divider
     */
    hr: {
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
    [`& .${markdownClasses.content.image}`]: {
      width: '100%',
      height: 'auto',
      margin: 'auto',
      maxWidth: '100%',
    },
    /**
     * List
     */
    '& ul, & ol': {
      paddingLeft: 16,
      '& > li': {
        lineHeight: 2,
        '& > p': {
          margin: 0,
          display: 'inline-block',
        },
      },
    },
    /**
     * Blockquote
     */
    '& blockquote': {
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
        marginBottom: 0,
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
    [`& .${markdownClasses.content.codeInline}`]: {
      padding: theme.spacing(0.25, 0.5),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body2.fontSize,
      borderRadius: theme.shape.borderRadius / 2,
      backgroundColor: alpha(theme.palette.grey[500], 0.2),
    },
    /**
     * Code Block
     */
    [`& .${markdownClasses.content.codeBlock}`]: {
      position: 'relative',
      '& pre': {
        overflowX: 'auto',
        padding: theme.spacing(3),
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[900],
        fontFamily: "'JetBrainsMono', monospace",
        '& code': {
          fontSize: theme.typography.body2.fontSize,
        },
      },
    },
    /**
     * Table
     */
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: `1px solid ${theme.palette.divider}`,
      'th, td': {
        padding: theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`,
      },
      'tbody tr:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.neutral,
      },
    },
    /**
     * Checkbox
     */
    input: {
      '&[type=checkbox]': {
        position: 'relative',
        cursor: 'pointer',
        '&:before': {
          content: '""',
          top: -2,
          left: -2,
          width: 17,
          height: 17,
          borderRadius: 3,
          position: 'absolute',
          backgroundColor: theme.palette.grey[lightMode ? 300 : 700],
        },
        '&:checked': {
          '&:before': {
            backgroundColor: theme.palette.primary.main,
          },
          '&:after': {
            content: '""',
            top: 1,
            left: 5,
            width: 4,
            height: 9,
            position: 'absolute',
            transform: 'rotate(45deg)',
            msTransform: 'rotate(45deg)',
            WebkitTransform: 'rotate(45deg)',
            border: `solid ${theme.palette.common.white}`,
            borderWidth: '0 2px 2px 0',
          },
        },
      },
    },
  };
});
