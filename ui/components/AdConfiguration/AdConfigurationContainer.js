import React, {Component} from 'react';
import styles from './AdConfigurationContainer.scss';
import Campaign from '../Campaign/Campaign.js';

class AdConfigurationContainer extends Component {

    render() {
        return (
            <div className="adConfigContainer">
                <label className="domain-label">Domain: {this.props.selectedDomains}</label>
                <input type="button" value="Add New Configuration" className="addConfigButton"/>
                <div className="campaign-container">
                  {this.props.configurations.map(m => <Campaign key={m.id} configuration={m}/>)}
                </div>
            </div>
        );
    }
}

AdConfigurationContainer.propTypes = {
    selectedDomains: React.PropTypes.string,
    configurations: React.PropTypes.array
}

module.exports = AdConfigurationContainer;
