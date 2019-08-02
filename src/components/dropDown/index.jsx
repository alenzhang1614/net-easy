import React, { Component, Fragment } from 'react';
import { menuList } from '../../config/menu-config/menu.config.js';
import PubSub from 'pubsub-js';
import './index.styl';
export default class DropDown extends Component {
	state = {
		isShowDropDown: false,
		id: '1005001'
	};
	toggleShow = () => {
		const isShowDropDown = !this.state.isShowDropDown;
		this.setState({ isShowDropDown });
		PubSub.publish('toogleShow', isShowDropDown);
	};
	// componentWillMount() {
	// 	PubSub.subscribe('toogleShow', (msg, data) => {
	// 		this.setState({
	// 			isShowDropDown: data
	// 		});
	// 	});
	// }
	// style={{ display: isShowDropDown ? 'block' : 'none' }}
	render() {
		const { isShowDropDown, id } = this.state;
		console.log(isShowDropDown);
		return (
			<Fragment>
				<div className="menu-drop-down-warp">
					<ul className="menu-drop-down">
						{menuList.map(item => {
							return (
								<li className="menu-drop-down-item" key={item.key}>
									<a href="###" className={`menu-drop-down-text ${id === item.key ? 'active' : ''}`}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
					<div className="mask" onClick={this.toggleShow} />
				</div>
			</Fragment>
		);
	}
}
