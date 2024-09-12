import { useEffect, useRef, useState } from "react";

function App6() {
  const [count, setCount] = useState(60);
  const [isCounted, setIsCounted] = useState(true);
  const timerId = useRef<number>();
  const prevCount = useRef<number>();
  const h1Ele = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h1Ele.current);
    if (h1Ele.current) {
      h1Ele.current.textContent = "hello";
      h1Ele.current.style.color = "red";
    }
  }, []);

  const handleStart = () => {
    setIsCounted(!isCounted);

    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    console.log("start", timerId.current);
  };

  const handleStop = () => {
    setIsCounted(!isCounted);

    clearInterval(timerId.current);
    console.log("stop", timerId.current);
  };

  console.log(count, prevCount.current);

  return (
    <div>
      <h1 ref={h1Ele}>{count}</h1>
      {isCounted && <button onClick={handleStart}>Start</button>}
      {!isCounted && <button onClick={handleStop}>Stop</button>}
    </div>
  );
}

export default App6;
