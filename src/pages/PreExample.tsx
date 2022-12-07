import React, {useEffect, useState} from "react";
import axios from "axios";
import getErrorMessage from "../utils/getErrorMessage";
import {Sample} from "../types/Sample";
import {Response} from "../types/common";

const PreExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null|string>(null);
  const [data, setData] = useState<Sample | null>(null);

  useEffect(() => {
    (() => fetchData())()
  }, [])

  async function fetchData() {
    try {
      const res = await axios.get<{}, Response<Sample>>(
        "https://api.github.com/repos/tannerlinsley/react-query"
      );
      setData(res.data)
    } catch (e) {
      setError(getErrorMessage(e))
    }
    setIsLoading(false)
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
    </div>
  );
}

export default PreExample;
