import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/util';
export default {
  name: 'follow',
  follow() {
    console.log('xx');
    return tplReplace(tpl, {
      star: 'star',
    });
  },
  oFollow() {
    console.log('cc');
    return tplReplace(tpl, {
      star: 'star-o',
    });
  },
  bindEvent(doFollow) {
    const oFollow = document.querySelector('.follow');
    oFollow.addEventListener('click', this._setFollow.bind(this, oFollow, doFollow));
  },

  _setFollow(oFollow, doFollow) {
    const className = oFollow.className;
    const text = document.querySelector('.followText');
    const iframe = document.querySelector('iframe');
    // console.log(text.css.animation);
    oFollow.className = 'follow iconfont icon-';
    text.className = 'followText show-';
    console.log(iframe);
    switch (className) {
      case 'follow iconfont icon-star':
        oFollow.className += 'star-o';
        text.innerText = '取消收藏';
        console.log(text.innerText);
        text.style.opacity = 1;
        iframe.style.opacity = 0.7;
        setTimeout(() => {
          text.style.opacity = 0;
          iframe.style.opacity = 1;
        }, 800);
        doFollow(false);
        break;
      case 'follow iconfont icon-star-o':
        oFollow.className += 'star';
        text.innerText = '收藏成功';
        console.log(text.innerText);
        text.style.opacity = 1;
        iframe.style.opacity = 0.7;
        setTimeout(() => {
          text.style.opacity = 0;
          iframe.style.opacity = 1;
        }, 800);
        doFollow(true);
      default:
        break;
    }
  },
};
