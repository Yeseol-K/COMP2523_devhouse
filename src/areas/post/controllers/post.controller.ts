import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import { IAuthenticationService } from "../../../areas/authentication/services/IAuthentication.service";
import DBClient from "../../../PrismaClient";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";
import { randomUUID } from "crypto";
import type { User, Post } from "@prisma/client";
import { UserDTO } from "../../../areas/authentication/services/IAuthentication.service";

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  readonly _db: DBClient = DBClient.getInstance();
  private _service: IPostService;
  private _userService: IAuthenticationService;

  constructor(postService: IPostService, userService: IAuthenticationService) {
    this.initializeRoutes();
    this._service = postService;
    this._userService = userService;
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/follow/:id`, this.followUser);
    this.router.get(`${this.path}/users`, this.getAllUsers);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.get(`${this.path}/:id/delete`, this.deletePost);
    this.router.post(`${this.path}/:id/comment`, this.createComment);
    this.router.post(`${this.path}/new`, this.createPost);
  }

  private getAllPosts = async (req: Request, res: Response) => {
    const isLoggedIn = req.isAuthenticated();
    //!!! wtf is this typing error
    //@ts-ignore
    const user: User = req.user;
    const username = user.username;
    const posts = await this._service.getAllPosts(username);
    const sortedPosts = this._service.sortPosts(posts);
    res.render("post/views/posts", { post: sortedPosts, isLoggedIn, username, user });
  };

  private getPostById = async (req: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = req.isAuthenticated();
    const id: string = req.params.id;
    const post = await this._service.findById(id);
    res.render("post/views/post", { post: post });
  };

  private createComment = async (req: Request, res: Response, next: NextFunction) => {
    console.log("creating comment");
    const user = req.user;
    const postId = req.params.id;
    const message = req.body.commentText;

    this._service.addCommentToPost({
      id: randomUUID(),
      message: message,
      //@ts-ignore
      userId: user.id,
      createdAt: new Date().toDateString(),
      postId: postId,
    });
    res.redirect(`/posts/${postId}`);
  };
  private createPost = async (req: Request, res: Response, next: NextFunction) => {
    const message = req.body.message;
    //@ts-ignore
    const user: User = req.user;
    const post: Post = {
      message: message,
      userId: user.id,
      createdAt: Date.now().toLocaleString(),
      likes: 0,
      comment: 0,
      id: randomUUID(),
    };
    this._service.addPost(post, user.username);
    res.redirect("/posts");
  };
  private deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.body.id;
    this._service.deletePost(postId);
    res.redirect("/posts");
  };
  private getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = req.isAuthenticated();
    //@ts-ignore
    const user: User = req.user;
    const username = user.username;
    const users = await this._db.prisma.user.findMany({
      where: {
        username: { not: username },
      },
      include: {
        followers: true,
      },
    });
    const filteredUsers = users.filter((u) => filterUsers(u, user));
    res.render("post/views/users", { user, isLoggedIn, users: filteredUsers });
  };
  private followUser = async (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    const user: User = req.user;
    const followId: string = req.params.id;
    const userToFollow = await this._userService.getUserById(followId);
    const newFollow = await this._db.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        following: {
          connect: { id: userToFollow.id },
        },
      },
    });
    res.redirect("/posts");
  };
}

function filterUsers(u: any, user: User): boolean {
  try {
    u.followers.map((f) => {
      if (f.id === user.id) {
        throw new Error("already follows");
      }
    });
    return true;
  } catch (err) {
    return false;
  }
}

export default PostController;
