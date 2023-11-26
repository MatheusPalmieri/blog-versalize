'use client';

import { ButtonWithIcon } from '../Button/ButtonWithIcon';
import { Logo } from '../Logo';
import styles from './style.module.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation';

interface NavProps {
  go?: string;
  history?: boolean;
}

export const Nav = ({ go, history = true }: NavProps) => {
  const router = useRouter();

  const back = () => {
    if (go) {
      router.push(go);
      return;
    } else if (history) {
      router.back();
      return;
    } else {
      router.push('/');
      return;
    }
  };

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.navbar}`}>
        <div className={styles.button} onClick={back}>
          <ButtonWithIcon Icon={IoIosArrowBack as IconType} text='Voltar' />
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </header>
  );
};
