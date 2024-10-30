import { lazy, Suspense } from "react";

const ListUsers = lazy(() => import("./ListUsers"));
const About = () => {
  return (
    <>
      <h1>ABOUT</h1>
      <Suspense fallback={<h1>Loading fetch data</h1>}>
        <ListUsers />
      </Suspense>
    </>
  );
};
export default About;
