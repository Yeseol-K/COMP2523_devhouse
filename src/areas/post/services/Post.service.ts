// @ts-nocheck
import IPostService from "./IPostService";
import DBClient from "../../../PrismaClient";
import type { User, Comment, Post } from "@prisma/client";

export class PostService implements IPostService {
  readonly _db: DBClient = DBClient.getInstance();

  async addPost(post: Post, username: string): Promise<void> {
    await this._db.prisma.post.create({
      data: {
        id: post.id,
        message: post.message,
        userId: post.userId,
      },
    });
  }
  async getAllPosts(username: string): Promise<Post[]> {
    const user: User = await this._db.prisma.user.findUnique({
      where: {
        username: username,
      },
      include: {
        following: true,
      },
    });
    //@ts-ignore
    let following = user.following.map((u) => u.id);
    return await this._db.prisma.post.findMany({
      where: {
        OR: [
          {
            userId: user.id,
          },
          {
            userId: { in: following },
          },
        ],
      },
      include: {
        user: true,
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
        user: true,
      },
    });
  }
  async addCommentToPost(message: Comment): Promise<void> {
    await this._db.prisma.comment.create({
      data: {
        id: message.id,
        message: message.message,
        createdAt: message.createdAt,
        userId: message.userId,
        postId: message.postId,
      },
    });
  }

  sortPosts(posts: Post[]): Post[] {
    return posts.sort((a, b) => convertDate(b.createdAt) - convertDate(a.createdAt));
  }

  async deletePost(id: string): Promise<void> {
    await this._db.prisma.post.delete({
      where: {
        id: id,
      },
    });
  }
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertDate(createdAt: string) {
  console.log(createdAt);
  const [m, d, y] = createdAt.split(" ");
  let month = String(months.indexOf(m) + 1);
  let day = d.slice(0, -3);
  console.log(day);
  let year = y;
  let date = Date.parse(`${month}, ${day}, ${year}`);
  console.log(date);
  return date;
}
