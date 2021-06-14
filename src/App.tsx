import { memo } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import { AppRoutes } from './const';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import OrderCheckout from './pages/OrderCheckout';
import OrderList from './pages/OrderList';
import Receipt from './pages/Receipt';
import NotFound from './pages/NotFound';

const Home = () => <h1>You are home</h1>;

const App = () => {

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={AppRoutes.SIGN_UP}>Sign in</Link>
        </li>
        <li>
          <Link to={AppRoutes.SIGN_IN}>Sign up</Link>
        </li>
        <li>
          <Link to={AppRoutes.ORDER_CHECKOUT}>Order</Link>
        </li>
        <li>
          <Link to={AppRoutes.ORDER_LIST}>Order list</Link>
        </li>
        <li>
          <Link to={AppRoutes.RECEIPT}>Receipt</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={AppRoutes.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={AppRoutes.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={AppRoutes.ORDER_CHECKOUT}>
          <OrderCheckout />
        </Route>
        <Route path={AppRoutes.ORDER_CHECKOUT}>
          <OrderCheckout />
        </Route>
        <Route path={AppRoutes.ORDER_LIST}>
          <OrderList />
        </Route>
        <Route path={AppRoutes.RECEIPT}>
          <Receipt />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default memo(App);
