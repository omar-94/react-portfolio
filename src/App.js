import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
    </Router>
  );
}

export default App;
