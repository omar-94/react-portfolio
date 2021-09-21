import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  
  return (
    <Router basename={process.env.PUBLIC_URL} >
        <Navbar />
        <Header />
        <AboutMe />
    </Router>
  );
}

export default App;
