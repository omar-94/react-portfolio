import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import AboutMePage from './pages/AboutMePage'
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router basename={process.env.PUBLIC_URL} >
        <Navbar />
        <Header />
          <Route exact path="/" component={AboutMePage} />
          <Route exact path="/about" component={AboutMePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/contact" component={PortfolioPage} />
        <Footer />
    </Router>
  );
}

export default App;
