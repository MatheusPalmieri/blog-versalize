import { Nav } from '@/components/Nav';
import { getPost } from '@/services/posts';
import styles from './style.module.css';
import { getComments } from '@/services/comments';
import { getUser } from '@/services/users';

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;

  const [post, comments] = await Promise.all([getPost(id), getComments(id)]);
  const user = await getUser(post.userId);

  return (
    <>
      <Nav />

      <div className={`container`}>
        <div className={styles.card}>
          <div className={styles.post}>
            <div className={styles.titles}>
              <h3 className={styles.subtitle}>
                Post #00{id.toString().padStart(2)}
              </h3>
              <h2 className={styles.title}>{post.title}</h2>
            </div>

            <p className={styles.body}>{post.body}</p>

            <div className={styles.profile}>
              <p>
                {user.name} | @{user.username.toLowerCase()}
              </p>
            </div>
          </div>

          <div className={styles.hr} />

          {comments.map((comment) => (
            <div key={comment.id} className={styles.comments}>
              <p className={styles.email}>{comment.email.toLowerCase()}</p>

              <h4 className={styles.name}>{comment.name}</h4>

              <p className={styles.body_comment}>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
