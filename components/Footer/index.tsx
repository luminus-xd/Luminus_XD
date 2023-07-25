import SocialLinks from '../SocialLinks';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <SocialLinks />
      </div>
      <p className={styles.cr}> 2023 © Luminus.</p>
    </footer>
  );
}
