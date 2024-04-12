import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import DBClient from "../../../PrismaClient";
import type { User, Post, Comment } from "@prisma/client";

// ❗️ Implement this class much later, once everything works fine with your mock db
export class PostService implements IPostService {
  readonly _db: DBClient = DBClient.getInstance();

  async addPost(post: Omit<Post, "id">, username: string): Promise<void> {
    await this._db.prisma.post.create({
      data: {
        message: post.message,
        userId: post.userId,
        createdAt: new Date(),
        comment: post.comment,
        likes: post.likes,
      },
    });
  }
  async getAllPosts(userId: string) {
    const user = await this._db.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        following: true,
        followers: true,
      },
    });
    const followedUserIds = user.following.map((followedUser) => followedUser.id);

    return await this._db.prisma.post.findMany({
      where: {
        OR: [{ userId: user.id }, { userId: { in: followedUserIds } }],
      },
      include: {
        user: true,
        // following: true,
        // followers: true,
      },
    });
  }
  async findById(id: string): Promise<Post | undefined> {
    return await this._db.prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        commentList: true,
      },
    });
  }
  addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }

  sortPosts(posts: Post[]): Promise<Post[]> {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
}
