import { useState } from "react";
import Content from "./Content";
import PreviewAvatar from "./useEffectwithPreviewAvatar";

function App5() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Content />}

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <PreviewAvatar />}
    </div>
  );
}
export default App5;
