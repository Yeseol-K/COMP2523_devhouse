const PostForm = () => {
  return (
    <div class="border-b-[1px] border-slate-200 dark:border-neutral-800 px-5 py-2">
      <div class="flex flex-row gap-4">
        <img
          class="w-10 h-10 rounded-full"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="Rounded avatar"
        />

        <div class="w-full h-full">
          <textarea
            class="h-full rounded p-5 disabled:opacity-80 peer resize-none mt-3 w-full dark:bg-black ring-0 outline-none text-[20px] placeholder-neutral-500 dark:text-white h-[50px]"
            placeholder="Share your thoughts..."
          ></textarea>

          <div class="mt-4 flex flex-row justify-end">
            <button class="bg-sky-500 text-white rounded-full font-semibold border transition hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed px-8 py-2">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
