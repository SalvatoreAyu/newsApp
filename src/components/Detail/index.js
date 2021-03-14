import './index.scss';
import { tplReplace } from '../../libs/util';
import tql from './index.tpl';
export default {
  name: 'detail',
  getTql(options) {
    const { url, title, showLeftIcon, showRightIcon } = options;
    return tplReplace(tql, {
      url,
      title,
      showLeftIcon: showLeftIcon ? 'block' : 'none',
      showRightIcon: showRightIcon ? 'block' : 'none',
    });
  },
};
