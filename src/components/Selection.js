import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createOrder } from '../api/orders'
import messages from './Auth/AutoDismissAlert/messages'

// stateful component to add slection, delivery, and payment information
class Selection extends Component {
  constructor (props) {
    super (props)

    this.state = {
      food: '',
      date: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  onSelectOrder = event => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    const { food, date } = this.state
    createOrder(user, {food, date})
      .then(this.props.showdisplayPayment())
      .catch(error => {
      msgAlert({
        heading: 'Oops! ' + error.message,
        message: messages.selectOrderFailure,
        variant: 'failed'
      })
    })
  }

    render () {
      const { food, date } = this.state

      return (
        <Form>
          <Form.Group controlId="">
            <Form.Label>Food</Form.Label>
            <Form.Control
              as="textarea"
              rows="1"
              name="food"
              value={ food }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Date</Form.Label>
            <Form.Control
              as="textarea"
              rows="1"
              name="date"
              value={ date }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Button
            color="primary"
            type="submit"
            onClick={ this.onSelectOrder }
          >
          Submit
          </Button>
        </Form>
      )
  }
}

export default withRouter(Selection)
