'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './index.module.css';

const ScrollProgressBar = () => {
  const [scrollRatio, setScrollTop] = useState(0);

  const onScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;

    setScrollTop(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <progress value={scrollRatio} max="100" className={styles.progress} aria-label="記事の読了率" />
  );
};

export default ScrollProgressBar;
