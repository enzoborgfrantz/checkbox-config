import React, {Component} from 'react';
import styles from './Campaign.scss';
import Configuration from '../Configuration/Configuration.js';
import partnerList from '../../../data/static-data/partners.json';

class Campaign extends Component {

    constructor() {
        super();
        this.state = {
            panelVisible: true
        }
    }

    hidePanel() {
        this.setState({
            panelVisible: !this.state.panelVisible
        });
    }

    getConfigurations() {}

    render() {
        return (
            <div className="campaign-item">
                <label className="label-header-left" onClick={this.hidePanel.bind(this)}>{partnerList[this.props.configuration.campaign]}</label>
                <div className={this.state.panelVisible
                    ? ""
                    : "hidePanel"}>
                    <div className="configuration-container">
                        <div className="configuration-scroll">
                            {this.props.configuration.configurations.map(m => <Configuration details={m.toString()} status={m.status}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Campaign.PropTypes = {
    configuration: React.PropTypes.object
}

module.exports = Campaign;
