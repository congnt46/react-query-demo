import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {useUser} from "../hooks/queries";
import getErrorMessage from "../utils/getErrorMessage";

const Details: React.FC = () => {
  const { id } = useParams<{id: string}>()
  const history = useHistory()
  const {isLoading, error, data, isFetching} = useUser(+id);

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) {
    return <div>An error has occurred: {getErrorMessage(error)}</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>JSON: {JSON.stringify(data)}</p>
      <section>
        <div>ID: {data.id}</div>
        <div>Name: {data.name}</div>
        <div>Email: {data.email}</div>
        <div>
          <button onClick={() => history.goBack()}>Go back</button>
        </div>
      </section>
      <br/>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default Details;
