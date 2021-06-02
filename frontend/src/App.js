import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState} from 'react';
//screen
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';


import Navbar from './component/Navbar';
import Backdrop from './component/Backdrop';
import SideDrawer from './component/SideDrawer';




function App() {

const [sideToggle, setSideToggle]= useState(false);

  return ( 
  <Router>
    <Navbar click={() => setSideToggle(true)} />
    <SideDrawer show={sideToggle} click ={()=> setSideToggle(false) }/>
    <Backdrop show={sideToggle} click ={()=> setSideToggle(false) } />
     <main className="app">
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
    </main>
  </Router>
  );
}
export default App;
