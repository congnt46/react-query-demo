import {useQuery} from "react-query";
import {fetchUsers} from "../../api/users";

function useUsers() {
  return useQuery("users", fetchUsers, {
    refetchInterval: 4000,
  });
}

export default useUsers;