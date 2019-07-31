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
	componentWillMount() {
		PubSub.subscribe('toogleShow', (msg, data) => {
			this.setState({
				isShowDropDown: data
			});
		});
	}
	render() {
		const { isShowDropDown } = this.state;
		return (
			<Fragment>
				<div
					className="mask"
					style={{ display: `${isShowDropDown ? 'block' : 'none'}` }}
					onClick={this.toggleShow}
				/>
			</Fragment>
		);
	}
}
