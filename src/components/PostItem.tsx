x��QK�0�}{Rammk�-beQܐ���4�k1ͭI�&��n��@A��|��2��D��Q�R��R����V��r��/�b:��d�%52gGp6AY��b���w�*Rϫ ge����h+Sy|�<�
��͟fg9�9w�rTM�~�=�]��x��o|?��C?�6?bE��� V�&� o�2��8	E�bj�	�J�Ю`�ښ�f��gE��PF5�m*Ӣ\e�������t��������!�¦Ge����4�.��.                                                                                                                                                                                                                                                  ded-full" src={user.profilePicture} alt="Rounded avatar" />

        <div class="w-full">
          <div class="flex flex-row items-center gap-20 justify-between">
            <p class="dark:text-white font-semibold cursor-pointer hover:underline">John Doe</p>
            <span class="text-neutral-500 text-sm">5 days ago</span>
          </div>

          <div class="dark:text-white mt-1">{post.message}</div>

          <div class="flex flex-row items-center mt-3 gap-10">
            <div class="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
              Comment
            </div>

            <div
              class={`flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500`}
            >
              Like
              <p>{post.likes || 0}</p>
            </div>

            <div
              class={`flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500`}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
