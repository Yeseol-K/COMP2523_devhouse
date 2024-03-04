//NOTE - This file contains fake data which you can use for
//       the first sprint. Feel free to change it however you wish.
import IDatabase from "../interfaces/database.interface.ts";

// Please feel free to not use this, or completely change it to your liking. It is just an example.
const database: IDatabase = {
  users: [
    {
      id: "1",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png",
      email: "gates@gmail.com",
      password: "gates123",
      firstName: "Bill",
      lastName: "Gates",
      username: "billgates",
      posts: [
        {
          postId: "abc1",
          userId: "billgates",
          message: "Microsoft is a nice company",
          createdAt: new Date(),
          likes: 3,
          comments: 0,
          commentList: [
            {
              id: "abc2",
              createdAt: "2012-01-09T11:25:13Z",
              userId: "billgates",
              message: "this is some random comment",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png",
      username: "james123",
      email: "james123@gmail.com",
      password: "james123",
      firstName: "James",
      lastName: "Smith",
      posts: [
        {
          postId: "abc3",
          userId: "james123",
          message: "A post by james",
          createdAt: new Date(),
          likes: 30,
          comments: 12,
          commentList: [
            {
              id: "abc4",
              createdAt: "2012-01-05T04:13:24Z",
              userId: "billgates",
              message: "Cool post james. Glad I decided to follow you.",
            },
          ],
        },
        {
          postId: "abc5",
          userId: "james123",
          message: "Nice weather today in Vancouver",
          createdAt: new Date(),
          likes: 30,
          comments: 12,
          commentList: [
            {
              id: "abc6",
              userId: "billgates",
              createdAt: "2012-02-05T05:13:24Z",
              message: "The weather is always nice when you're rich like me.",
            },
          ],
        },
      ],
    },
  ],
};

//NOTE - Again, this is just sample data, you can change it in any way you want
const userDatabase = [
  {
    id: "1",
    firstName: "Armaan",
    username: "armaan",
    lastName: "Armaan",
    email: "ad123@gmail.com",
    password: "ad123123!",
    role: "admin",
    profilePicture:
      "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
  },
  {
    id: "2",
    firstName: "John",
    username: "john",
    lastName: "Armaan",
    email: "jo123@gmail.com",
    password: "jo123",
    role: "user",
    profilePicture:
      "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
  },
];

const post = {
  postId: "1",
  userId: "billgates",
  createdAt: "Thursday, March 2nd",
  message: "I'm seriously considering acquiring devHouse for 6 billion dollars...",
  comments: "0",
  likes: 0,
  commentList: [],
};

const posts = [
  {
    postId: "5",
    userId: "john",
    createdAt: new Date(),
    message: "Hi there",
    comments: 4,
    likes: 2,
    commentList: [],
  },
  {
    postId: "4",
    userId: "john",
    createdAt: new Date(),
    message: `This is the first line of code I ever learned! <pre><code>console.log("hello world");</code></pre>`,
    comments: 4,
    likes: 2,
    commentList: [],
  },
];

export { userDatabase, database, post, posts };
