import React, {Component} from 'react';
import styles from './DomainPicker.scss';
import AdConfigurationContainer from '../AdConfiguration/AdConfigurationContainer'
import domainList from '../../../data/static-data/domains.json';

class DomainPicker extends Component {

    render() {
        return (
            <div className="domainPicker">
                <label className="label-header-left">Domains</label>
                <ul id="flag">
                    {domainList.map(domain => <li key={domain.domain} onClick={this.props.onClick.bind(this)} id={domain.domain} className={
                      domain.domain == this.props.selectedDomain
                        ? "flag flag-selected"
                        : "flag"}>
                        {domain.domain}
                    </li>)}
                </ul>
            </div>
        );
    }
}

DomainPicker.Proptypes = {
    selectedDomain: React.PropTypes.string
}

module.exports = DomainPicker;
