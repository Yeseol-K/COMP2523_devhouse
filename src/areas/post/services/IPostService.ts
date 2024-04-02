import type { Post } from "@prisma/client";

export default interface IPostService {
  addPost(post: Post, username: string): Promise<Post>;

  getAllPosts(username: string): Promise<Post[]>; // Return an array of Post

  findById(id: string): Promise<Post | null>; // Find a single Post by ID

  addCommentToPost(
    comment: { createdAt: string; userId: string; message: string }, 
    postId: string
  ): Promise<void>; // Return the updated Post or null if not found

  sortPosts(posts: Post[]): Promise<Post[] | null>; // Sort an array of Post
}
