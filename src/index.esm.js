import VeeValidate from './plugin';
import directive from './directive';
import mixin from './mixin';
import en from '../locale/en';
import * as Rules from './rules';
import mapFields from './core/mapFields';
import Validator from './core/validator';
import ErrorBag from './core/errorBag';
import { assign } from './utils';

const version = '__VERSION__';

const rulesPlugin = ({ Validator }) => {
  Object.keys(Rules).forEach(rule => {
    Validator.extend(rule, Rules[rule].validate, assign({}, Rules[rule].options, { paramNames: Rules[rule].paramNames }));
  });

  // Merge the english messages.
  Validator.localize('en', en);
};

const install = VeeValidate.install;
VeeValidate.use(rulesPlugin);

export {
  install,
  directive,
  mixin,
  mapFields,
  Validator,
  ErrorBag,
  Rules,
  version
};

export default VeeValidate;
