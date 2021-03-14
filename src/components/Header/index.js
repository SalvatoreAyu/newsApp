import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/util';
export default {
  name: 'Header',
  getTpl(options) {
    const { url, title, showLeftIcon, showRightIcon } = options;
    return tplReplace(tpl, {
      url,
      title,
      showLeftIcon: showLeftIcon ? 'block' : 'none',
      showRightIcon: showRightIcon ? 'block' : 'none',
    });
  },
};
