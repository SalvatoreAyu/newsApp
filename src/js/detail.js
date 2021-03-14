import './import.js';
import Detail from '../components/Detail/index';
import { getUrlValue } from '../libs/util.js';
import NewsFrame from '../components/Iframe';
import Follow from '../components/Follow';
((doc) => {
  const oApp = doc.getElementById('app');
  const currentNews = JSON.parse(localStorage.getItem('currentNews'));
  const followList = JSON.parse(localStorage.getItem('followList') || '[]');
  const init = function () {
    render();
    bindEvent();
  };
  function render() {
    const detailTql = Detail.getTql({
      url: getUrlValue('path'),
      title: '新闻详情',
      showLeftIcon: true,
      showRightIcon: false,
    });
    // console.log('ssss' + getUrlValue('path'));
    // console.log(currentNews.url);
    const newsFrameTpl = NewsFrame.tpl(currentNews.url);
    const followTpl = createFollowTpl();
    oApp.innerHTML += detailTql + newsFrameTpl + followTpl;
  }
  function bindEvent() {
    Follow.bindEvent(doFollow);
  }
  function createFollowTpl() {
    // console.log(followList);
    const isExist = followList.find((item) => {
      // console.log(item.uniquekey + ' xxxx ' + currentNews.uniquekey);
      return item.uniquekey === currentNews.uniquekey;
    });
    return isExist ? Follow.follow() : Follow.oFollow();
  }
  function doFollow(status) {
    let followList = JSON.parse(localStorage.getItem('followList') || '[]');
    if (status) {
      followList.push(currentNews);
    } else {
      followList = followList.filter((item) => item.uniquekey !== currentNews.uniquekey);
    }
    localStorage.setItem('followList', JSON.stringify(followList));
  }
  init();
})(document);
