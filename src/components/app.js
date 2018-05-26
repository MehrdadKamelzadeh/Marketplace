import React, { Component } from 'react';
import ItemsList from '../containers/items_list';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>);
};
export default class App extends Component {
  render() {
    return (
      // <ItemsList />
      <BrowserRouter>
        <div>
          <ul className="nav navbar nav-inline ">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"> <Link to="/main">Main</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/main" component={ItemsList} />
        </div>
      </BrowserRouter>
    );
  }
}
