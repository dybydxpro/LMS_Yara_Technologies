import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import View from './components/View';
import Add from './components/Add';
import Edit from './components/Edit';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/view/:id" element={<View/>} />
          <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  );
}