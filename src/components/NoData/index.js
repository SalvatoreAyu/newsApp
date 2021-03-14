import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/util';

export default {
  name: 'NoDataTip',
  tpl() {
    return tplReplace(tpl, {
      text: '您还没有收藏新闻,快去添加吧',
    });
  },
};
