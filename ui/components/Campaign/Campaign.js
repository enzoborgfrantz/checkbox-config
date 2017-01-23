import React, {Component} from 'react';
import styles from './Campaign.scss';
import Configuration from '../Configuration/Configuration.js';

class Campaign extends Component {
    render() {
        return (
            <div className="campaign-item">
                <label className="label-header-left">Booking.com</label>
                <div className="campaign-info">
                    <label className="label-header-right">Status</label>
                    <div className="checkbox-wrapper">
                        <span>Enabled</span>
                        <input type="checkbox"/>
                    </div>
                    <div className="checkbox-wrapper">
                        <span>Checked</span>
                        <input className="check" type="checkbox" value="Checked"/>
                    </div>
                </div>
                <div className="configuration-container">
                    <label className="label-header-left">Configurations</label>
                    <div className="configuration-scroll">
                        <Configuration/>
                        <Configuration/>
                        <Configuration/>
                        <Configuration/>
                        <Configuration/>
                        <Configuration/>
                    </div>
                </div>
                <input type="button" value="Save Configuration" className="save-btn"/>
            </div>
        );
    }
}

module.exports = Campaign;
