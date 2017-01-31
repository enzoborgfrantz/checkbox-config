import React, {Component} from 'react';
import DomainPicker from './DomainPicker/DomainPicker';
import AdConfigurationContainer from './AdConfiguration/AdConfigurationContainer';
import styles from '../styles/main.scss';
import domainList from '../../data/static-data/domains.json';
import getConfiguration from '../../data/modules/configuration.module';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            selectedDomains: '',
            adConfigVisible: false,
            configurations: {}
        }
    }

    selectDomain(e) {
        //domainList.filter(d => d.domain == e.target.id)[0].selected ^= true;
        //let selectedDomains = domainList.filter(d => d.selected).map(m => m.domain);
        this.setState({
            /*selectedDomains: selectedDomains.length > 0
                ? selectedDomains.reduce((x, y) => {
                    return x + ', ' + y
                })
                : '',*/
            selectedDomain: e.target.id,
            adConfigVisible: true, //selectedDomain != '', //selectedDomains.length > 0,
            configurations: getConfiguration(e.target.id)
        });

    }

    render() {
        return (
            <div className="mainContainer">
                <DomainPicker onClick={(e) => {this.selectDomain(e)}} selectedDomain={this.state.selectedDomain}/> 
                {this.state.adConfigVisible
                    ? <AdConfigurationContainer configurations={this.state.configurations}
                      selectedDomain={this.state.selectedDomain}/>
                    : null}

            </div>
        );
    }
}

module.exports = Main;
