import type { Post, Comment } from "@prisma/client";

export default interface IPostService {
  addPost(post: Post, username: string): void;

  sortPosts(posts: Post[]): Post[];

  getAllPosts(username: string): Promise<Post[]>;

  findById(id: string): Promise<Post> | undefined;

  addCommentToPost(message: Comment): Promise<Post | void>;

  deletePost(id: string): Promise<void>;
}
