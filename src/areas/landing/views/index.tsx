import { Html } from "../../../templates/html-tmpl";

export default () => {
  return (
    <Html>
      <section class="w-full px-8 text-gray-700 ">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div class="relative flex flex-col md:flex-row">
            <a
              href="/"
              class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                DevHouse<span class="text-blue-500">.</span>
              </span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Features
              </a>
            </nav>
          </div>

          <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href="/auth/login"
              class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="/auth/register"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </section>

      <section class="px-2 py-32  md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">A friendly way to&nbsp;</span>
                  <span class="block text-blue-500 xl:inline">connect with other Devs.</span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to share and connect with other developers.
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto"
                  >
                    Try It Free
                  </a>
                  <a
                    href="#_"
                    class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full  pt-7 pb-7 md:pt-20 md:pb-24">
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="https://cdn.devdojo.com/images/december2020/productivity.png"
              class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
            />
          </div>

          <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Explore Our Community
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Join the community of like-minded developers to stay up-to-date with the latest technologies and share
              your knowledge.
            </p>
            <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>
                Accelerate your productivity and achieve your career goals
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>
                Stay ahead of the competition with cutting-edge techniques
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>
                Learn from experts and enhance your skills with real-world projects
              </li>
            </ul>
          </div>
        </div>
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Message, Follow, and Share
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              We offer a robust set of social features, such as messaging, following, and sharing, to facilitate
              engagement and connections between developers
            </p>
            <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>
                Message other developers for collobration and support.
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>
                Keep up-to-date with developer trends.
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>
                Share your projects, code snippets, to inspire others.
              </li>
            </ul>
          </div>

          <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src="https://cdn.devdojo.com/images/december2020/settings.png"
              class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div class="flex flex-wrap items-center -mx-3">
            <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div class="w-full lg:max-w-md">
                <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Join our community and take your skills to the next level!
                </h2>
                <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  It's never been easier to connect with devs. Our app will help you with the following:
                </p>
                <ul>
                  <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <span class="font-medium text-gray-500">Connect with developers from around the world</span>
                  </li>
                  <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <span class="font-medium text-gray-500">
                      Showcase your skills and work on projects with other developers
                    </span>
                  </li>
                  <li class="flex items-center py-2 space-x-4 xl:py-3">
                    <span class="font-medium text-gray-500">
                      Stay up-to-date with the latest technologies and trends
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              {" "}
              <img
                class="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="flex items-center justify-center py-20  min-w-screen">
        <div class="px-16 ">
          <div class="container flex flex-col items-start mx-auto lg:items-center">
            <p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-blue-500 uppercase lg:justify-center lg:items-center">
              Don't just take our word for it
            </p>

            <h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              See what others are saying
            </h2>
            <div class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

            <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      alt="picture of armaan"
                      src="https://avatars.githubusercontent.com/u/55081439?v=4"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div class="flex flex-col items-start justify-center">
                    <h4 class="font-bold text-gray-800">Armaan Dhanji</h4>
                    <p class="text-gray-600">OOP Instructor</p>
                  </div>
                </div>
                <blockquote class="mt-8 text-lg text-gray-500">
                  "Instagram and X better watch out...DevHouse is the next big thing!"
                </blockquote>
              </div>
              <div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      alt="picture of jeremy"
                      src="https://avatars.githubusercontent.com/u/172523?v=4"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div class="flex flex-col items-start justify-center">
                    <h4 class="font-bold text-gray-800">Jeremy Holman</h4>
                    <p class="text-gray-600">Web Dev Instructor</p>
                  </div>
                </div>
                <blockquote class="mt-8 text-lg text-gray-500">
                  "Thanks for creating this service. My life is so much easier. Thanks for making such a great product."
                </blockquote>
              </div>
              <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div class="flex items-center justify-center">
                  <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      alt="picture of patrick"
                      src="https://media.licdn.com/dms/image/C5603AQFhaH1NGcFU6w/profile-displayphoto-shrink_800_800/0/1547336633671?e=2147483647&v=beta&t=c4wxXJArgNbwoCUcmVdFB3UfjPcDmbygd2NUe2lWwF8"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div class="flex flex-col items-start justify-center">
                    <h4 class="font-bold text-gray-800">Patrick Guichon</h4>
                    <p class="text-gray-600">Database Instructor</p>
                  </div>
                </div>
                <blockquote class="mt-8 text-lg text-gray-500">
                  "Packed with awesome content and exactly what I was looking for. I would highly recommend this to
                  anyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Team
              </a>
            </div>
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
            <div class="px-5 py-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Terms
              </a>
            </div>
          </nav>
          <div class="flex justify-center mt-8 space-x-6">
            <a href="https://www.facebook.com/" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Instagram</span>
            </a>
            <a href="https://twitter.com/" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Twitter</span>
            </a>
            <a href="https://github.com/" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">GitHub</span>
            </a>
          </div>
          <p class="mt-8 text-base leading-6 text-center text-gray-400">© 2024 DevHouse, Inc. All rights reserved.</p>
        </div>
      </section>
    </Html>
  );
};
