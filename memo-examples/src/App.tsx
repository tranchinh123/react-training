import { useState } from "react";
import "./App.css";
import Content from "./Content";
import { Profiler } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const onRender: React.ProfilerOnRenderCallback = (
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number
  ) => {
    console.log(`${id} rendered in ${actualDuration}ms during ${phase}`);
  };

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <>
      <div>
        <Profiler id="Content" onRender={onRender}>
          <Content count={count} />
        </Profiler>

        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick2}>Click me2</button>
      </div>
    </>
  );
}

export default App;
