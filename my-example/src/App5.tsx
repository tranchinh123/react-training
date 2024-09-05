import { useState } from "react";
import Content from "./Content";

function App5() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Content />}
    </div>
  );
}
export default App5;
