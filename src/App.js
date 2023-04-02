import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    // using router dom for changing the components
    <Router>
      {/* using the header  */}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />

      </Switch>
      {/* the footer */}
      <Footer />
    </Router>
  );
}

export default App;
