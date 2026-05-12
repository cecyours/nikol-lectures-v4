import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  const name = "Mary";
  const currentDate = new Date().toLocaleDateString();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <Header />







      <h1>Welcome to React!  <Welcome name="Umang" /></h1>
      <p>Hello, {name}! Today is {currentDate}.</p>
      <button onClick={() => alert("You clicked the button!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
