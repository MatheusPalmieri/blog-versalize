'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  placeholder?: string;
}

export const Search = ({ placeholder }: SearchProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node))
        setShow(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.box_input}
        style={show ? { width: '200px' } : { width: '0px' }}
      >
        <input
          type='search'
          name='search'
          id='search'
          className={`${styles.input} show_input_${show}`}
          placeholder={placeholder ?? ''}
          onChange={(input) => setText(input.target.value)}
          value={text}
          ref={inputRef}
        />
      </div>

      <div
        className={styles.box}
        onClick={() => setShow((currentStatus) => !currentStatus)}
      >
        <FaSearch />
      </div>
    </div>
  );
};
