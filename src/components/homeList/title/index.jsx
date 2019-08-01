import React, { Component } from 'react';
import './index.styl';
import PropTypes from 'prop-types';
export default class Title extends Component {
	static propTypes = {
		left: PropTypes.string.isRequired,
		right: PropTypes.bool.isRequired
	};
	render() {
		const { left, right, toPage } = this.props;
		return (
			<div className="title">
				<span className="title-left">{left}</span>
				{right ? (
					<span className="title-right">
						<a href={toPage}>更多 &gt;</a>
					</span>
				) : null}
			</div>
		);
	}
}
