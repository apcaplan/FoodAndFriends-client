import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Selection from './Selection'
import Payment from './Payment'

class Restaurant extends Component {
  constructor(props) {
    super(props)

    this.state= {
      displayOrder: true,
      displayPayment: false
    }
  }

  showdisplayPayment = () => {
    this.setState({
      displayOrder: false,
      displayPayment: true
    })
  }

  showDisplayOrder = () => {
    this.setState({
      displayOrder: true,
      displayPayment: false
    })
  }

  render() {
    return(
      <div>
      {((props) => {
          if (this.state.displayOrder) {
            return <Selection
              user={this.props.user}
              showdisplayPayment={this.showdisplayPayment}
            />
          }

          if (this.state.displayPayment) {
            return <Payment
              user={this.props.user}
              toggleDisplayOrder={this.toggleDisplayOrder}
              />
          }
      })()}
      </div>
    )

  }
}

export default withRouter(Restaurant)
