import React, { Component, Fragment } from 'react';
import './index.styl';
import PropTypes from 'prop-types';
import Title from '../title/index';
export default class HotSell extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	};
	render() {
		const { data } = this.props;
		return (
			<div className="hotSell">
				<Title left={data.title} right={false} />
				<div className="hotSellList">
					{data.data.map((item, index) => {
						return (
							<a
								href={item.toPage}
								className={`classfify-item ${index === 0 || index === 1 ? 'big' : ''}`}
								key={index}
							>
								<span>{item.title}</span>
								<div className="imgWrap">
									<img src={item.picUrl} alt="" />
								</div>
							</a>
						);
					})}
				</div>
			</div>
		);
	}
}
