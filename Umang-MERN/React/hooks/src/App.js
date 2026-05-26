import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingleUsers from './components/SingleUsers';

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>


          {/* Static Routing */}
          <Route path='/' element={<Users />} />


          {/* dynamic Routing */}
          <Route path='/users/:id' element={<SingleUsers />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
