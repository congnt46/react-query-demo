import {useQuery} from "react-query";
import {fetchUsers} from "../../api/users";

function useUsers() {
  return useQuery("users", fetchUsers);
}

export default useUsers;