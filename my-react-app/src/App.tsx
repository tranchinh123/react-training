import Button from "./component/Button/Button";
import Text from "./component/Text/Text";
const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Button label="Primary Button" variant="primary" />
      <Button label="Secondary Button" variant="secondary" />
      <Button label="Secondary Button" variant="warning" />
      <Text title="Hello" variant="primary-text" />
      <Text title="Hi" variant="secondary-text" />
    </div>
  );
};

export default App;
