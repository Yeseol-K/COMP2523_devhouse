import Header from "../../../components/shared/Header";
import { Html } from "../../../templates/html-tmpl";

export default () => {
  return (
    <Html>
      <div class="h-screen bg-gray-200 w-screen">
        <main class="flex-1 flex flex-col w-screen items-center">
          <Header />
          <div class="w-full max-w-lg mt-3">
            <div class="bg-white rounded-lg shadow-lg p-10">
              <h1 class="text-3xl font-bold mb-3">Settings</h1>

              <form action="/setting/change-username" method="post">
                <div class="col-span-6 sm:col-span-3">
                  <div class="mb-4">
                    <label for="newUsername" class="block text-sm font-medium text-gray-700 mb-2">
                      Username:
                    </label>
                    <input
                      type="text"
                      name="newUsername"
                      value=""
                      class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                    />
                    <br />
                  </div>
                  <div class="mb-4">
                    <input
                      type="submit"
                      value="Change"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                    />
                  </div>
                </div>
              </form>
              <form action="/setting/change-email" method="post">
                <div class="col-span-6 sm:col-span-3">
                  <div class="mb-4">
                    <label for="newEmail" class="block text-sm font-medium text-gray-700 mb-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="newEmail"
                      value=""
                      class="border border-gray-400 rounded-lg px-3 py-2 w-full"
                    />
                    <br />
                  </div>

                  <div class="mb-4">
                    <input
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                      type="submit"
                      value="Change"
                    />
                  </div>
                </div>
              </form>

              <form action="/setting/change-password" method="post">
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2" for="currentPassword">
                    Current Password:
                  </label>
                  <input class="border border-gray-400 p-2 w-full rounded" type="password" name="currentPassword" />
                </div>

                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2" for="newPassword">
                    New Password:
                  </label>
                  <input class="border border-gray-400 p-2 w-full rounded" type="password" name="newPassword" />
                </div>

                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2" for="confirmNewPassword">
                    Confirm New Password:
                  </label>
                  <input class="border border-gray-400 p-2 w-full rounded" type="password" name="confirmNewPassword" />
                </div>
                <div class="mb-4">
                  <input
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                    type="submit"
                    value="Change"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Html>
  );
};
