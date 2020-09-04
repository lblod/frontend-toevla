import { helper } from '@ember/component/helper';

export default helper(function slice([params, start, end]) {
  if(params){
    return params.slice(start, end);
  }
});
