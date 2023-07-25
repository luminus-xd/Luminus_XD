'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';
import { motion } from 'framer-motion';

export default function SocailLinks() {
  return (
    <ul className={styles.links}>
      <li className={styles.linksItem}>
        <Link href="https://twitter.com/Midnight_dev2" target="_blank" rel="noopener noreferrer">
          <motion.div
            className={styles.motion}
            whileHover={{ scale: 1.2, shadow: '0px 0px 8px rgb(255, 255, 255)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              className={styles.twitterX}
              src="/images/twitter-x-logo.svg"
              alt="X（旧Twitter）"
              width={40}
              height={40}
            />
          </motion.div>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/luminus-xd" target="_blank" rel="noopener noreferrer">
          <motion.div
            className={styles.motion}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              className={styles.github}
              src="/images/github-mark.svg"
              alt="GitHub"
              width={40}
              height={40}
            />
          </motion.div>
        </Link>
      </li>
    </ul>
  );
}
