import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import DBClient from "../../../PrismaClient";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";
import IUser from "../../../interfaces/user.interface";
import IPost from "../../../interfaces/post.interface";
import { randomUUID } from "crypto";

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  readonly _db: DBClient = DBClient.getInstance();
  private _service: IPostService;


  constructor(postService: IPostService) {
    this.initializeRoutes();
    this._service = postService;
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.get(`${this.path}/:id/delete`, this.deletePost);
    this.router.post(`${this.path}/:id/comment`, this.createComment);
    this.router.post(`${this.path}/new`, this.createPost);
  }

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  private getAllPosts = async (req: Request, res: Response) => {
    const isLoggedIn = req.isAuthenticated();
    const user: IUser = req.user;
    const username = user.username;
    const posts = await this._service.getAllPosts(username)
    posts.map((p) => console.log(p.commentList))
    res.render("post/views/posts", { post: posts, isLoggedIn, username, user });
  };

  // 🚀 This methods should use your postService and pull from your actual fakeDB, not the temporary post object
  private getPostById = async (req: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = req.isAuthenticated();
    const id: string = req.params.id;
    const post = await this._service.findById(id)
    res.render("post/views/post", { post: post });
  };

  // 🚀 These post methods needs to be implemented by you
  private createComment = async (req: Request, res: Response, next: NextFunction) => {
    console.log("creating comment")
    const user = req.user
    const postId = req.params.id
    const message = req.body.commentText
    console.log("post body") 
    console.log(req.body, req.user, req.params.id)
    this._service.addCommentToPost({id: randomUUID(), message: message, userId: user.id, createdAt: new Date().toDateString(), postId: postId})
    res.redirect(`/posts/${postId}`)
  };
  private createPost = async (req: Request, res: Response, next: NextFunction) => {
    const message = req.body.message
    const user = req.user    
    const post: IPost = {
      message: message,
      userId: user.id,
      createdAt: Date.now().toLocaleString(),
      likes: 0,
      comment: 0,
      id: randomUUID()
    }
    this._service.addPost(post, user.username)
    res.redirect("/posts")
  };
  private deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.body.id
    //! no function to delete in this._service
  };
}

export default PostController;
