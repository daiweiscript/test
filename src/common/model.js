class TxRes {
  data = null
  constructor(data){
    this.data = JSON.parse(data.substr(5)).data
  }
}

class VipRes {
  url=''
  constructor(data){
    console.log(data)
    this.url = data.url
  }
}
export {TxRes,VipRes}