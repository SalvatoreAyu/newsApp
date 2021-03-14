import './import.js';
import Collections from '../components/Collections/index';
import NoData from '../components/NoData';
import NewsList from '../components/Newslist/index.js';
((doc) => {
  const oApp = doc.getElementById('app');
  const followList = JSON.parse(localStorage.getItem('followList') || '[]');
  // console.log(currentNews);
  let oList = null;
  // console.log(followList);
  const init = function () {
    render();
    bindEvent();
  };
  function render() {
    const collectionsTpl = Collections.getTpl({
      url: '/',
      title: '我的收藏',
      showLeftIcon: true,
      showRightIcon: false,
    });
    if (followList.length) {
      console.log(followList);
      const listWrapperTpl = NewsList.getWrapperTpl(44);
      oApp.innerHTML += collectionsTpl + listWrapperTpl;
      oList = oApp.querySelector('.news-list');
      renderList(followList);
    } else {
      oApp.innerHTML += collectionsTpl + NoData.tpl();
    }
  }

  function renderList(data) {
    const newsList = NewsList.getTpl({ data, pageNum: 1 });
    oList.innerHTML += newsList;
    NewsList.imgShow();
  }
  function bindEvent() {
    // console.log(oList);
    setTimeout(() => {}, 0);
    followList.length && NewsList.bindEvent(oList, setCurrentNews);
  }
  function setCurrentNews(options) {
    console.log(111);
    console.log(options);
    const currentNews = followList[options.index];
    // console.log(options);
    localStorage.setItem('currentNews', JSON.stringify(currentNews));
  }
  init();
})(document);
