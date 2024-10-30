import { lazy, Suspense, useState } from "react";
import { sum } from "../sum";

const AdminData = lazy(() => import("./AdminData"));

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => alert(sum(2, 2))}>Add</button>
      <br />
      <br />
      <button onClick={() => setIsAdmin((pre) => !pre)}>Toggle</button>
      <Suspense fallback={<h1>Loadinggggg!!</h1>}>
        {isAdmin ? <AdminData /> : <h2> Not Admin</h2>}
      </Suspense>
    </>
  );
};
export default Home;
