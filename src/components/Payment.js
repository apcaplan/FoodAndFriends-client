import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createCustomer } from '../api/orders'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Payment extends Component {
  constructor (props) {
    super (props)

    this.state = {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zip: undefined,
      phone: undefined,
      deliveryNotes: '',
      paymentType: '',
      creditNo: '',
      creditExp: '',
      creditCode: '',
      creditStreet: '',
      creditCity: '',
      creditState: '',
      creditZip: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  onSubmitOrder = event => {
    event.preventDefault()
    console.log(this.state)
    console.log(this.props.user)
    const { user } = this.props
    createCustomer(this.state, user)
    .then(console.log("hello"))
      // .then(() => history.push('/review'))
      .catch(error => {
        console.log(user)
        console.error(error)
      // msgAlert({
      //   heading: 'Failed to place order: ' + error.message,
      //   message: messages.submitOrderFailure,
      //   variant: 'failed'
      // })
    })
  }

  render () {
    const { firstName, lastName, street, city, state, zip, phone,
      deliveryNotes, paymentType, creditNo, creditExp, creditCode, creditStreet,
      creditCity, creditState, creditZip } = this.state

    return (
      <div className='wrapper'>
        <Form>
          <Form.Group controlId="">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              as="textarea"
              name="firstName"
              value={ firstName }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              as="textarea"
              name="lastName"
              value={ lastName }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Street</Form.Label>
            <Form.Control
              as="textarea"
              name="street"
              value={ street }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>City</Form.Label>
            <Form.Control
              as="textarea"
              name="city"
              value={ city }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="textarea"
              name="state"
              value={ state }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              as="textarea"
              name="zip"
              value={ zip }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              as="textarea"
              name="phone"
              value={ phone }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Delivery Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              name="deliveryNotes"
              value={ deliveryNotes }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              as="textarea"
              name="paymentType"
              value={ paymentType }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              as="textarea"
              name="creditNo"
              value={ creditNo }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              as="textarea"
              name="creditExp"
              value={ creditExp }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Security Code</Form.Label>
            <Form.Control
              as="textarea"
              name="creditCode"
              value={ creditCode }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Cardholder Street</Form.Label>
            <Form.Control
              as="textarea"
              name="creditStreet"
              value={ creditStreet }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Cardholder City</Form.Label>
            <Form.Control
              as="textarea"
              name="creditCity"
              value={ creditCity }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Cardholder State</Form.Label>
            <Form.Control
              as="textarea"
              name="creditState"
              value={ creditState }
              onChange={ this.handleChange }
            />
          </Form.Group>
            <Form.Group controlId="">
              <Form.Label>Cardholder Zip</Form.Label>
              <Form.Control
                as="textarea"
                name="creditZip"
                value={ creditZip }
                onChange={ this.handleChange }
              />
          </Form.Group>
          <Button
            color="primary"
            type="submit"
            onClick={ this.onSubmitOrder }
          >
          Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(Payment)
