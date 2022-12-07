import axios from "axios";
import {User} from "../types/User";
import {Response} from "../types/common";

const fetchUsers = async () => {
  const response = await axios.get<{}, Response<User[]>>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

const fetchUser = async (id: number) => {
  const response = await axios.get<{}, Response<User>>(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  return response.data;
}

export {
  fetchUser,
  fetchUsers,
}