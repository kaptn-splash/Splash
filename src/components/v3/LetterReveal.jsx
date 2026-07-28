import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Char = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = Math.min(start + 1 / total, 1);
  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {char}
    </motion.span>
  );
};

/* getblue.com-style: text spells out per-letter as you scroll */
const LetterReveal = ({ text, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.3'],
  });

  const words = text.split(' ');
  const total = text.length;
  let charCount = 0;

  return (
    <p ref={ref} className={`v3-letter-reveal ${className}`} aria-label={text}>
      {words.map((word, wi) => {
        const wordStart = charCount;
        charCount += word.length + 1;
        return (
          <React.Fragment key={wi}>
            <span className="lr-word">
              {word.split('').map((char, ci) => (
                <Char
                  key={ci}
                  char={char}
                  index={wordStart + ci}
                  total={total}
                  progress={scrollYProgress}
                />
              ))}
            </span>{' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default LetterReveal;
