const React = require('react')

const Display = React.createClass({
  propTypes: {
    avatar_url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    company: React.PropTypes.string,
    location: React.PropTypes.string,
    email: React.PropTypes.string,
    bio: React.PropTypes.string,
  },
  render() {
    const {
      name, company, location, email, bio, avatar_url
    } = this.props
    return React.createElement(
      "table",
      null,
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            { colSpan: "2" },
            React.createElement("img", {
              src: avatar_url,
              style: { width: 200 },
            })
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Name"
          ),
          React.createElement(
            "td",
            null,
            name || 'Unknown'
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Company"
          ),
          React.createElement(
            "td",
            null,
            company || 'Anonymous'
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Location"
          ),
          React.createElement(
            "td",
            null,
            location || 'Unknown'
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Email"
          ),
          React.createElement(
            "td",
            null,
            email || 'Unknown'
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Bio"
          ),
          React.createElement(
            "td",
            null,
            bio || 'we are doing it for the lulz'
          )
        )
      )
    )
  }
})

module.exports = Display
