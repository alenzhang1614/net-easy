import React, { Component } from 'react';
import './index.styl';
import PropTypes from 'prop-types';
export default class Classfify extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	};
	render() {
		const { data } = this.props.data;
		return (
			<div className="classfify">
				<ul className="classfify-list">
					{data.map((item, index) => {
						return (
							<li className="classfify-item" key={index}>
								<a href={item.toPage}>
									<img src={item.picUrl} alt="" />
									<span>{item.name}</span>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
