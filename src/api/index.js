import ajax from './ajax';
//http://m.you.163.com/search?keyword=1&_stat_search=userhand

// export const reqSearch = (keywordPrefix) => ajax('/xhr/search/searchAutoComplete.json', { keywordPrefix })
/* 搜索页面默认显示接口 
http://m.you.163.com/xhr/search/init.json
*/
export const reqSearchInit = () => ajax("/xhr/search/init.json")
//http://m.you.163.com/xhr/search/searchAutoComplete.json'
export const reqSearchAutoComplete = (keywordPrefix) => ajax('/xhr/search/searchAutoComplete.json', { keywordPrefix })

//keyword=12&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=1&needPopWindow=true&_stat_search=userhand
// keyword=%E5%86%85%E8%A3%A4&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=8&needPopWindow=true&_stat_search=hot
export const reqSearch = (keyword, _stat_search) => {

  const data = {
    keyword,
    sortType: 0,
    descSorted: false,
    categoryId: 0,
    matchType: 0,
    floorPrice: -1,
    upperPrice: -1,
    size: 40,
    itemId: 0,
    stillSearch: false,
    searchWordSource: 8,
    needPopWindow: true,
    _stat_search
  }
  return ajax('/xhr/search/search.json', data)
}

// export const reqSearch = (keyword, _stat_search) => ajax('/search', { keyword, _stat_search })
export const reqTopic = () => ajax("/topic/v1/find/getTabs.json")