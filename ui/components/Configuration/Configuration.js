import React,{Component} from 'react';
import styles from './Configuration.scss';

class Configuration extends Component{
  render(){
    return(
      <div className="configuration-item">
        <label>Location : Status</label>
        <input type="button" value="X"/>
      </div>
    );
  }
}

module.exports = Configuration;
