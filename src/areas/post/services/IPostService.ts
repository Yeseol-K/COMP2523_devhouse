import IPost from "../../../interfaces/post.interface";
import { Post, User } from "@prisma/client";

// ⭐️ Feel free to change this interface in any way you like. It is simply an example...
export default interface IPostService {
  addPost(post: Post, username: string): Promise<void>;

  sortPosts(posts: Post[]): Promise<Post[]>;

  getAllPosts(username: string): Promise<
    ({
      user: {
        id: string;
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        profilePicture: string;
      };
    } & {
      id: string;
      message: string;
      userId: string;
      createdAt: Date;
      likes: number;
      comment: number;
    })[]
  >;

  findById(id: string): Promise<Post | undefined>;

  addCommentToPost(
    message: { id: string; createdAt: string; userId: string; message: string },
    postId: string
  ): Post | void;
}
