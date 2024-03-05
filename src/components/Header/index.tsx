import { Logo } from '../Logo';
import styles from './style.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
