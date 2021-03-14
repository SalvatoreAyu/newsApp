import './index.scss';
import itemTpl from './tpl/item.tpl';
import indexTpl from './tpl/index.tpl';
import { tplReplace, scrollToTop } from '../../libs/util';
export default {
  name: 'NavBar',
  _curIndex: 0,
  getTpl(data) {
    let itemList = '';
    data.map(({ title, type }, index) => {
      itemList += tplReplace(itemTpl, {
        isCurrent: index ? '' : 'current',
        title,
        type,
      });
    });
    console.log(itemList);
    return tplReplace(indexTpl, {
      itemList,
      wrapperW: 0.6 * data.length,
    });
  },
  bindEvent(setType) {
    const oNavBar = document.querySelector('.nav');
    const oNavItems = document.querySelectorAll('.item');
    oNavBar.addEventListener('click', this._setNav.bind(this, oNavItems, setType)); //这里使用了一个回调函数
  },
  _setNav(items, setType) {
    const tar = arguments[2].target;
    const className = tar.className.trim();
    if (className == 'item') {
      //className有item current 和item 之分
      const type = tar.dataset.type;
      setType(type);
      scrollToTop();
      items[this._curIndex].className = 'item';
      this._curIndex = [].indexOf.call(items, tar);
      items[this._curIndex].className += ' current';
    }
  },
};
