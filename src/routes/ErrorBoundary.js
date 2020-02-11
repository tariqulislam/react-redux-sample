import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          hasError: false,
          errorInfo: null,
          error: null
      }
  }

  componentDidCatch(error, info) {
    this.setState(state => ({...state, hasError: true, 
        error: error, 
        errorInfo: info
    }))
  }

  render () {
    if(this.state.hasError && this.props.debug) {
        return [
            <div>{this.state.error}</div>,
            <div>{this.state.errorInfo}</div>
        ]
    } else if (this.state.hasError && !this.props.debug) {
        return (
            <div> Something went Wrong during rendering element</div>
        )
    } else {
        return this.props.children;
    }
  }
}

export default ErrorBoundary;