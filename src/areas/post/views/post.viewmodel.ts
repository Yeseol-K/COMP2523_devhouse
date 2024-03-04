import IComment from "../../../interfaces/comment.interface";
import IPost from "../../../interfaces/post.interface";

// The following is an (incomplete) example of what a view model may look like
// The purpose of a view model is to format the incoming data from the database
// into what the ejs page requires specifically.

// For example, you may need to show a date on the ejs page like so:
// Date: Monday, Jan 14, 2021

// The default date format in javascript when you call new Date() looks completely different.
// You could solve this in the view model by changing line 19 to a string, and then having a helper
// method which converts the incoming date from the constructor (of type date) to a string formatted
// date that you store in createdAt.

export class PostViewModel {
  public postId: string;
  public userId: string;
  public createdAt: Date;
  public message: string;
  public comments: string;
  public likes: string;
  public commentList?: Array<IComment>;

  constructor(post: IPost) {
    this.postId = post.postId;
    this.userId = post.userId;
    this.createdAt = post.createdAt;
    this.message = post.message;
    this.comments = post.comments?.toString();
    this.likes = post.likes?.toString();
    this.commentList = post.commentList;
  }
}
