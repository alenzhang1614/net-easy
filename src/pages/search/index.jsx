import React, { Component } from 'react';
import './index.styl';
import { search } from '../../config/menu-config/menu.config';
export default class Search extends Component {
	state = {
		history: [],
		seachkey: [],
		datalist: [],
		searchName: ''
	};
	creatSearchItem = (title, data, isClear) => {
		return (
			<div className="search-history search-item">
				<div className="history-title">
					<span className="history-text">{title}</span>
					{isClear ? <span className="clearIcon" /> : null}
				</div>
				{data.length ? (
					<div className="history-content">
						{data.map((item, index) => {
							return (
								<span key={index} className={`${!isClear && index === 0 ? 'active' : ''}`}>
									{item}
								</span>
							);
						})}
					</div>
				) : null}
			</div>
		);
	};
	//过滤数据并提示框
	findData = searchName => {
		const dataReg = new RegExp('[' + searchName + ']', 'g');
		this.datalist = this.seachkey.filter(data => {
			return dataReg.test(data.title);
		});
	};
	//监视输入框内容的
	handleChange = e => {
		e.persist();
		const searchName = e.target.value;
		this.setState({
			searchName
		});
		this.findData(searchName);
	};
	render() {
		const { history, datalist } = this.state;
		return (
			<div className="search-wrap">
				<header className="search-header search-item">
					<div className="search-input-warp">
						<input
							type="text"
							placeholder="点击开始搜索"
							className="search-input"
							list="search"
							onChange={this.handleChange}
							onKeyDown={this.searchProduct}
						/>
						<datalist id="search">
							{datalist.length &&
								datalist.map((item, index) => {
									return <option value={item}>{item}</option>;
								})}
						</datalist>
						<img src={require('../../assets/images/search.png')} alt="" />
					</div>
					<button className="searchBtn">取消</button>
				</header>
				{history.length ? this.creatSearchItem('历史记录', history, true) : null}
				{this.creatSearchItem('热门搜索', search, false)}
			</div>
		);
	}
}
