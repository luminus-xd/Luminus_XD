'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './index.module.css';

const ScrollProgressBar = () => {
  const [scrollRatio, setScrollTop] = useState(0);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);

  const onScroll = useCallback(() => {
    if (animationFrameId) return;

    setAnimationFrameId(
      requestAnimationFrame(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;

        setScrollTop(scrolled);
        setAnimationFrameId(null);
      }),
    );
  }, [animationFrameId]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [onScroll, animationFrameId]);

  return (
    <progress value={scrollRatio} max="100" className={styles.progress} aria-label="記事の読了率" />
  );
};

export default ScrollProgressBar;
