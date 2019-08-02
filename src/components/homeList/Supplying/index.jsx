import React, { Component, Fragment } from 'react';
import './index.styl';
import Title from '../title/index';
import PropTypes from 'prop-types';
export default class Supplying extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	};
	render() {
		const { data } = this.props;
		return (
			<Fragment>
				<Title left={data.title} right={true} toPage={data.toPage} />
				<ul className="supplying-list">
					{data.data.map((item, index) => {
						return (
							<a href={item.toPage} key={index} className="supplying-item">
								<div className="text">
									<h3 className="text-title">{item.materialName}</h3>
									<p className="text-des">
										{item.des}
										{item.iconText ? <span className="text-icon">{item.iconText}</span> : null}
									</p>
								</div>
								<img src={item.picUrl} alt="" />
							</a>
						);
					})}
				</ul>
			</Fragment>
		);
	}
}
