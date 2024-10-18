import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function UserInformation() {
  const context = useContext(AppContext);

  if (!context) {
    return <p>Error: Context is not available.</p>;
  }

  const { userData } = context;

  if (!userData) {
    return <p></p>;
  }

  return (
    <>
      <h5>User Information</h5>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Username:</strong> {userData.username}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
    </>
  );
}
