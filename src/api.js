import Axios from 'axios'
const $ = (...option)=>Axios(...option)
  .then(res=>res.data)
export {$}  