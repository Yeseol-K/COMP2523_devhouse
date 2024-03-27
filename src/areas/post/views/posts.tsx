// import { posts, userDatabase } from "../../../model/fakeDB";
import PostForm from "../../../components/PostForm";
import Header from "../../../components/shared/Header";
import { Html } from "../../../templates/html-tmpl";
import Feed from "../../../components/Feed";
import user, { Post } from "@prisma/client";
import IUser from "../../../interfaces/user.interface";

export default ({
  post,
  isLoggedIn,
  username,
  user,
}: {
  post: Post[];
  isLoggedIn: boolean;
  username: string;
  user: any;
}) => {
  return (
    <Html>
      <div class="h-screen bg-gray-200 w-screen">
        <main class="flex-1 flex flex-col w-screen">
          <Header isLoggedIn={isLoggedIn} username={username} />
          <div class="w-full">
            <PostForm />
            <Feed posts={post} user={user} />
          </div>
        </main>
      </div>
    </Html>
  );
};
