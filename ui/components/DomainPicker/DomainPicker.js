import React, {Component} from 'react';
import styles from './DomainPicker.css';

class DomainPicker extends Component {
    render() {
        const domainList = ['all', 'com', 'de', 'es', 'fr', 'it', 'nl', 'pl', 'cn', 'sk', 'cz', 'ru', 'pt'];
        return (
            <div>
                <ul id="flag">
                    {domainList.map(domain => <li id={domain} className="flag"></li>)}
                </ul>
            </div>
        );
    }
}

module.exports = DomainPicker;
