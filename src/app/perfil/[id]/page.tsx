import { CardAvatar } from '@/components/CardsProfile/CardAvatar';
import { CardContact } from '@/components/CardsProfile/CardContact';
import { CardsPosts } from '@/components/CardsProfile/CardsPosts';
import { Nav } from '@/components/Nav';
import { getPostsByUser } from '@/services/posts';
import { getUser } from '@/services/users';

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

        <h2>Posts</h2>
        <CardsPosts posts={posts} />
      </div>
    </div>
  );
}
