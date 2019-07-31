import React, { Component, Fragment } from 'react';
import SearchHeader from '../../components/search-header/index.jsx';
import { menuList } from '../../config/menu-config/menu.config';
import './index.styl';
import PubSub from 'pubsub-js';
//引入插件
import BScroll from 'better-scroll';
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.css';
import { swiperImg, category } from '../../config/menu-config/menu.config';
import Split from '../../components/split/index';
export default class Home extends Component {
	state = {
		isShowDropDown: false,
		id: '1005001'
	};
	menuRef = React.createRef();
	//动态计算menu宽度
	compileMenuListWidth = () => {
		const menuList = this.menuRef.current;
		const menuItems = menuList.children;
		const menuListWidth = [].slice.call(menuItems).reduce((prev, curr) => {
			console.log(curr.offsetWidth);
			prev += curr.offsetWidth;
			return prev;
		}, 0);
		menuList.style.width = menuListWidth + 'px';
	};
	//切换显示不显示
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
	componentDidMount() {
		setTimeout(() => {
			this.compileMenuListWidth();
			//初始化滑动
			new BScroll('.menuWarp', {
				click: true,
				scrollX: true
			});

			//初始化轮播图
			new Swiper('.swiper-container', {
				loop: true,
				autoplay: true,
				pagination: {
					el: '.swiper-pagination'
					// type: 'custom',
				}
			});
		}, 0);
	}

	render() {
		const { isShowDropDown, id } = this.state;
		return (
			<Fragment>
				<SearchHeader />
				<div className="menu-container">
					<div className="menuWarp">
						<ul className="menuList" ref={this.menuRef}>
							{menuList.map(item => {
								return (
									<li className="menuItem" key={item.key}>
										<a href="###">{item.title}</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="arrow">
						<img
							src={require('./imges/arrow.png')}
							alt=""
							onClick={this.toggleShow}
							style={{ transform: isShowDropDown ? 'rotate(180deg)' : 'rotate(0deg)' }}
						/>
					</div>
					<div className="menu-drop-down-warp" style={{ display: isShowDropDown ? 'block' : 'none' }}>
						<h2 className="menu-drop-down-title">全部频道</h2>
						<ul className="menu-drop-down">
							{menuList.map(item => {
								return (
									<li className="menu-drop-down-item" key={item.key}>
										<a
											href="###"
											className={`menu-drop-down-text ${id === item.key ? 'active' : ''}`}
										>
											{item.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{swiperImg.map(item => {
							return (
								<div className="swiper-slide" key={item.id}>
									<img src={item.src} alt="" />
								</div>
							);
						})}
						{/* <div className="swiper-slide">
							<img src={require('./imges/swiper/swiper-01.jpg')} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={require('./imges/swiper/swiper-02.jpg')} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={require('./imges/swiper/swiper-03.jpg')} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={require('./imges/swiper/swiper-04.jpg')} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={require('./imges/swiper/swiper-05.jpg')} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={require('./imges/swiper/swiper-06.jpg')} alt="" />
						</div>
						<div className="swiper-slide">
							<img src={require('./imges/swiper/swiper-07.jpg')} alt="" />
						</div>
				 */}
					</div>
					<div className="swiper-pagination" />
				</div>
				<ul className="servicePolicyList">
					<li className="servicePolicyListItem">
						<i className="icon" />
						<span className="text">网易自营品牌</span>
					</li>
					<li className="servicePolicyListItem">
						<i className="icon" />
						<span className="text">30天无忧退货</span>
					</li>
					<li className="servicePolicyListItem">
						<i className="icon" />
						<span className="text">48小时快速退款</span>
					</li>
				</ul>
				<div className="category-warp">
					<ul className="category-list">
						{category.map((item, index) => {
							return (
								<li className="category-item" key={index}>
									<a href={item.toPage}>
										<img src={item.picUrl} alt="" />
										<span>{item.name}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<Split />
				<div className="freshMan-container">
					<h2 className="freshMan-title">-新人专享礼-</h2>
					<div className="freshMan-content">
						<a href="http://m.you.163.com/gift/newWapUserGift">
							<div className="freshman-left">
								<h3 className="freshmanContent-title">新人专享礼包</h3>
								<img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="" />
							</div>
						</a>

						<div className="freshman-right">
							<a href="https://m.you.163.com/saleCenter/index">
								<div className="freshman-right-item freshman-off-price">
									<h3 className="freshmanContent-title">福利社</h3>
									<span className="freshmanContent-subtitle">今日特价</span>
									<img
										src="http://yanxuan.nosdn.127.net/ffaaa0b99d13210e8adc7d81176a53f8.png?imageView&thumbnail=200x200&quality=75"
										alt=""
									/>
									<section className="price">
										<span className="newPrice">15.5</span>
										<span className="oldPrice">24.5</span>
									</section>
								</div>
							</a>
							<a href="https://m.you.163.com/pin/item/list">
								<div className="freshman-right-item freshman-group">
									<h3 className="freshmanContent-title">新人拼团</h3>
									<span className="freshmanContent-subtitle">1元享包邮</span>
									<img
										src="http://yanxuan.nosdn.127.net/0542500ca5edef888ad0d0461392853b.png?imageView&thumbnail=200x200&quality=75"
										alt=""
									/>
									<section className="price">
										<span className="newPrice">￥15.5</span>
										<span className="oldPrice">$24.5</span>
									</section>
								</div>
							</a>
						</div>
					</div>
				</div>
				<Split />
			</Fragment>
		);
	}
}
