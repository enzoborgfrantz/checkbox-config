import React, {Component} from 'react';
import styles from './DomainPicker.scss';
import AdConfigurationContainer from '../AdConfiguration/AdConfigurationContainer'

const domainList = ['all', 'com', 'de', 'es', 'fr', 'it', 'nl', 'pl', 'cn', 'sk', 'cz', 'ru', 'pt'];

class DomainPicker extends Component {

constructor(){
  super();
  this.state = {
    domain : '',
    adConfigVisible: false
  }
}

changeDomain(e){
  this.setState({domain: e.target.id, adConfigVisible:true});
}

    render() {
        return (
            <div className="domainPicker">
                <ul id="flag">
                  <label className="label-header-left">Domain</label>
                    {domainList.map(domain =>
                      <li key={domain} onClick={this.changeDomain.bind(this)} id={domain} className="flag">
                        {domain}
                      </li>)}
                </ul>
                {this.state.adConfigVisible ? <AdConfigurationContainer domain={this.state.domain}/> : null}
            </div>
        );
    }
}

module.exports = DomainPicker;
