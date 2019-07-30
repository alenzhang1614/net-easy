import React, { Component } from 'react';
import './index.styl';
export default class SearchHeader extends Component {
	render() {
		return (
			<header className="header">
				<h1 className="header-logo">
					<img src={require('./images/logo.png')} alt="" />
				</h1>
				<div className="header-search">
					<i className="header-search-icon" />
					<span className="header-search-palceholder">搜索商品，共25409款好物</span>
				</div>
				<button className="header-login">登录</button>
			</header>
		);
	}
}
