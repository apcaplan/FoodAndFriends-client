import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Test extends Component {
  render(props) {
    return(
      <Button
        onClick={(props) => {
          console.log(props)
          console.log(props.msgAlert)
          console.log(props.user)
          this.props.history.push('/restaurant')}
        }>
      Click me
      </Button>
    )
  }
}

export default withRouter(Test)
