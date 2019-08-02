
const HISTORY_KEY = 'HISTORY_KEY';
const HISTORY_TIME = 'HISTORY_TIME';
// 过期时间
const EXPIRES_IN = 1000 * 3600 * 24 * 3;
export const setItem = function (data) {
  // 储存历史记录第一次创建历史纪律的时间
  localStorage.setItem(HISTORY_TIME, Date.now());
  // 储存历史记录
  localStorage.setItem(HISTORY_KEY, JSON.stringify(data));
};
export const getItem = function () {
  const startTime = localStorage.getItem(HISTORY_TIME);
  if (Date.now() - startTime > EXPIRES_IN) {
    // 过期了~ 清除用户信息
    removeItem();
    return [];
  }
  // 没有过期
  return JSON.parse(localStorage.getItem(HISTORY_KEY))
}
export const removeItem = function () {
  localStorage.removeItem(HISTORY_KEY);
  localStorage.removeItem(HISTORY_TIME);
};
