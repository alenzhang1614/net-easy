import React, { Component, Fragment } from 'react';
import FooterGuide from './components/footerGuide';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import Item from './pages/item/index.jsx';
import Cart from './pages/cart/index.jsx';
import Profile from './pages/profile/inedx.jsx';
import Topic from './pages/topic/index.jsx';
export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/item" component={Item} />
					<Route path="/cart" component={Cart} />
					<Route path="/topic" component={Topic} />
					<Route path="/profile" component={Profile} />
					<Redirect to="/home" />
				</Switch>
				<FooterGuide />
			</Fragment>
		);
	}
}
