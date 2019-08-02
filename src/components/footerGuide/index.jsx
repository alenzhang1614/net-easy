import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.styl';
import PubSub from 'pubsub-js';
class FooterGuide extends Component {
	state = {
		categoryId: ''
	};
	shouldComponentUpdate(nextProps, nextstate) {
		const nextPathName = nextProps.location.pathname;
		const { pathname } = this.props.location;
		return nextPathName !== pathname;
	}
	componentWillMount() {
		// PubSub.subscribe('setCategoryId', (msg, data) => {
		// 	this.setState({
		// 		categoryId: data
		// 	});
		// });
	}
	componentDidMount() {
		PubSub.subscribe('setCategoryId', (msg, data) => {
			this.setState({
				categoryId: data
			});
		});
	}
	render() {
		const { pathname } = this.props.location;
		const { categoryId } = this.state;
		console.log(categoryId);
		return (
			<footer className="footer">
				<Link to="/index" className={`navbar home ${pathname === '/index' ? 'active' : ''} `}>
					<i className="home-img" />
					<span>首页</span>
				</Link>
				<Link to="/item/cateList" className={`navbar item ${pathname === '/item/cateList' ? 'active' : ''}`}>
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
