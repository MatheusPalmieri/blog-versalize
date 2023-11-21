'use client';

import { ButtonWithIcon } from '../Button/ButtonWithIcon';
import { Logo } from '../Logo';
import styles from './style.module.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation';

export const Nav = () => {
  const router = useRouter();

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.navbar}`}>
        <div className={styles.button} onClick={() => router.back()}>
          <ButtonWithIcon Icon={IoIosArrowBack as IconType} text='Voltar' />
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </header>
  );
};
