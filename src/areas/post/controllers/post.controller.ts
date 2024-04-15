import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";
import DBClient from "../../../PrismaClient";

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  private _postService: IPostService;
  readonly _db: DBClient = DBClient.getInstance();

  constructor(postService: IPostService) {
    this._postService = postService;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, ensureAuthenticated, this.getAllPosts.bind(this));
    this.router.get(`${this.path}/:id`, ensureAuthenticated, this.getPostById.bind(this));
    // this.router.post(`${this.path}/:id/comment`, ensureAuthenticated, this.createComment.bind(this));
    // this.router.post(this.path, ensureAuthenticated, this.createPost.bind(this));
    // this.router.get(`${this.path}/:id/delete`, ensureAuthenticated, this.deletePost.bind(this));
  }

  private getAllPosts = async (req: Request, res: Response) => {
    const isLoggedIn = req.isAuthenticated();
    const user = req.user;
    const userId = user.id;
    const username = user.username;
    console.log(user.id)
    const posts = await this._postService.getAllPosts(userId);
    console.log("posts", posts)
    console.log("user")
    res.render("post/views/post", { post: posts, isLoggedIn, user, username});
  };

  private getPostById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const post = await this._postService.findById(id);
    res.render("post/views/post", { post: post });
  };

  // private createComment = async (req: Request, res: Response, next: NextFunction) => {
  //   // Implementation goes here
  // };

  // private createPost = async (req: Request, res: Response, next: NextFunction) => {
  //   // Implementation goes here
  // };

  // private deletePost = async (req: Request, res: Response, next: NextFunction) => {
  //   // Implementation goes here
  // };
}

export default PostController;
