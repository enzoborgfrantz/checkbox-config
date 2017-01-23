import React, {Component} from 'react';
import styles from './AdConfigurationContainer.scss';
import Campaign from '../Campaign/Campaign.js';

class AdConfigurationContainer extends Component {
    render() {
        return (
            <div className="adConfigContainer">
                <label className="domain-label">Domain: {this.props.domain}</label>
                <input type="button" value="Add New Configuration" className="addConfigButton"/>
                <div className="campaign-container">
                    <Campaign/>
                    <Campaign/>

                </div>
            </div>

        );
    }
}

AdConfigurationContainer.propTypes = {
    domain: React.PropTypes.string
}

module.exports = AdConfigurationContainer;
