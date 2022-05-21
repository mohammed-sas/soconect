import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Day 127-129 #100DaysOfCode #151daysofcode - Explored Tailwind, materialUI and Chakra UI",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["javascript","css"],
    username: "vahid",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653125648/my-uploads/avataaars_vwvich.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:"Currently learning JavaScript components and how to add listeners to make my sites more dynamic.Felt intimidated starting back" ,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["javascript","100daysOfCode"],
    username: "akshay",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126084/my-uploads/avataaars_1_vmwffm.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "JavaScript Tips💡 Modules in JavaScript . A module is just a piece of code in a file that you can call and use from other files. A modular design is the opposite of having all your project's code in one single file. Lets discuss 👇",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    hashtags:["javascript"],
    comment:{
      commentCount:0,
      comments:[],
    },
    username: "suraj",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126280/my-uploads/avataaars_2_cw1hc0.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "good way to implement the S in S.O.L.I.D for a React project is to use custom hooks. Custom hooks allow you to separate concerns from your main component file. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["react"],
    username: "tanner",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126607/my-uploads/avataaars_4_j5fxmd.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Using unknown with Typescript gives you greater flexibility over the current condition of values. Without it, your code may expect concrete values before they're ever needed/called.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["react","typescript"],
    username: "tanner",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126607/my-uploads/avataaars_4_j5fxmd.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      `( JavaScript Tip 💡 ) 
      The Geolocation.getCurrentPosition() method is used to get the current position of the device.
      Note: - It only works on a secure connection.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["javascript"],
    username: "suraj",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126280/my-uploads/avataaars_2_cw1hc0.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      `Did you know that the "start" attribute specifies the start value of the first list item in an ordered list"(ol)"?

      For example, To get the list start from the number 30
      
      30. Coffee
      31. Tea
      32. Milk
      
      👇`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["html"],
    username: "akshay",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126084/my-uploads/avataaars_1_vmwffm.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
     `What are tags in #html and why are they important for website?'

     Meta tags are pieces of information which you can pass to search engine and users about the content you serve.
     
     Different tags which you can see are
     title: Defines title of page
     meta: Description of content of page
     viewport: How site should appear on various size of devices
     canonical: Can be used to specify principal version of page.
     
     There are many more tags
     if you know any more tags, let me know in comments.
     
     Meta tags are important because they impact how your site appears in Search Engines.
     It is super crucial for SEO purposes.
     This can directly impact the number of people interacting with website.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["html"],
    username: "vahid",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653125648/my-uploads/avataaars_vwvich.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      `First class functions
      A programming language is said to have First-class functions when functions in that language are treated like any other variable. Here functions can be passed as arguments to other functions , can be returned by other functions and can be assigned as a value to a variable.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["javascript"],
    username: "khalid",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126430/my-uploads/avataaars_3_efqu2r.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      `𝐂𝐒𝐒 𝐜𝐚𝐧 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐭𝐨 𝐚𝐩𝐩𝐥𝐲 𝐚 𝐟𝐢𝐥𝐭𝐞𝐫 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐢𝐦𝐚𝐠𝐞😎.  Yes, you read that correctly.
      The 𝒇𝒊𝒍𝒕𝒆𝒓 𝒑𝒓𝒐𝒑𝒆𝒓𝒕𝒚 gives items visual effects. It has predefined functions like blur, brightness, contrast, hue, and sepia, as well as the ability to create custom SVG filters.
      As a result, you may easily tweak the attributes' values to make your image more appealing. Here is the demonstration for the same.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["css"],
    username: "khalid",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126430/my-uploads/avataaars_3_efqu2r.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
     `The CSS ::marker pseudo-element is used for styling the marker📑 of a list element.

     The marker📌 can be a bullet point in an unordered list or numbers in an ordered list.
     
     You can apply all font, animation/transition🚀 CSS properties and a few more, to these markers using the ::marker pseudo-element.
     
     It is supported by all browsers🌏 except Internet Explorer.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["css"],
    username: "khalid",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126430/my-uploads/avataaars_3_efqu2r.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
     `If your app doesn’t work after upgrading to React 18, the first thing to check is whether it’s wrapped in <StrictMode>. Strict Mode has gotten stricter in 18, but you can turn it off and address issues at your own pace later!
     `,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["react"],
    username: "tanner",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126607/my-uploads/avataaars_4_j5fxmd.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      `ReduxJS/Toolkit is the best thing happened to Redux...
      don't need to create separate file for Actions 😊
      It made Redux fascinating!`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["react"],
    username: "suraj",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126280/my-uploads/avataaars_2_cw1hc0.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
     `I have added React Redux to my project so that I can manage state of my app in one place.\n

     Implying? I can access my App's states from anywhere within the app.\n
     
     Redux makes state handling way easier more so when the React App gets more complex.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comment:{
      commentCount:0,
      comments:[],
    },
    hashtags:["react"],
    username: "akshay",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126084/my-uploads/avataaars_1_vmwffm.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
