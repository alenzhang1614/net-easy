import React, { Component, Fragment } from 'react';
import FooterGuide from './components/footerGuide';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import Item from './pages/item/index.jsx';
import Cart from './pages/cart/index.jsx';
import Profile from './pages/profile/inedx.jsx';
import Topic from './pages/topic/index.jsx';
//引入菜单下拉列表
import DropDown from './components/dropDown/index.jsx';

//import { Button } from 'antd-mobile';
//import 'antd-mobile/lib/date-picker/style/css';
/* 		"start": "node scripts/start.js --open",
		"build": "node scripts/build.js",
		"test": "node scripts/test.js" */
export default class App extends Component {
	state = {
		isShowDropDown: false
	};
	toggleShow = () => {
		const { isShowDropDown } = this.state;
		this.setState({
			isShowDropDown: !isShowDropDown
		});
	};
	componentWillMount() {
		//const {isShowDropDown} = this.state
	}
	componentDidMount() {}
	render() {
		return (
			<div className="warp">
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/item" component={Item} />
					<Route path="/cart" component={Cart} />
					<Route path="/topic" component={Topic} />
					<Route path="/profile" component={Profile} />
					<Redirect to="/" />
				</Switch>
				<FooterGuide />
				<DropDown />
			</div>
		);
	}
}
