import axios from "axios";
import {Response} from "../types/common";
import {Post} from "../types/Post";

const fetchPosts = async (page = 1) => {
  const response = await axios.get<{}, Response<{ data: Post[] }>>(
    "https://jx-dam-api-express-rc.azurewebsites.net/api/public/list?collection_ids=1000&parts=metadata&limit=5&page=" + page
  );
  return response.data.data;
}

const fetchPost = async (id: number) => {
  const response = await axios.get<Response<Post>>(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return response.data;
}

export {
  fetchPost,
  fetchPosts,
}