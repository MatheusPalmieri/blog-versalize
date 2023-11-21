import { CardAvatar } from '@/components/CardsProfile/CardAvatar';
import { CardContact } from '@/components/CardsProfile/CardContact';
import { CardsPosts } from '@/components/CardsProfile/CardsPosts';
import { Nav } from '@/components/Nav';
import { getPostsByUser } from '@/services/posts';
import { getUser } from '@/services/users';
import styles from './style.module.css';

export default async function Profile({ params }: { params: { id: string } }) {
  const [user, posts] = await Promise.all([
    getUser(Number(params.id)),
    getPostsByUser(Number(params.id)),
  ]);

  return (
    <div>
      <Nav />
      <div className={`container`}>
        <CardAvatar id={user.id} name={user.name} username={user.username} />

        <CardContact
          phone={user.phone}
          email={user.email}
          website={user.website}
        />

        <div className={styles.titles}>
          <h3 className={styles.subtitle}>Publicações</h3>
          <h2 className={styles.title}>#Posts</h2>
        </div>
        <CardsPosts posts={posts} />
      </div>
    </div>
  );
}
