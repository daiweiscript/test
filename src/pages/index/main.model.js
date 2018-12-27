import { TxRes } from "@/common/model";
class indexRes {
  constructor(data) {
    this.list = new TxRes(data).data.modList[1].list
    .map(item=>new TxItem(item.cms_data))
  }
}
class TxItem {
  id = "";
  title = "";
  poster = "";
  type = 'tx'
  constructor(data) {
    this.id = data.item_id;
    this.title = data.title;
    this.poster = data.cms_pic_ori;
  }
}
export { indexRes };
