import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Welcome extends Component {
  render() {
    return(
      <div>
      Hi!
      </div>
    )
  }
}

export default withRouter(Welcome)
