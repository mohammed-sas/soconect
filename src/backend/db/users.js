import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Mohammed",
    lastName: "Ashraf",
    username: "mohammed",
    password: "@12345678_",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mohammed",
    lastName: "Vahid",
    username: "vahid",
    password: "@vahid123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Akshay",
    lastName: "Saini",
    username: "akshay",
    password: "@saini123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Suraj",
    lastName: "Kumar",
    username: "suraj",
    password: "@suraj123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tanner",
    lastName: "Linsley",
    username: "tanner",
    password: "@linsley123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Muhammad",
    lastName: "Khalid",
    username: "khalid",
    password: "@khalid123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
