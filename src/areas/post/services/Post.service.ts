import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import DBClient from "../../../PrismaClient";
import type { User } from "@prisma/client";


// ❗️ Implement this class much later, once everything works fine with your mock db
export class PostService implements IPostService {
  readonly _db: DBClient = DBClient.getInstance();

  async addPost(post: IPost, username: string): Promise<void> {
    await this._db.prisma.post.create({
      data: {
        id: post.id,
        message: post.message,
        userId: post.userId
      }
    })
  }
  async getAllPosts(username: string): Promise<IPost[]> {
    const user = await this._db.prisma.user.findUnique({
      where: {
        username: username,
      },
    })
    //@ts-ignore
    return await this._db.prisma.post.findMany({
      where: {
        userId: user.id
      }
    })
  }
  async findById(id: string): Promise<IPost | undefined> {
    return await this._db.prisma.post.findUnique({
      where: {
        id: id
      }
    })
  }
  addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }

  sortPosts(posts: IPost[]): Promise<IPost[]> {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
}
