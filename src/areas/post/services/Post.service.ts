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
async getAllPosts(userId: string) {
  const user = await this._db.prisma.user.findUnique({
    where:{
      id: userId
    },
  })
  return await this._db.prisma.post.findMany({
    where: {userId: user.id}
  })
}
  // async getAllPosts(userId: string) {
  //   const user = await this._db.prisma.user.findUnique({
  //     where: {
  //       id: userId,
  //     },
  //     include: {
  //       following: true,
  //       followers: true,
  //     },
  //   });
  //   const followedUserIds = user.following.map((followedUser) => followedUser.id);

  //   return await this._db.prisma.post.findMany({
  //     where: {
  //       OR: [{ userId: user.id }, { userId: { in: followedUserIds } }],
  //     },
  //     include: {
  //       user: true,
  //       // following: true,
  //       // followers: true,
  //     },
  //   });
  // }
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

  async addCommentToPost(
    message: { id: string; createdAt: string; userId: string; message: string },
    postId: string
  ): Promise<void> {
    throw new Error("Not yet implemented");
  }

  async sortPosts(posts: Post[]): Promise<Post[] | null> {
    throw new Error("Not yet implemented");
  }
}
