const React = require('react')

const Search = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    handleQueryChange: React.PropTypes.func.isRequired,
  },

  componentDidMount () {
    this.input.focus()
  },

  handleQueryChange () {
    this.props.handleQueryChange(this.input.value)
  },

  setReference (input) {
    this.input = input
  },

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleQueryChange()
    }
  },

  render () {
    const { value } = this.props
    return React.createElement(
      "div",
      null,
      React.createElement('input', {
        ref: this.setReference,
        type: 'text',
        defaultValue: value,
        onKeyPress: this.handleKeyPress,
      }),
      React.createElement("input", {
        type: "submit",
        value: "Search!",
        onClick: this.handleQueryChange,
      })
    )
  },
})

module.exports = Search
