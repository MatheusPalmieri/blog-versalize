import { Post } from '@/interfaces/posts';
import styles from './style.module.css';
import { Profile } from './Profile';
import { getUser } from '@/services/users';
import { getComments } from '@/services/comments';

interface CardPostProps {
  post: Post;
}

export const CardPost = async ({ post }: CardPostProps) => {
  const { id, userId, title, body } = post;

  const [user, comments] = await Promise.all([
    getUser(userId),
    getComments(id),
  ]);

  return (
    <div className={styles.card}>
      <div>
        <Profile user={user} />

        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.body}>{body}</p>
        </div>
      </div>

      <div className={styles.comments}>
        <p>
          {comments.length > 0
            ? `Ver ${comments.length} comentário${
                comments.length > 1 && `s`
              }...`
            : `Seja o primeiro a comentar!`}
        </p>
      </div>
    </div>
  );
};
