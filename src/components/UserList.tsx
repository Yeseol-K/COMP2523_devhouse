import {User} from "@prisma/client"
import UserItem from "./UserItem";

export const UserList = ({ currentUser, users }: { currentUser: User; users: User[] }) => {
  return (
    <>
      {users.map((user: User) => (
        <UserItem currentUser={currentUser} user={user} />
      ))}
    </>
  );
};

export default UserList;