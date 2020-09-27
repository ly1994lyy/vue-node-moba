import axios from 'axios'
import NProgress from 'nprogress'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 60000
})

http.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

http.interceptors.response.use(res => {
  NProgress.done()
  return res
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

export default http
