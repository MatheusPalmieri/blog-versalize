'use client';

import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './style.module.css';
import { Post } from '@/interfaces/posts';

interface CardsLazyProps {
  posts: ReactElement;
}

export const CardsLazy = ({ posts }: CardsLazyProps) => {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>(
    posts.props.children.slice(0, 5),
  );
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisiblePosts((post) => [
            ...post,
            ...posts.props.children.slice(post.length, post.length + 5),
          ]);
        }
      },
      { threshold: 1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerRef.current);
      }
    };
  }, [posts]);

  return (
    <section className={`container ${styles.container_posts}`}>
      {visiblePosts as ReactNode}
      <div ref={observerRef} />
    </section>
  );
};
