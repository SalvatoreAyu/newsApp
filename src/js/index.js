import './import.js'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { NEWS_TYPE } from '../data/index.js'
import service from '../services/index'
import NewsList from '../components/Newslist'
import PageLoading from '../components/PageLoading/index'
import { checkToBottom, checkImgShow } from '../libs/util'
import MoreLoading from '../components/MoreLoading'
import noMoney from '../components/noMoney'
;((doc) => {
  const oApp = doc.getElementById('app')
  let oListWrapper = null
  let t = null
  const config = {
    type: 'toutiao',
    count: 10,
    pageNum: 0,
    isLoading: false,
    flag: true,
  }

  const init = async () => {
    render()
    await setNewsList()
    bindEvent()
  }

  const newsData = {}

  function render() {
    const headerTpl = Header.getTpl({
      url: '/collections.html',
      title: '今日新闻',
      showLeftIcon: false,
      showRightIcon: true,
    })
    const navBarTpl = NavBar.getTpl(NEWS_TYPE)
    const listWrapperTpl = NewsList.getWrapperTpl(82)
    oApp.innerHTML += headerTpl + navBarTpl + listWrapperTpl
    oListWrapper = oApp.querySelector('.news-list')
  }

  function bindEvent() {
    NavBar.bindEvent(setType)
    NewsList.bindEvent(oListWrapper, setCurrentNews)
    window.addEventListener('scroll', checkToBottom.bind(null, actionToBottom))
    window.addEventListener('scroll', imgShow)
  }

  function imgShow() {
    const oImg = document.querySelectorAll('.lazy-load')
    ;[...oImg].map((img) => {
      if (checkImgShow() > img.offsetTop) {
        if (!img.src) {
          img.src = img.getAttribute('data-src')
          img.style.opacity = 1
          img.className = 'news-thumb'
        }
      }
    })
  }
  function setCurrentNews(options) {
    const { index, pageNum } = options
    // console.log(index, pageNum);
    // console.log(localStorage);
    const currentNews = newsData[config.type][pageNum][index]
    localStorage.setItem('currentNews', JSON.stringify(currentNews))
  }
  function renderList(data) {
    const { pageNum } = config
    const newsListTpl = NewsList.getTpl({
      data,
      pageNum,
    })
    MoreLoading.remove(oListWrapper)
    oListWrapper.innerHTML += newsListTpl
    config.isLoading = false
    // NewsList.imgShow()
  }
  function actionToBottom() {
    // console.log('bottom')
    if (!config.flag) {
      // console.log('节流触发')
      return
    } else {
      config.flag = false
      // console.log('页面请求')
      if (!config.isLoading) {
        config.pageNum++
        if (config.pageNum >= newsData[config.type].length) {
          MoreLoading.add(oListWrapper, false)
        } else {
          config.isLoading = true
          MoreLoading.add(oListWrapper, config.isLoading)
          setTimeout(() => {
            setNewsList()
            config.isLoading = false
            config.flag = true
          }, 300)
        }
      }
    }
  }
  function setType(type) {
    config.type = type
    config.pageNum = 0
    config.flag = true
    config.isLoading = false
    oListWrapper.innerHTML = ''
    setNewsList()
  }

  async function setNewsList() {
    const { type, count, pageNum } = config
    if (newsData[type]) {
      renderList(newsData[type][pageNum])
      console.log(newsData)
      return
    }
    oListWrapper.innerHTML += PageLoading.tpl()
    newsData[type] = await service.getNewsList(type, count)
    if (newsData[type] == 'noMoney') {
      oListWrapper.innerHTML = ''
      oListWrapper.innerHTML += noMoney.tpl()
    } else {
      setTimeout(() => {
        oListWrapper.innerHTML = ''
        renderList(newsData[type][pageNum])
        console.log('render：', newsData)
        imgShow()
      }, 200)
    }
  }
  init()
})(document, window)
