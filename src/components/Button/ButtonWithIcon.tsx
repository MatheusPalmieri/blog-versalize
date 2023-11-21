import styles from './style.module.css';
import { IconType } from 'react-icons';

interface ButtonProps {
  text: string;
  Icon?: IconType;
  iconPosition?: 'left' | 'right';
}

export const ButtonWithIcon = ({
  text,
  Icon,
  iconPosition = 'left',
}: ButtonProps) => {
  return (
    <button className={styles.button_with_icon}>
      {Icon && iconPosition === 'left' && <Icon />}
      {text}
      {Icon && iconPosition === 'right' && <Icon />}
    </button>
  );
};
