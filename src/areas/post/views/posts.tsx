import { PostViewModel } from "./post.viewmodel";
import PostForm from "../../../components/PostForm";
import Header from "../../../components/shared/Header";
import { Html } from "../../../templates/html-tmpl";
import Feed from "../../../components/Feed";
import IPost from "../../../interfaces/post.interface";
import IUser from "../../../interfaces/user.interface";
import {Post, User} from "@prisma/client"

export default ({ post, isLoggedIn, username, user }: { post: Post[]; isLoggedIn: boolean; username: string, user: User }) => {
  return (
    <Html>
      <div class="h-screen bg-gray-200 w-screen">
        <main class="flex-1 flex flex-col w-screen">
          <Header isLoggedIn={isLoggedIn} username={username} />
          <div class="w-full">
            <PostForm user={user}/>
            <Feed posts={post} user={user} />
          </div>
        </main>
      </div>
    </Html>
  );
};
