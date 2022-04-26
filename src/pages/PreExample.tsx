import React, {useEffect, useState} from "react";
import axios from "axios";

const PreExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null|string>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (() => fetchData())()
  }, [])

  async function fetchData() {
    try {
      const res = await axios.get(
        "https://api.github.com/repos/tannerlinsley/react-query"
      );
      setData(res.data)
    } catch (e) {
      // @ts-ignore
      setError(e.message)
    }
    setIsLoading(false)
  }

  if (isLoading) return <div>Loading...</div>;

  if (error) { // @ts-ignore
    return <div>An error has occurred: {error}</div>;
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
