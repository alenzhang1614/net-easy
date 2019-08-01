import React, { Component } from 'react';
import './index.styl';
import PropTypes from 'prop-types';
export default class FreshMan extends Component {
	// static propTypes = {
	// 	data: PropTypes.object.isRequired
	// };
	render() {
		// const { data } = this.props.data;
		// console.log(data);
		return (
			<div className="freshMan-warp">
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
		);
	}
}
