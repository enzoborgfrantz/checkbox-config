import React, {Component} from 'react';
import DomainPicker from './DomainPicker/DomainPicker';
import AdConfigurationContainer from './AdConfiguration/AdConfigurationContainer';
import styles from '../styles/main.scss';

class Main extends Component {
    render() {
        return (
            <div className="mainContainer">
                <DomainPicker/>
            </div>
        );
    }
}

module.exports = Main;
