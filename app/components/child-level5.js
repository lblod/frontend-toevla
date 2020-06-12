import Component from '@glimmer/component';

export default class ChildLevel5Component extends Component {
  get sortedChildren(){
    return this.args.node.children.sortBy("order");
  }

  temp1=null;
  temp2=null;

  get hack(){
    if(this.temp1){
      return this.temp1
    }
    else{
      if(!this.temp2){
        this.temp2=this.args.experience.getScoreForTreeNode(this.args.node)
          .then(function(res){
            this.temp1=res;
          }.bind(this));
      }
    }
    return null;
  }
}
