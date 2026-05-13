import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import User from './components/User';
import Counter from './components/Counter';
import Dice from './components/Dice';

function App() {
  const name = "Mary";
  const currentDate = new Date().toLocaleDateString();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <Header />
      {/* <h1>Welcome to React!  <Welcome name="Umang" /></h1> */}

      <Dice />


      <h2>Users (Props Example)</h2>
      <User name={"Umang"} age={"22"} />

      <User name={"Vishal"} age={"24"} />

      <User name={"Gopal"} age={"25"} />


      <h2>Counter (State Example)</h2>

      <Counter />




      <p>Hello, {name}! Today is {currentDate}.</p>
      <button onClick={() => alert("You clicked the button!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
