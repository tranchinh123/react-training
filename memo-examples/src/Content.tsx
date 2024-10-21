import { memo } from "react";

interface ContentProps {
  count: number;
}
const Content = ({ count }: ContentProps) => {
  console.log("render");

  return <h1>Hello {count}</h1>;
};
export default memo(Content);
