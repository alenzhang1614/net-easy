import React, { Component } from 'react';
import './index.styl';
import { reqSearch, reqSearchInit, reqSearchAutoComplete } from '../../api/index';
import { getItem, setItem, removeItem } from '../../utils/storage-tools';

export default class Search extends Component {
	state = {
		data: {},
		history: [],
		datalist: [],
		searchName: '',
		directlyList: []
	};

	//监视输入框内容的
	handleChange = async e => {
		e.persist();
		//将数据去空格
		const searchName = e.target.value.trim();
		this.setState({ searchName });
		const result = await reqSearchAutoComplete(searchName);
		if (result.code === '200') {
			this.setState({
				datalist: result.data
			});
		}
	};
	//点击_stat_search=autoComplete，_stat_search=hitory,hot搜索产品 点击搜索产品
	handleClickSearch = (schemeUrl, keyword, title) => {
		return () => {
			console.log(schemeUrl, keyword, title);
			const data = {
				keyword,
				schemeUrl,
				title
			};
			if (title !== 'hot') this.setHistory(data);
			this.gotoPage(schemeUrl, keyword, title)();
		};
	};
	//回车键后搜索产品 _stat_search=userhand
	searchProduct = async e => {
		e.persist();
		if (e.keyCode === 13) {
			const { searchName, data: { defaultKeyword: { keyword, schemeUrl } } } = this.state;
			let data = {};
			//名字存在则搜名字
			//名字不存在则搜索热搜默认项
			if (!searchName) {
				data = {
					keyword,
					schemeUrl,
					title: 'userhand'
				};
			} else {
				data = {
					keyword: searchName,
					schemeUrl: null,
					title: 'userhand'
				};
			}
			this.setHistory(data);
		}
	};
	//数组去重
	removeReapeat = arr => {
		const result = arr.reduce(
			(prev, curr) => {
				if (prev.findIndex(item => item.keyword === curr.keyword) === -1) return [...prev, curr];
				else return prev;
			},
			[arr[0]]
		);
		return result;
	};

	//设置历史记录，
	setHistory = data => {
		const { history } = this.state;
		//找出history里重复的值删除
		// const newHistory = [{ ...data, title: 'history' }, ...history];
		const newHistory = this.removeReapeat([{ ...data, title: 'history' }, ...history]).slice(0, 5);
		setItem(newHistory);
		this.setState({
			history: newHistory,
			searchName: '',
			datalist: []
		});
		//	this.gotoPage(data.schemeUrl, data.keyword, data.title)();
	};

	//点击热搜词汇时存在指定网址时跳转到指定网址，不存在时搜索自己的页面
	gotoPage = (schemeUrl, keyword, title) => {
		return () => {
			schemeUrl ? (window.location.href = schemeUrl) : this.sendSearchRequest(keyword, title);
		};
	};
	//发送搜索数据，请求，请求搜索数据
	sendSearchRequest = async (keyword, title) => {
		//console.log(keyword, title);
		const result = await reqSearch(keyword, title);
		console.log(result);
		this.setState({ directlyList: result.data.directlyList });
	};
	//清空文字和数据
	clearText = () => {
		this.setState({
			datalist: [],
			searchName: ''
		});
	};
	//清空历史记录
	clearHistory = () => {
		'清空历史纪律处罚了';
		removeItem();
		this.setState({ history: [] });
	};
	async componentDidMount() {
		//得到存储的历史记录
		const history = getItem();
		//历史记录是否存在
		if (Array.isArray(history)) {
			this.setState({ history });
		}
		//请求热搜数据
		const result = await reqSearchInit();
		if (result && result.code === '200') {
			this.setState({ data: result.data });
		}
	}
	//创建每一项
	creatSearchItem = (title, data, isClear) => {
		return (
			<div className={`search-item  search-common`}>
				<div className="search-common-title">
					<span className="search-common-text">{title === 'history' ? '历史记录' : '热门搜索'}</span>
					{isClear ? <span className="clearIcon" onClick={this.clearHistory} /> : null}
				</div>
				{data && data.length ? (
					<div className="search-common-content">
						{data.map((item, index) => {
							return (
								<span
									key={index}
									className={`${!isClear && item.highlight ? 'active' : ''} ${!isClear
										? 'hotSearch'
										: 'history'}`}
									onClick={this.handleClickSearch(item.schemeUrl, item.keyword, title)}
								>
									{item.keyword ? item.keyword : item}
								</span>
							);
						})}
					</div>
				) : null}
			</div>
		);
	};
	//_stat_search=autoComplete
	render() {
		const { history, datalist, searchName, data: { defaultKeyword, hotKeywordVOList } } = this.state;
		return (
			<div className="search-wrap">
				<header className="search-header search-item">
					<div className="search-input-warp">
						<input
							type="text"
							placeholder={defaultKeyword ? defaultKeyword.keyword : '请输入搜索内容'}
							className="search-input"
							value={searchName}
							onChange={this.handleChange}
							onKeyUp={this.searchProduct}
						/>
						<i
							className="clearTextBtn"
							style={{ display: searchName ? 'block' : 'none' }}
							onClick={this.clearText}
						/>
						<img src={require('../../assets/images/search.png')} alt="" />
					</div>
					<button className="searchBtn" onClick={this.props.history.goBack}>
						取消
					</button>
				</header>
				{datalist.length ? (
					<ul className="dataList">
						{datalist.map((item, index) => {
							return (
								<li
									className="dataItem"
									value={item}
									key={index}
									onClick={this.handleClickSearch(null, item, 'autoComplete')}
								>
									{item}
								</li>
							);
						})}
					</ul>
				) : null}
				{!searchName && history.length ? this.creatSearchItem('history', history, true) : null}
				{!searchName ? this.creatSearchItem('hot', hotKeywordVOList, false) : null}
			</div>
		);
	}
}
