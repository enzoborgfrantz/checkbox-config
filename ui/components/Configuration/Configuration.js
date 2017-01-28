import React, {Component} from 'react';
import styles from './Configuration.scss';

class Configuration extends Component {
    render() {
        return (
            <div className={this.props.status
                ? "configuration-item enabled"
                : "configuration-item disabled"}>
                <label>{this.props.details}</label>
            </div>
        );
    }
}

Configuration.PropTypes = {
    details: React.PropTypes.string,
    status: React.PropTypes.boolean
}

module.exports = Configuration;
