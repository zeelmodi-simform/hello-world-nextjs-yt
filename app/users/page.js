import React from 'react';
import User from '../components/User';

const UserList = async () => {
  const { users } = await getData();
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user?.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default UserList;

export async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  return { users: data };
}
