'use client';

import styles from './style.module.css';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { CgWebsite } from 'react-icons/cg';

interface CardProps {
  phone: string;
  email: string;
  website: string;
}

export const CardContact = ({ phone, email, website }: CardProps) => {
  const copy = (e: React.MouseEvent<HTMLDivElement>) => {
    const html = e.target as HTMLDivElement;
    html.classList.add(styles.copied);
    navigator.clipboard.writeText(html.innerText);

    setTimeout(() => {
      html.classList.remove(styles.copied);
    }, 2000);
  };

  return (
    <div className={styles.card_horizontal}>
      <h1 className={styles.title}>Contato</h1>

      <div className={styles.divider} />

      <div className={styles.text} onClick={copy}>
        <div>
          <IoPhonePortraitOutline />
          <p>{phone}</p>
        </div>
        <div>
          <HiOutlineMail />
          <p>{email}</p>
        </div>
        <div>
          <CgWebsite />
          <p>{website}</p>
        </div>
      </div>
    </div>
  );
};
