import './scss/main.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import News from './components/pages/News/News';
import Wallet from './components/pages/Wallet/Wallet';
import Markets from './components/pages/Markets/Markets';
import Footer from './components/pages/Footer/Footer';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path= '/' exact component={Home} />
        <Route path= '/news' component={News} />
        <Route path= '/wallet' component={Wallet} />
        <Route path= '/markets' component={Markets} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

