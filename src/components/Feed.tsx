import IUser from "../interfaces/user.interface";
import IPost from "../interfaces/post.interface";
import {Post, User} from "@prisma/client"
import PostItem from "./PostItem";

export const Feed = ({ posts, user }: { posts: Post[]; user: User }) => {
  return (
    <>
      {posts.map((post: Post) => (
        <PostItem post={post} user={user} />
      ))}
    </>
  );
};

export default Feed;
