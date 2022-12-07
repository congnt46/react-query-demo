import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {ReactQueryDevtools} from "react-query/devtools";
import {Sample} from "../types/Sample";
import {Response} from "../types/common";
import getErrorMessage from "../utils/getErrorMessage";

const Example = () => {
  const {isLoading, error, data, isFetching} = useQuery("example-data", fetchData);

  async function fetchData() {
    const res = await axios.get<{}, Response<Sample>>(
      "https://api.github.com/repos/tannerlinsley/react-query"
    );
    return res.data;
  }

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) {
    return <div>An error has occurred: {getErrorMessage(error)}</div>;
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
