import React from "react";
import {usePosts} from "../hooks/queries";
import getErrorMessage from "../utils/getErrorMessage";

const List = () => {
  const {isLoading, error, data, isFetching, hasMore, page, onNext, onPrev} = usePosts();

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) {
    return <div>An error has occurred: {getErrorMessage(error)}</div>;
  }

  return (
    <div>
      <h1>Post List</h1>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Created At</th>
        </tr>
        </thead>
        <tbody>
        {data.map((post) => (
          <tr key={post.id.toString()}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>
              {post.author}
            </td>
            <td>{post.createdon}</td>
          </tr>
        ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={4}>
            <p>Current Page: {page}</p>
            <p>Page Item Count: {data.length}</p>
            <p>Has More? {hasMore ? 'Yes' : 'No'}</p>
          </td>
        </tr>
        {hasMore && (
          <tr>
            <td colSpan={4}>
              <button onClick={onPrev}>Prev</button>
              <button onClick={onNext}>Next</button>
            </td>
          </tr>
        )}
        </tfoot>
      </table>
      <br/>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default List;
