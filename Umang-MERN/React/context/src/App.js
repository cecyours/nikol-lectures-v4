import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Profile />
      <ThemeToggle />
    </div>
  );
}

export default App;
