import { $ } from "@/api";
import { VipRes } from "@/common/model";
import { TvList } from "./main.model";
const list$ = id =>
  $({
    method: "post",
    url:
      "/tx/detail_video_list?vappid=65939066&vsecret=07c58e0c93150c4254a2a24131574b94cab6142ba4210efa&vversion_name=5.2.0.1234&vplatform=5",
    data: {
      dataKey: `req_type=2&lid=&cid=${id}&vid=&ui=0`,
      pageContext: ""
    }
  }).then(res => new TvList(res));

const vip$ = url =>{
  const data = {
    type: "qq",
    time: 1545728876,
    key: "b4fac791815a734e6b7a62eec20e3550",
    url,
    referer: `http://yun.odflv.com/?url=${url}`
  }
  let formData = new FormData()
  Object.keys(data).forEach(key=>{
    formData.append(key,data[key])
  })
  return $({
    method: "post",
    url: "/vip",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }).then(res => new VipRes(res))};
export { list$, vip$ };
