import axios from 'axios'
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: "AIzaSyAWNsyer_wWDZUx9IEaGFjcZhnQVIVImro",
   },
})

export default request