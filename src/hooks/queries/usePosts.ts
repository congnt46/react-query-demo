import {useEffect, useState} from "react";
import {useQuery, useQueryClient} from "react-query";
import {fetchPosts} from "../../api/posts";

function usePosts() {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)

  const {data, ...rest} = useQuery(["posts", `page-${page}`], () => fetchPosts(page), {
    keepPreviousData: true,
    staleTime: 5000,
  });

  const hasMore = data?.length >= 5;

  // Prefetch the next page!
  useEffect(() => {
    if (hasMore) {
      queryClient.prefetchQuery(['posts', `page-${page+1}`], () =>
        fetchPosts(page + 1)
      )
    }
  }, [hasMore, data, page, queryClient])

  function onNext() {
    setPage(page => page + 1)
  }

  function onPrev() {
    setPage(page => page >= 2 ? page - 1 : 1)
  }

  return {data, hasMore, page, onNext, onPrev, ...rest};
}

export default usePosts;