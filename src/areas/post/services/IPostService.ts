import IComment from "../../../interfaces/comment.interface";
import IPost from "../../../interfaces/post.interface";

// ⭐️ Feel free to change this interface in any way you like. It is simply an example...
export default interface IPostService {
  addPost(post: IPost, username: string): void;

  sortPosts(posts: IPost[]): Promise<IPost[]>;

  getAllPosts(username: string): Promise<IPost[]>;

  findById(id: string): Promise<IPost> | undefined;

  addCommentToPost(
    message: IComment,
  ): Promise<IPost | void>;
}
