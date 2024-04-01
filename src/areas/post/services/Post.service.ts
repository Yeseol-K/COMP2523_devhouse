import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import DBClient from "../../../PrismaClient";
import type { User, Comment } from "@prisma/client";
import IComment from "../../../interfaces/comment.interface";


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
    const user: User = await this._db.prisma.user.findUnique({
      where: {
        username: username,
      },
      include: {
        following: true
      }
    })
    //@ts-ignore
    let following = user.following.map((u) => u.id)
    return await this._db.prisma.post.findMany({
      where: {
        OR: [
          {
            userId: user.id
          },
          {
            userId: { in: following }
          }
        ],
      },
      include: {
        user: true
      }
    })
  }
  async findById(id: string): Promise<IPost | undefined> {
    return await this._db.prisma.post.findUnique({
      where: {
        id: id
      },
      include: {
        commentList: true
      }
    })
  }
  async addCommentToPost(message: IComment): Promise<void> {
    await this._db.prisma.comment.create({
      data: {
        id: message.id,
        message: message.message,
        createdAt: message.createdAt,
        userId: message.userId,
        postId: message.postId
      }
    })
  }

  sortPosts(posts: IPost[]): Promise<IPost[]> {
    throw new Error("Sorting not implemented yet")
  }
}
