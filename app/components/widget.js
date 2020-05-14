import Component from '@glimmer/component';

import { tracked } from '@glimmer/tracking';

import config from 'frontend-toevla/config/environment';

export default class WidgetComponent extends Component {

  constructor(...args){
    super(...args);
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "proxy_session=QTEyOEdDTQ.vo3NFcFs94gRaDQuQ5rguN_-Ha3kFCWxm2t0P_nD8uoeVhKD88u5yXmoAHY.LRFDOvkc8EO65lxo.-NoNDpSEJ2TDO7cTgGP2cSQk9P46WXlV9UIP_1sVZg5yymWZ22UYbhQy22ezfeuBoInhMZgIPYVw65ib8-S9LgDQJCPqVD3Db88OYqdD0LVoBWpYCrNjGKjQRRAG.JBEHY99OhFbIrgOC4TYsKw");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const params="?dataResource="+this.args.dataResource;
    if(config.environment=='production'){
      var url="https://embed-dev.toevla.org/toevla-service"+params;
    }
    else{
      var url="/toevla-service"+params;
    }
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(function(result){
        this.data=JSON.parse(result);
      }.bind(this))
      .catch(error => console.log('error', error));
  }
  @tracked data;
}
