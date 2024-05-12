import { useRef, useEffect } from 'react';
import { m, Variants, useInView, useAnimation, UseInViewOptions } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { varFade, varContainer } from './variants';

// ----------------------------------------------------------------------

export const animatedTextClasses = {
  root: 'animated-text-root',
  lines: 'animated-text-lines',
  line: 'animated-text-line',
  word: 'animated-text-word',
  char: 'animated-text-char',
  space: 'animated-text-space',
  srOnly: 'sr-only',
  dataIndex: '[data-columns="3"]',
};

export type AnimatedTextProps = TypographyProps & {
  variants?: Variants;
  repeatDelay?: number;
  text: string | string[];
  once?: UseInViewOptions['once'];
  amount?: UseInViewOptions['amount'];
};

export function AnimatedText({
  sx,
  text,
  variants,
  once = true,
  amount = 0.5,
  component = 'p',
  repeatDelay = 0, // 1000 = 1s
  ...other
}: AnimatedTextProps) {
  const ref = useRef(null);

  const controls = useAnimation();

  const textArray = Array.isArray(text) ? text : [text];

  const isInView = useInView(ref, { once, amount });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const show = () => {
      controls.start('animate');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('initial');
          controls.start('animate');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('initial');
    }

    return () => clearTimeout(timeout);
  }, [controls, isInView, repeatDelay]);

  return (
    <Typography
      component={component}
      className={animatedTextClasses.root}
      sx={{
        p: 0,
        m: 0,
        /**
         * Utilities for improving accessibility with screen readers.
         * https://v1.tailwindcss.com/docs/screen-readers
         */
        [`& .${animatedTextClasses.srOnly}`]: {
          p: 0,
          width: '1px',
          height: '1px',
          margin: '-1px',
          borderWidth: 0,
          overflow: 'hidden',
          position: 'absolute',
          whiteSpace: 'nowrap',
          clip: 'rect(0, 0, 0, 0)',
        },
        ...sx,
      }}
      {...other}
    >
      <span className={animatedTextClasses.srOnly}>{textArray.join(' ')}</span>

      <Box
        component={m.span}
        ref={ref}
        initial="initial"
        animate={controls}
        exit="exit"
        variants={varContainer()}
        aria-hidden
        className={animatedTextClasses.lines}
      >
        {textArray.map((line, lineIndex) => (
          <Box
            component="span"
            key={`${line}-${lineIndex}`}
            data-index={lineIndex}
            className={animatedTextClasses.line}
            sx={{ display: 'block' }}
          >
            {line.split(' ').map((word, wordIndex) => {
              const lastWordInline = line.split(' ')[line.split(' ').length - 1];

              return (
                <Box
                  component="span"
                  key={`${word}-${wordIndex}`}
                  data-index={wordIndex}
                  className={animatedTextClasses.word}
                  sx={{ display: 'inline-block' }}
                >
                  {word.split('').map((char, charIndex) => (
                    <Box
                      component={m.span}
                      key={`${char}-${charIndex}`}
                      variants={variants ?? varFade().in}
                      data-index={charIndex}
                      className={animatedTextClasses.char}
                      sx={{ display: 'inline-block' }}
                    >
                      {char}
                    </Box>
                  ))}

                  {lastWordInline !== word && (
                    <Box
                      component="span"
                      className={animatedTextClasses.space}
                      sx={{ display: 'inline-block' }}
                    >
                      &nbsp;
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Typography>
  );
}
