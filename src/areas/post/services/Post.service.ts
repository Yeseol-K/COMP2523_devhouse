// import IPost from "../../../interfaces/post.interface";
import DBClient from "../../../PrismaClient";
import IPostService from "./IPostService";
import type { Post } from "@prisma/client";

export class PostService implements IPostService {
  readonly _db: DBClient = DBClient.getInstance();

  async addPost(postData: Post, username: string): Promise<Post> {
    const post = await this._db.prisma.post.create({
      data: {
        ...postData,
        userId: username,
      },
    });
    return post;
  }

  async getAllPosts(username: string): Promise<Post[]> {
    const posts = await this._db.prisma.post.findMany({
      where: {
        userId: username,
      },
    });
    return posts;
  }

  async findById(id: string): Promise<Post | null> {
    const post = await this._db.prisma.post.findUnique({
      where: { id },
    });
    return post;
  }

  async addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): Promise<void> {
    throw new Error("Not yet implemented");
  }

  async sortPosts(posts: Post[]): Promise<Post[] | null> {
    throw new Error("Not yet implemented");
  }
}
