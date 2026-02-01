
import './App.css';
import { Greeting } from "./components/Greeting";
import { Messange } from "./components/Messange";

function App() {
  return (
    <>
      <Greeting name="Іван" />
      <Messange text="hello" />
    </>
  );
}

export default App;
