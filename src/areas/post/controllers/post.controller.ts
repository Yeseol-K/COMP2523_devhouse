import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  private postService: IPostService;

  constructor(postService: IPostService) {
    this.postService = postService; // Assign the postService to the instance property
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Bind `this` context to the instance or use arrow functions
    this.router.get(this.path, ensureAuthenticated, this.getAllPosts.bind(this));
    this.router.get(`${this.path}/:id`, ensureAuthenticated, this.getPostById.bind(this));
    this.router.post(`${this.path}/:id/comment`, ensureAuthenticated, this.createComment.bind(this));
    this.router.post(this.path, ensureAuthenticated, this.createPost.bind(this));
    this.router.get(`${this.path}/:id/delete`, ensureAuthenticated, this.deletePost.bind(this));
  }

  private getAllPosts = async (req: Request, res: Response) => {
    const isLoggedIn = req.isAuthenticated();
    const username = req.user.username;
    const posts = await this.postService.getAllPosts(username);
    console.log(username);
    res.render("post/views/posts", { posts, isLoggedIn, username });
  };

  private getPostById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params; // Extract id from request parameters
    const post = await this.postService.findById(id);
    res.render("post/views/post", { post: post });
  };

  private createComment = async (req: Request, res: Response, next: NextFunction) => {
    // Implementation goes here
  };
  
  private createPost = async (req: Request, res: Response, next: NextFunction) => {
    // Implementation goes here
  };
  
  private deletePost = async (req: Request, res: Response, next: NextFunction) => {
    // Implementation goes here
  };
}

export default PostController;
