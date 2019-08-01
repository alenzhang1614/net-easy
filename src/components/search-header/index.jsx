import React, { Component } from 'react';
import './index.styl';
export default class SearchHeader extends Component {
	render() {
		console.log(this.props.location);
		return (
			<div className="header-search">
				<i className="header-search-icon" />
				<span className="header-search-palceholder">搜索商品，共25409款好物</span>
			</div>
		);
	}
}
