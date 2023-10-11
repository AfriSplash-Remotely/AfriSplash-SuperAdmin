import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL;
console.log({ uri: axios.defaults.baseURL })
axios.interceptors.request.use((request) => {
  request.headers!['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
  return request;
}, function (err) {

  return Promise.reject(err);
})

axios.interceptors.response.use(function (config) {
  return config;
}, function (err) {
  if (err.response.status === 401) {
    localStorage.removeItem("access_token")

    window.location.replace("/")
  }

  return Promise.reject(err);
})

export default axios
