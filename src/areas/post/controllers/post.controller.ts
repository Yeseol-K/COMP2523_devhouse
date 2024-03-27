import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
// import IPostService from "../services/IPostService";
// import { post, posts } from "../../../model/fakeDB";
import DBClient from "../../../PrismaClient";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";
import IUser from "../../../interfaces/user.interface";
import { User, Post } from "@prisma/client";
// import { PostViewModel } from "../views/post.viewmodel";
import { PostService } from "../services";
import { IAuthenticationService } from "../../../areas/authentication/services";

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  readonly _db: DBClient = DBClient.getInstance();
  private _service: PostService;
  private _userService: IAuthenticationService;

  constructor(postService: PostService, userService: IAuthenticationService) {
    this.initializeRoutes();
    this._service = postService;
    this._userService = userService;
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.get(`${this.path}/:id/delete`, this.deletePost);
    this.router.post(`${this.path}/:id/comment`, this.createComment);
    this.router.post(`${this.path}`, this.createPost);
  }

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  private getAllPosts = async (req: Request, res: Response) => {
    const isLoggedIn = req.isAuthenticated();
    const username = req.user.username;
    const posts = await this._service.getAllPosts(username);
    const userId = posts.map((post) => post.userId);
    for (let i = 0; i < userId.length; i++) {
      const user = await this._userService.getUserById(userId[i]);
      console.log(user);
      res.render("post/views/posts", { post: posts, isLoggedIn, user, username });
    }
    // const postVMList = posts.map((p) => new PostViewModel(p));
  };

  // 🚀 This methods should use your postService and pull from your actual fakeDB, not the temporary post object
  private getPostById = async (req: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = req.isAuthenticated();
    const id: string = req.params.id;
    const post = await this._service.findById(id);
    console.log(post);
    res.render("post/views/post", { post: post });
  };

  // 🚀 These post methods needs to be implemented by you
  private createComment = async (req: Request, res: Response, next: NextFunction) => {};
  private createPost = async (req: Request, res: Response, next: NextFunction) => {};
  private deletePost = async (req: Request, res: Response, next: NextFunction) => {};
}

export default PostController;
