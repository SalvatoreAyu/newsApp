import tpl0 from './tpl/tpl0.tpl'
import tpl1 from './tpl/tpl1.tpl'
import tpl2 from './tpl/tpl2.tpl'
import tpl3 from './tpl/tpl3.tpl'
import wrapperTpl from './tpl/wrapper.tpl'
import { tplReplace, getParentNode } from '../../libs/util'
import './index.scss'
export default {
  name: 'NewsList',
  getWrapperTpl(top) {
    return tplReplace(wrapperTpl, {
      top,
    })
  },
  getTpl(options) {
    const { data, pageNum } = options
    let list = ''
    let tpl = ''
    data.map((item, index) => {
      if (!item.thumbnail_pic_s) {
        tpl = tpl0
      } else if (item.thumbnail_pic_s && !item.thumbnail_pic_s02) {
        tpl = tpl1
      } else if (item.thumbnail_pic_s02 && !item.thumbnail_pic_s03) {
        tpl = tpl2
      } else {
        tpl = tpl3
      }
      list += tplReplace(tpl, {
        pageNum,
        index,
        uniquekey: item.uniquekey,
        url: item.url,
        author: item.author_name,
        date: item.date,
        thumbnail_pic_s: item.thumbnail_pic_s,
        thumbnail_pic_s02: item.thumbnail_pic_s02,
        thumbnail_pic_s03: item.thumbnail_pic_s03,
        title: item.title,
        category: item.category,
      })
    })
    return list
  },
  bindEvent(oList, setCurrentNews) {
    oList.addEventListener('click', this._goDetail.bind(this, setCurrentNews))
  },
  _goDetail(setCurrentNews) {
    const item = getParentNode(arguments[1].target)
    console.log('goDetail')
    const options = {
      index: item.dataset.index,
      pageNum: item.dataset.page,
    }
    console.log(options)
    setCurrentNews(options)
    window.location.href = `detail.html?path=${location.pathname}`
  },
}
