import React, { Component, Fragment } from 'react';
import FooterGuide from './components/footerGuide';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import Item from './pages/item/index.jsx';
import Cart from './pages/cart/index.jsx';
import Profile from './pages/profile/inedx.jsx';
import Topic from './pages/topic/index.jsx';
//引入菜单下拉列表
import DropDown from './components/dropDown/index.jsx';
//引入搜索组件
import Search from './pages/search/index';
import PubSub from 'pubsub-js';
class App extends Component {
	state = {
		isShowDropDown: false,
		categoryId: ''
	};
	componentWillMount() {
		PubSub.subscribe('toogleShow', (msg, data) => {
			this.setState({
				isShowDropDown: data
			});
		});

		PubSub.subscribe('setCategoryId', (msg, data) => {
			this.setState({
				categoryId: data
			});
		});
	}
	componentDidMount() {}

	// setCategoryId = categoryId => {
	// 	this.setState({
	// 		categoryId
	// 	});
	// };
	render() {
		//	console.log('加载app');
		const { isShowDropDown, categoryId } = this.state;
		const { pathname } = this.props.location;

		return (
			<Fragment>
				<Switch>
					<Route path="/index" component={Home} />
					<Route path="/item/cateList" component={Item} />
					<Route path="/cart" component={Cart} />
					<Route path="/topic" component={Topic} />
					<Route path="/profile" component={Profile} />
					<Route path="/search" component={Search} />
					<Redirect to="/index" />
				</Switch>
				{pathname === '/search' ? null : <FooterGuide />}
				{isShowDropDown ? <DropDown /> : null}
			</Fragment>
		);
	}
}
export default withRouter(App);
