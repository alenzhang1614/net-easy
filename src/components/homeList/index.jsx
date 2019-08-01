import React, { Component } from 'react';
import { homeList } from '../../config/home-list-config/homelist.config';
import Classfify from './classfisy/index';
import FreshMan from './frenshMan/index';
import Supplying from './Supplying/index';
import HotSell from './hotSell/index';
import './index.styl';
export default class HomeList extends Component {
	renderHomeList = item => {
		const { enName } = item;
		if (enName === 'classfify') return <Classfify data={item} />;
		else if (enName === 'freshMan') return <FreshMan />;
		else if (enName === 'supplying') return <Supplying data={item} />;
		else if (enName === 'hotSell') return <HotSell data={item} />;
	};
	render() {
		return (
			<ul className="homeList">
				{homeList.map((item, index) => {
					return (
						<li key={index} className={`homeItem ${item.enName + 'Wrap'}`}>
							{this.renderHomeList(item)}
						</li>
					);
				})}
			</ul>
		);
	}
}
