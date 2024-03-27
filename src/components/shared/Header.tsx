import { User } from "@prisma/client";

export const Header = ({ isLoggedIn, user }: { isLoggedIn: boolean; user: User }) => {
  return (
    <header class="border-b-[1px] border-slate-200 dark:border-neutral-800 w-full p-5 bg-white">
      <div class="flex flex-row items-center gap-2 justify-between">
        <h1 class="dark:text-white text-xl font-semibold">
          <a href="/">👩‍💻 DevHouse</a>
        </h1>
        <h1 class="dark:text-white text-xl font-semibold">
          {isLoggedIn ? (
            <a href="/settings">
              "{user.username}" <a href="/auth/logout">Logout 🔑</a>{" "}
            </a>
          ) : (
            <a href="/auth/login">Sign Up / Login 🔑</a>
          )}
        </h1>
      </div>
    </header>
  );
};

export default Header;
