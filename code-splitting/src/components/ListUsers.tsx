import { useState, useEffect } from "react";

interface User {
  title: string;
}

const ListUsers = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return <h1>{user ? user.title : ""}</h1>;
};

export default ListUsers;
