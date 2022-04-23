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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "57a81d3e-6fae-42de-9880-b08389cb1362",
    firstName: "Mohammed",
    lastName: "Vahid",
    username: "vahid",
    password: "@vahid123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "9ac965c1-de29-44cf-b2af-0dec8eb2b413",
    firstName: "Akshay",
    lastName: "Saini",
    username: "akshay",
    password: "@saini123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "cafbe724-08da-4717-8455-88368050c719",
    firstName: "Suraj",
    lastName: "Kumar",
    username: "suraj",
    password: "@suraj123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "9d4434eb-9945-4ad8-b650-de29b53af384",
    firstName: "Tanner",
    lastName: "Linsley",
    username: "tanner",
    password: "@linsley123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "2dcfa3dd-eb87-4ac7-9785-8fb2bee1ff31",
    firstName: "Muhammad",
    lastName: "Khalid",
    username: "khalid",
    password: "@khalid123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
