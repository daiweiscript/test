import {TxRes} from '@/common/model'
class TvList{
  constructor(data){
    const {videoList=[]}=new TxRes(data).data
    this.list = videoList
    .filter(video=>video.title.indexOf('预告')===-1)
    .map(video=>new VideoDetail(video))
  }
}

class VideoDetail{
  vid=''
  title=''
  url=''
  constructor(data){
    this.vid = data.vid
    this.title = data.title
    this.url = data.webPlayUrl
  }
}
export {TvList}