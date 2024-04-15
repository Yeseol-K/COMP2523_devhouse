import {Post, User} from "@prisma/client"

interface Props {
  currentUser: User;
  user: User;
}

export const UserItem = ({ currentUser, user }: Props) => {
  return (
    <div class="mx-5 rounded mt-5 bg-white border-b-[1px] p-10 cursor-pointer border-slate-200 hover:bg-gray-100 transition relative">
      <div class="flex flex-row items-center gap-3 cursor-pointer">
        <img class="w-10 h-10 rounded-full" src={user.profilePicture} alt="Rounded avatar" />

        <div class="w-full">
          <div class=" flex flex-row items-center gap-20 justify-between">
            <p class="font-semibold cursor-pointer hover:underline">{user.firstName} {user.lastName}</p>
          </div>

          <div class="flex flex-row items-center mt-3 gap-10">
            <div class="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
              <a href={`/posts/follow/${user.id}`}>Follow</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;