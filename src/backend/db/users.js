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

          content:
            "Vivamus tempor magna id urna cursus, vitae porta ex pharetra. Phasellus nulla sem, fringilla at sem et, placerat sagittis sapien. In hac habitasse platea dictumst. Maecenas ullamcorper ultrices metus in ornare. Nam venenatis massa diam, ut fringilla tortor rutrum ut. Vestibulum mattis justo turpis, quis laoreet lorem",
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
    stories: {
      username: "vahid",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
            "Vivamus tempor magna id urna cursus, vitae porta ex pharetra. Phasellus nulla sem, fringilla at sem et, placerat sagittis sapien. In hac habitasse platea dictumst. Maecenas ullamcorper ultrices metus in ornare. Nam venenatis massa diam, ut fringilla tortor rutrum ut. Vestibulum mattis justo turpis, quis laoreet lorem",
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
    stories: {
      username: "akshay",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
            "Vivamus tempor magna id urna cursus, vitae porta ex pharetra. Phasellus nulla sem, fringilla at sem et, placerat sagittis sapien. In hac habitasse platea dictumst. Maecenas ullamcorper ultrices metus in ornare. Nam venenatis massa diam, ut fringilla tortor rutrum ut. Vestibulum mattis justo turpis, quis laoreet lorem",
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
    stories: {
      username: "suraj",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
            "Vivamus tempor magna id urna cursus, vitae porta ex pharetra. Phasellus nulla sem, fringilla at sem et, placerat sagittis sapien. In hac habitasse platea dictumst. Maecenas ullamcorper ultrices metus in ornare. Nam venenatis massa diam, ut fringilla tortor rutrum ut. Vestibulum mattis justo turpis, quis laoreet lorem",
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
    stories: {
      username: "tanner",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
            "Vivamus tempor magna id urna cursus, vitae porta ex pharetra. Phasellus nulla sem, fringilla at sem et, placerat sagittis sapien. In hac habitasse platea dictumst. Maecenas ullamcorper ultrices metus in ornare. Nam venenatis massa diam, ut fringilla tortor rutrum ut. Vestibulum mattis justo turpis, quis laoreet lorem",
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
    stories: {
      username: "khalid",
      data: [
        {
          _id: "04fe250c-961f-4276-b3fe-75a1568fc87a",

          content:
            "Vivamus tempor magna id urna cursus, vitae porta ex pharetra. Phasellus nulla sem, fringilla at sem et, placerat sagittis sapien. In hac habitasse platea dictumst. Maecenas ullamcorper ultrices metus in ornare. Nam venenatis massa diam, ut fringilla tortor rutrum ut. Vestibulum mattis justo turpis, quis laoreet lorem",
        },
      ],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
