import { useState } from "react";
import Content from "./components/Contents";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./index.css";
import { AppProvider } from "./Context/AppContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <AppProvider>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Content isOpen={isOpen} />
        {isOpen && <SideBar />}
      </AppProvider>
    </div>
  );
}

export default App;
