var React = require('react');

class Domain extends React.Component {
    render() {
        const domainList = ['all', 'com', 'de'];

        return (
            <div>
                <ul id="flag">
                    {domainList.map(domain => <li className="flag">{domain}</li>)}
                </ul>
            </div>
        );
    }
}
