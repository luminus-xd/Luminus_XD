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
            whileHover={{
              scale: 1.2,
              boxShadow: '0 0 32px 0 rgb(29, 161, 242), 0 0 20px 10px rgba(29, 161, 242, 0.64)',
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              className={styles.twitterX}
              src="/images/twitter-x-logo.svg"
              alt="LuminusのX（旧Twitter）"
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
            whileHover={{
              scale: 1.2,
              boxShadow: '0 0 8px 0 rgba(14, 12, 13, 0.72)',
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              className={styles.github}
              src="/images/github-mark.svg"
              alt="LuminusのGitHub"
              width={40}
              height={40}
            />
          </motion.div>
        </Link>
      </li>
    </ul>
  );
}
