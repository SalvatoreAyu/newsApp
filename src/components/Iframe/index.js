import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/util';
export default {
  name: 'NewsFrame',
  tpl(url) {
    console.log(url);
    return tplReplace(tpl, { url });
  },
};
