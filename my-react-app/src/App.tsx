import "./App.css";
import ButtonBack from "./components/ButtonBack";
function App() {
  const handleBackClick = () => {
    console.log("abc");
  };
  return (
    <>
      <ButtonBack handleBackClick={handleBackClick} />
    </>
  );
}

export default App;
