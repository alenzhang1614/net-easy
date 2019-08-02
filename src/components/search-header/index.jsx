import React, { Component } from 'react';
import './index.styl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default class SearchHeader extends Component {
	static propeTypes = {
		fromPage: PropTypes.string.isRequired
	};
	render() {
		const { fromPage } = this.props;
		console.log(fromPage);
		return (
			<Link to={`/search?fromPage=${fromPage}`}>
				<div className="header-search">
					<i className="header-search-icon" />
					<span className="header-search-palceholder">搜索商品，共25409款好物</span>
				</div>
			</Link>
		);
	}
}
