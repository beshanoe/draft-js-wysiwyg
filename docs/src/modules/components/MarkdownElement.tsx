import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import HighlightedCode from './HighlightedCode';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    wordBreak: 'break-word',
    width: '100%',
    '& .anchor-link': {
      marginTop: -96, // Offset for the anchor.
      position: 'absolute',
    },
    '& pre': {
      backgroundColor: '#24292e',
      margin: '24px auto',
      padding: theme.spacing(2),
      direction: 'ltr',
      borderRadius: theme.shape.borderRadius,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
      maxWidth: 'calc(100vw - 32px)',
      [theme.breakpoints.up('md')]: {
        maxWidth: 'calc(100vw - 32px - 16px)',
      },
    },
    // inline code
    '& code': {
      direction: 'ltr',
      lineHeight: 1.4,
      display: 'inline-block',
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
      WebkitFontSmoothing: 'subpixel-antialiased',
      padding: '0 3px',
      fontSize: '.85em',
      borderRadius: 2,
      '& .special': {
        color: '#ef8ec7'
      }
    },
    '& code[class*="language-"]': {
      // Avoid layout jump after hydration (style injected by prism)
      lineHeight: 1.5,
    },
    // code blocks
    '& pre code': {
      fontSize: '.9em',
    },
    '& .token.operator': {
      background: 'transparent',
    },
    '& h1': {
      fontSize: '2.5rem',
      margin: '16px 0',
      letterSpacing: '0em',
      fontWeight: 400,
    },
    '& .description': {
      ...theme.typography.h5,
      margin: '0 0 40px',
    },
    '& .sub-description': {
      ...theme.typography.h5,
      margin: '0 0 40px',
      fontSize: '1.2rem',
    },
    '& h2': {
      margin: '40px 0 16px',
      fontSize: '1.875rem',
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    '& h3': {
      margin: '40px 0 16px',
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    '& h4': {
      ...theme.typography.h6,
      margin: '32px 0 16px',
    },
    '& h5': {
      ...theme.typography.subtitle2,
      margin: '32px 0 16px',
    },
    '& p, & ul, & ol': {
      marginTop: 0,
      marginBottom: 16,
    },
    '& ul': {
      paddingLeft: 30,
    },
    '& h1, & h2, & h3, & h4': {
      '& code': {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        // Remove scroll on small screens.
        wordBreak: 'break-all',
      },
      '& .anchor-link-style': {
        // To prevent the link to get the focus.
        display: 'none',
      },
      '& a:not(.anchor-link-style):hover': {
        color: 'currentColor',
        borderBottom: '1px solid currentColor',
        textDecoration: 'none',
      },
      '&:hover .anchor-link-style': {
        display: 'inline-block',
        padding: '0 8px',
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.text.primary,
        },
        '& svg': {
          width: '0.7em',
          height: '0.7em',
          fill: 'currentColor',
        },
      },
    },
    '& table': {
      // Trade display table for scroll overflow
      display: 'block',
      wordBreak: 'normal',
      width: '100%',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
      borderCollapse: 'collapse',
      marginBottom: '16px',
      borderSpacing: 0,
      overflow: 'hidden',
      '& .prop-name': {
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
      },
      '& .required': {
        color: '#006500',
      },
      '& .prop-type': {
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        color: '#932981',
      },
      '& .prop-default': {
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        borderBottom: `1px dotted ${theme.palette.divider}`,
      },
    },
    '& td': {
      ...theme.typography.body2,
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16,
      color: theme.palette.text.primary,
    },
    '& td code': {
      lineHeight: 1.6,
    },
    '& th': {
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.primary,
      whiteSpace: 'pre',
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16,
    },
    '& blockquote': {
      borderLeft: '5px solid #ffe564',
      backgroundColor: 'rgba(255,229,100,0.2)',
      padding: '4px 24px',
      margin: '24px 0',
      '& p': {
        marginTop: '16px',
      },
    },
    '& a, & a code': {
      // Style taken from the Link component
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& img, video': {
      maxWidth: '100%',
    },
    '& img': {
      // Avoid layout jump
      display: 'inline-block',
    },
    '& hr': {
      height: 1,
      margin: theme.spacing(6, 0),
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider,
    },
    '& kbd': {
      // Style taken from GitHub
      padding: '2px 5px',
      font: '11px Consolas,Liberation Mono,Menlo,monospace',
      lineHeight: '10px',
      color: '#444d56',
      verticalAlign: 'middle',
      backgroundColor: '#fafbfc',
      border: '1px solid #d1d5da',
      borderRadius: 3,
      boxShadow: 'inset 0 -1px 0 #d1d5da',
    },
  },
}));

/**
 *
 */
interface MarkdownElementProps extends React.HTMLAttributes<HTMLDivElement> {
  htmlOrRaw: string;
  isHighlightedCode?: boolean;
  language?: string;
}

const MarkdownElement = ({
  className,
  htmlOrRaw,
  isHighlightedCode,
  language,
  ...other
}: MarkdownElementProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, 'markdown-body', className)}
      dangerouslySetInnerHTML={
        !isHighlightedCode ? { __html: htmlOrRaw } : undefined
      }
      {...other}
    >
      {isHighlightedCode && (
        <HighlightedCode code={htmlOrRaw} language={language || 'js'} />
      )}
    </div>
  );
};

export default MarkdownElement;
