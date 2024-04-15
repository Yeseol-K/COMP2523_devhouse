import Header from "../../../components/shared/Header";
import { Html } from "../../../templates/html-tmpl";
import UserList from "../../../components/UserList";
import {User} from "@prisma/client"

export default ({ currentUser, isLoggedIn, users }: { currentUser: User, isLoggedIn: boolean, users: User[] }) => {
  return (
    <Html>
      <div class="h-screen bg-gray-200 w-screen">
        <main class="flex-1 flex flex-col w-screen">
          <Header isLoggedIn={isLoggedIn} username={currentUser.username} />
          <div class="w-full">
            <UserList users={users} currentUser={currentUser} />
          </div>
        </main>
      </div>
    </Html>
  );
};