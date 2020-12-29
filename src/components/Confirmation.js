import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Confirmation extends Component {
  render() {
    return(
      <div>
      You did it!
      </div>
    )
  }
}

export default withRouter(Confirmation)
