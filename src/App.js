import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import {Switch, Route} from 'react-router-dom';
import Product from './Product';
import Ecommerce from './Ecommerce';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Ecommerce} />
          <Route path="/cart" component={Cart}/>
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
