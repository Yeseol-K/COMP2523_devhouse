import IComment from "../../interfaces/comment.interface";

// The following is an (incomplete) example of what a view model may look like
// The purpose of a view model is to format the incoming data from the database
// into what the ejs page requires specifically.

// Please feel free to change this in any way you like.
export class CommentViewModel {
  userId: string;
  createdAt: string;
  message: string;

  constructor(comment: IComment) {
    this.userId = comment.userId;
    this.createdAt = comment.createdAt;
    this.message = comment.message;
  }
}
