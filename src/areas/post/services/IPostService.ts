import type { Post } from "@prisma/client";

export default interface IPostService {
  addPost(post: Post, username: string): Promise<Post>;

  getAllPosts(username: string): Promise<Post[]>;

  findById(id: string): Promise<Post | null>; 

  addCommentToPost(
    comment: { createdAt: string, userId: string, message: string }, 
    postId: string
  ): Promise<void>; 

  sortPosts(posts: Post[]): Promise<Post[] | null>; 
}
