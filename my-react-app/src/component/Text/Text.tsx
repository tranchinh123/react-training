import "./index.css";
interface TextProps {
  title: string;
  variant: string;
}

const Text = ({ title, variant }: TextProps) => {
  return <h1 className={`${variant}`}>{title}</h1>;
};

export default Text;
