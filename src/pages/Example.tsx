import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {ReactQueryDevtools} from "react-query/devtools";

const Example = () => {
  const {isLoading, error, data, isFetching} = useQuery("example-data", fetchData);

  async function fetchData() {
    const res = await axios.get(
      "https://api.github.com/repos/tannerlinsley/react-query"
    );
    return res.data;
  }

  if (isLoading) return <div>Loading...</div>;

  if (error) { // @ts-ignore
    return <div>An error has occurred: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>subscribers_count: {data.subscribers_count}</strong>
      <br/>
      <strong>forks_count: {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default Example;
