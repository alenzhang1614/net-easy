import React, { Component, Fragment } from 'react';
import { currentCategory, categoryGroupList, categoryL1List } from '../../config/catelist-config/data0.json';
import SearchHeader from '../../components/search-header/index';
import './index.styl';
import BScroll from 'better-scroll';
import PubSub from 'pubsub-js';
export default class Item extends Component {
	state = {
		currentCategory,
		categoryGroupList,
		categoryL1List,
		selectIndex: 0,
		categoryId: 109217021
	};
	//点击导航的变化
	handleClickNav = (index, id) => {
		return async () => {
			console.log(id);

			//this.props.location.pathname = this.location.pathname + '?cateoryId=' + id;
			PubSub.publish('setCategoryId', id);
			const {
				currentCategory,
				categoryGroupList
			} = await import(`../../config/catelist-config/data${index}.json`);
			// const result = await import(`../../config/catelist-config/data${index}.json`);
			this.setState({
				currentCategory,
				categoryGroupList,
				selectIndex: index
			});
			// this.props.match.prmams
		};
	};
	componentDidMount() {
		new BScroll('.catelist-con-container', {
			click: true
		});
		new BScroll('.catelist-nav-container', {
			click: true
		});
		// setTimeout(() => {

		// });
	}
	//循环遍历生成界面

	render() {
		const { currentCategory: { bannerList }, categoryGroupList, categoryL1List, selectIndex } = this.state;
		return (
			<div className="catelist-container">
				<div className="catelist-warp">
					<header className="cateList-header">
						<SearchHeader fromPage="catelist" />
					</header>
				</div>
				<div className="catalist-main">
					<nav className="catelist-nav-container">
						<ul className="catelist-nav-list">
							{categoryL1List.map((item, index) => {
								return (
									<li
										className={`catelist-nav-item ${selectIndex === index ? 'active' : ''}`}
										key={item.id}
										onClick={this.handleClickNav(index, item.id)}
									>
										<p>{item.name}</p>
									</li>
								);
							})}
						</ul>
					</nav>
					<div className="catelist-con-container">
						<aside className="catelist-con-warp">
							<div className="swiper-container">
								<div className="swiper-wrapper">
									{bannerList.map((item, index) => {
										return (
											<a href={item.targetUrl} className="swiper-slide" key={index}>
												<img src={item.picUrl} alt="" />
											</a>
										);
									})}
								</div>
							</div>
							<ul className="catelist-outer-list">
								{categoryGroupList.map(item => {
									return (
										<li className="catelist-outer-item" key={item.id}>
											{item.id ? <div className="catelist-outer-title">{item.name}</div> : null}
											<ul className="catelist-inner-list">
												{item.categoryList.map(innerItem => {
													return (
														<li className="catelist-inner-item" key={innerItem.id}>
															<img src={innerItem.wapBannerUrl} alt="" />
															<p> {innerItem.name}</p>
														</li>
													);
												})}
											</ul>
										</li>
									);
								})}
							</ul>
						</aside>
					</div>
				</div>
			</div>
		);
	}
}
