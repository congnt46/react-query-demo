import {useQuery} from "react-query";
import {fetchUser} from "../../api/users";

const useUser = (id: number) => {
  return useQuery(["users", id], () => fetchUser(id), {
    enabled: !!id,
    staleTime: 0,
  });
}

export default useUser;