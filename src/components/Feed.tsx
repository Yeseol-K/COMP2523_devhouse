import IUser from "../interfaces/user.interface";
import IPost from "../interfaces/post.interface";
import PostItem from "./PostItem";

export const Feed = ({ posts, user }: { posts: IPost[]; user: IUser }) => {
  return (
    <>
      {posts.map((post: IPost) => (
        <PostItem post={post} user={user} />
      ))}
    </>
  );
};

export default Feed;
