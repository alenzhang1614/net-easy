import axios from 'axios'
export default function ajax (url, data = {}, method = "get") {
  method = method.toLocaleLowerCase();
  let reqParams = data
  if (method === 'get') reqParams = { params: data }

  return axios[method](url, reqParams)
    .then((res) => {
      const { data } = res
      // console.log(res.data)
      return data
    })
    .catch((error) => {
      console.log("网络异常", error)
    })
}