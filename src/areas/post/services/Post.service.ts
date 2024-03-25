import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import DBClient from "../../../PrismaClient";
import type { User } from "@prisma/client";


// ❗️ Implement this class much later, once everything works fine with your mock db
export class PostService implements IPostService {
  readonly _db: DBClient = DBClient.getInstance();

  addPost(post: IPost, username: string): void {
    
  }
  getAllPosts(username: string): IPost[] {
    //this._db.prisma
    throw new Error("Where is my posts table?")
  }
  findById(id: string): IPost {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }

  sortPosts(posts: IPost[]): IPost[] {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
}
