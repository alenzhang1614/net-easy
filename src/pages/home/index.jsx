import React, { Component, Fragment } from 'react';
import SearchHeader from '../../components/search-header/index.jsx';
import { menuList } from '../../config/menu-config/menu.config';
import './index.styl';
import PubSub from 'pubsub-js';
//引入插件
import BScroll from 'better-scroll';
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.css';
import { swiperImg } from '../../config/menu-config/menu.config';

//引入homelist组件
import HomeList from '../../components/homeList/index';
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
		// PubSub.subscribe('toogleShow', (msg, data) => {
		// 	this.setState({
		// 		isShowDropDown: data
		// 	});
		// });
	}
	componentDidMount() {
		setTimeout(() => {
			this.compileMenuListWidth();
			//初始化滑动
			new BScroll('.menuWarp', {
				click: true,
				scrollX: true
			});
			new BScroll('.mainWarp', {
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
		const { isShowDropDown } = this.state;
		return (
			<Fragment>
				<header className="headerContainer">
					<div className="header">
						<h1 className="header-logo">
							<img src={require('./imges/logo.png')} alt="" />
						</h1>
						<div className="search-warp" onTouchEnd={this.gotoSearch}>
							<SearchHeader fromPage="home" />
						</div>
						<button className="header-login">登录</button>
					</div>
					<div className="menu-container">
						<div className="menuAll" style={{ display: isShowDropDown ? 'block' : 'none' }}>
							全部频道
						</div>
						<div className="menuWarp" style={{ display: isShowDropDown ? 'none' : 'block' }}>
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
					</div>
				</header>
				<div className="mainWarp">
					<div className="mainContainer">
						<div className="swiper-container">
							<div className="swiper-wrapper">
								{swiperImg.map(item => {
									return (
										<div className="swiper-slide" key={item.id}>
											<img src={item.src} alt="" />
										</div>
									);
								})}
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
						<HomeList />
					</div>
				</div>
			</Fragment>
		);
	}
}
