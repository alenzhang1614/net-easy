import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
				<Link to="/" className={`navbar home ${pathname === '/' ? 'active' : ''} `}>
					<i className="home-img" />
					<span>首页</span>
				</Link>

				<Link to="/item" className={`navbar item ${pathname === '/item' ? 'active' : ''}`}>
					<i className="item-img" />
					<span>分类</span>
				</Link>

				<Link to="/topic" className={`navbar topic ${pathname === '/topic' ? 'active' : ''}`}>
					<i className="topic-img" />
					<span>识物</span>
				</Link>

				<Link to="/cart" className={`navbar cart ${pathname === '/cart' ? 'active' : ''}`}>
					<i className="cart-img" />
					<span>购物车</span>
				</Link>

				<Link to="/profile" className={`navbar profile ${pathname === '/profile' ? 'active' : ''}`}>
					<i className="profile-img" />
					<span>个人中心</span>
				</Link>
			</footer>
		);
	}
}
export default withRouter(FooterGuide);
