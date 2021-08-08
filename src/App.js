import React from 'react';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import ShoppingCartModal from './components/ShoppingCartModal';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

function App(props) {
  return (
    <Router className="App">
      <ShoppingCartModal />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
