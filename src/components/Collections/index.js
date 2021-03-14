import './index.scss';
import { tplReplace } from '../../libs/util';
import tpl from './index.tpl';
export default {
  name: 'collections',
  getTpl: function (options) {
    const { url, title, showLeftIcon, showRightIcon } = options;
    return tplReplace(tpl, {
      url,
      title,
      showLeftIcon: showLeftIcon ? 'block' : 'none',
      showRightIcon: showRightIcon ? 'block' : 'none',
    });
  },
};
