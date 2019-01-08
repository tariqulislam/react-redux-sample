import React from 'react'
import oops from './oops.png'

class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          hasError: false,
          errorInfo: null,
          error: null
      }
  }

  static getDerivedStateFromError () {
      return { hasError: true }
  }

  componentDidCatch(error, info) {
    this.setState({
        hasError: true,
        error: error, 
        errorInfo: info
    })
  }

  render () {
      console.log(this.state.hasError)
    if(this.state.hasError && this.props.debug) {
        return (
            <div style={{width: '200px', maxHeight: '250px', overflow: 'scroll'}}>
                <div><img src={oops} style={{width: '200px'}} /></div>
                <div style={{ 
                   width: '200px', 
                   wordBreak: 'break-word'
                 }}>!Something went wrong</div>
                <div style={{ 
                    width: '200px', 
                    wordBreak: 'break-word'
                  }}>{this.state.error}</div>
                <div style={{ 
                    width: '200px', 
                    wordBreak: 'break-word'
                }}>{this.state.errorInfo}</div>
            </div>
        )
    } else if (this.state.hasError && !this.props.debug) {
        return (
            <div style={{width: '200px', maxHeight: '250px', overflow: 'scroll'}}>
                <div><img src={oops} style={{width: '200px'}} /></div>
                <div style={{ 
                    width: '200px', 
                    wordBreak: 'break-word'
                }}> !Something went wrong</div>
            </div>
        )
    } else {
        return this.props.children;
    }
  }
}

export default ErrorBoundary;