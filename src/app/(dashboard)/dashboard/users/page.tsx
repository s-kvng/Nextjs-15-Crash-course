import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul className="mt-10">
        <li>
          <Link href={`users/${1}`}>user 1</Link>
        </li>
        <li>
          <Link href={`users/${2}`}>user 2</Link>
        </li>
        <li>
          <Link href={`users/${3}`}>user 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Users;
