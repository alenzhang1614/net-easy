import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './index.styl';
class FooterGuide extends Component {
	shouldComponentUpdate(nextProps, nextstate) {
		const nextPathName = nextProps.location.pathname;
		const { pathname } = this.props.location;

		return nextPathName !== pathname;
	}
	render() {
		const { pathname } = this.props.location;
		return (
			<footer className="footer">
				<NavLink to="/home" className={`navbar home ${pathname === '/home' ? 'active' : null}`}>
					<i className="home-img" />
					<span>首页</span>
				</NavLink>
				<NavLink to="/item" className={`navbar item ${pathname === '/item' ? 'active' : null}`}>
					<i className="item-img" />
					<span>分类</span>
				</NavLink>
				<NavLink to="/topic" className={`navbar topic ${pathname === '/topic' ? 'active' : null}`}>
					<i className="topic-img" />
					<span>识物</span>
				</NavLink>
				<NavLink to="/cart" className={`navbar cart ${pathname === '/cart' ? 'active' : null}`}>
					<i className="cart-img" />
					<span>购物车</span>
				</NavLink>
				<NavLink to="/profile" className={`navbar profile ${pathname === '/profile' ? 'active' : null}`}>
					<i className="profile-img" />
					<span>个人中心</span>
				</NavLink>
			</footer>
		);
	}
}
export default withRouter(FooterGuide);
