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
		console.log(this.props);
		const { pathname } = this.props.location;
		return (
			<footer className="footer">
				{/* ${pathname === '/home' ? 'active' : ''}` */}
				<Link to="/home" className={`navbar home `}>
					<i className="home-img" />
					<span>首页</span>
				</Link>
				{/* ${pathname === '/item' ? 'active' : ''} */}
				<Link to="/item" className={`navbar item `}>
					<i className="item-img" />
					<span>分类</span>
				</Link>
				{/* ${pathname === '/topic' ? 'active' : ''}` */}
				<Link to="/topic" className={`navbar topic`}>
					<i className="topic-img" />
					<span>识物</span>
				</Link>
				{/* ${pathname === '/cart' ? 'active' : ''} */}
				<Link to="/cart" className={`navbar cart `}>
					<i className="cart-img" />
					<span>购物车</span>
				</Link>
				{/* ${pathname === '/profile' ? 'active' : ''} */}
				<Link to="/profile" className={`navbar profile `}>
					<i className="profile-img" />
					<span>个人中心</span>
				</Link>
			</footer>
		);
	}
}
export default withRouter(FooterGuide);
