import IComment from "./comment.interface";

interface IPost {
  id: string;
  message: string;
  userId: string;
  createdAt: string;
  commentList?: Array<IComment>;
  likes: number;
  comment: number;
}

export default IPost;
