import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const context = useContext(AppContext);

  if (!context) {
    return <p>Error: Context is not available.</p>;
  }

  const { userData } = context;

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "right",
        backgroundColor: "rgb(228, 228, 228)",
        padding: "10px",
        gridColumn: isOpen ? "2 / 4" : "1 / 4",
        gridRow: "1 / 2",
      }}
    >
      <div>Hello! {userData ? userData.name : ""} </div>
      <p style={{ cursor: "pointer" }} onClick={toggleSidebar}>
        My profile
      </p>
    </div>
  );
};
export default Header;
