import React from "react";
import {useUsers} from "../hooks/queries";
import {Link} from "react-router-dom";

const List = () => {
  const {isLoading, error, data, isFetching} = useUsers();

  if (isLoading) return <div>Loading...</div>;

  if (error) { // @ts-ignore
    return <div>An error has occurred: {error.message}</div>;
  }

  console.log('List')

  return (
    <div>
      <h1>User List</h1>
      <p>Total: {data.length}</p>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {data.map((user: any) => (
          <tr key={user.id.toString()}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/users/${user.id}`}>See details</Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <br/>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default List;
