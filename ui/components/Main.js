var React = require('react');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li>Pick a Domain PLEASE!!</li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = Main;
