import Input from "./components/Input/Input";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Input type="text" name="name" placeholder="Enter your name" />
        <Input type="email" name="email" placeholder="Enter your email" />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>

      <button
        style={{
          width: 200,
          marginTop: 15,
          borderRadius: 15,
          backgroundColor: "blue",
          color: "white",
        }}
      >
        abc
      </button>
    </>
  );
}

export default App;
