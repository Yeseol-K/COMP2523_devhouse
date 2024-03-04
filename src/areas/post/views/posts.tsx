import { posts, userDatabase } from "../../../model/fakeDB";
import PostForm from "../../../components/PostForm";
import Header from "../../../components/shared/Header";
import { Html } from "../../../templates/html-tmpl";
import Feed from "../../../components/Feed";

export default ({ post }: { post: any }) => {
  return (
    <Html>
      <div class="h-screen bg-gray-200 w-screen">
        <main class="flex-1 flex flex-col w-screen">
          <Header />
          <div class="w-full">
            <PostForm />
            <Feed posts={posts} user={userDatabase[0]} />
          </div>
        </main>
      </div>
    </Html>
  );
};
