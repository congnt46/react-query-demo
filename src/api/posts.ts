import axios from "axios";

const fetchPosts = async (page = 1) => {
  const response = await axios.get<any, any>(
    "https://jx-dam-api-express-rc.azurewebsites.net/api/public/list?collection_ids=1000&parts=metadata&limit=5&page=" + page
  );
  return response.data.data;
}

const fetchPost = async (id: number) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return response.data;
}

export {
  fetchPost,
  fetchPosts,
}