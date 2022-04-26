import axios from "axios";

const fetchUsers = async () => {
  const response = await axios.get<any, any>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

const fetchUser = async (id: number) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  return response.data;
}

export {
  fetchUser,
  fetchUsers,
}