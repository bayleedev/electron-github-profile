const GitHub = React.createClass({

  getInitialState () {
    return {
      hash: '',
    }
  },

  componentDidMount () {
    window.addEventListener('hashchange', this.hashChange)
  },
  componentWillUnmount () {
    window.removeEventListener('hashchange', this.hashChange)
  },
  hashChange () {
    this.setState({
      hash: window.location.hash.slice(1),
    })
    fetch('https://api.github.com/users/' + this.state.hash).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          this.setState({
            data
          })
        })
      } else {
        this.setState({
          data: null
        })
      }
    });
  },

  handleSearch (value) {
    window.location.hash = value
  },

  render () {
    return React.createElement(
      'div',
      null,
      React.createElement(Search, {
        handleQueryChange: this.handleSearch,
        value: this.state.hash,
      }),
      this.state.data && React.createElement(Display, this.state.data)
    )
  }

})

ReactDOM.render(
  React.createElement(GitHub),
  document.getElementById('gh')
)
