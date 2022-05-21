import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "fcb163e8-ff59-4d92-bbb5-3c91b27db5e4",
    firstName: "Mohammed",
    lastName: "Ashraf",
    username: "mohammed",
    password: "@12345678_",
    stories: {
      username: "mohammed",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:"When I code, I talk to myself out loud and explain what I'm doing as I would in a video.If you haven't tried it, I would recommend it. It helps me think more clearly.Although, you probably shouldn't do it in public 😄",
        },
        {
          _id: "0555250c-961f-4276-b3fe-75a1568fc87a",

          content:
            "A long weekend!!!!",
        },
      ],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "57a81d3e-6fae-42de-9880-b08389cb1362",
    firstName: "Mohammed",
    lastName: "Vahid",
    username: "vahid",
    password: "@vahid123",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653125648/my-uploads/avataaars_vwvich.png",
    stories: {
      username: "vahid",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
            "I'm really digging @Alpine_JS. This is very useful when you don't want to use a large framework but just need some basic interactivity. It almost reminds me of jQuery.",
        },
      ],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "9ac965c1-de29-44cf-b2af-0dec8eb2b413",
    firstName: "Akshay",
    lastName: "Saini",
    username: "akshay",
    password: "@saini123",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126084/my-uploads/avataaars_1_vmwffm.png",
    stories: {
      username: "akshay",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
           "Coding challenges are tough but incredibly useful.They help with general problem-solving abilities and you learn more about certain methods, concepts, patterns, etc.You'll probably feel dumb at first, but spend 30 mins per day and watch how much you improve.",
        },
      ],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "cafbe724-08da-4717-8455-88368050c719",
    firstName: "Suraj",
    lastName: "Kumar",
    username: "suraj",
    password: "@suraj123",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126280/my-uploads/avataaars_2_cw1hc0.png",
    stories: {
      username: "suraj",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
            "There are certain blocks of code and even terminal commands that I've had to look up literally for years.Don't sweat it if you have a hard time remembering. Hell, I look up stuff from my own tutorials 😆",
        },
      ],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "9d4434eb-9945-4ad8-b650-de29b53af384",
    firstName: "Tanner",
    lastName: "Linsley",
    username: "tanner",
    password: "@linsley123",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126607/my-uploads/avataaars_4_j5fxmd.png",
    stories: {
      username: "tanner",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
           "I absolutely love @tailwindcss. Just testing out layouts and messing around in the browser is so much easier and faster than it's ever been before. I think for many projects, it eliminates the need for design software. completely. Just my opinion though.",
        },
      ],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "2dcfa3dd-eb87-4ac7-9785-8fb2bee1ff31",
    firstName: "Muhammad",
    lastName: "Khalid",
    username: "khalid",
    password: "@khalid123",
    avatar:"https://res.cloudinary.com/dx1vtnzy6/image/upload/v1653126430/my-uploads/avataaars_3_efqu2r.png",
    stories: {
      username: "khalid",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
           "The life of a developer is not all fun and games and great cafeteria food. Let's talk about some of the everyday frustrations and some ways to deal with them.",
        },
      ],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
