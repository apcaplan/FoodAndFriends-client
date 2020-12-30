import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createCustomer } from '../api/orders'
import { Form, Button, Col } from 'react-bootstrap'
import credit from '../images/credit.png'
import googleWallet from '../images/google wallet.png'
import amazonPay from '../images/amazon pay.png'
import paypal from '../images/paypal.png'


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
        <h3>Delivery Info</h3>
        <Form className="delivery">
          <Form.Row>
            <Form.Group as={ Col } controlId="formGridFirst">
              <Form.Label className="formLabel">First Name</Form.Label>
              <Form.Control
                name="firstName"
                rows="1"
                value={ firstName }
                onChange={ this.handleChange }
              />
            </Form.Group>
            <Form.Group as={ Col } controlId="formGridLast">
              <Form.Label className="formLabel">Last Name</Form.Label>
              <Form.Control
                name="lastName"
                value={ lastName }
                onChange={ this.handleChange }
              />
            </Form.Group>
          </Form.Row>
            <Form.Group controlId="formGridAddress">
              <Form.Label className="formLabel">Street Address</Form.Label>
              <Form.Control
                name="street"
                value={ street }
                onChange={ this.handleChange }
              />
            </Form.Group>
          <Form.Row>
            <Form.Group as={ Col } controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                value={ city }
                onChange={ this.handleChange }
              />
            </Form.Group>
            <Form.Group as={ Col } controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                name="state"
                value={ state }
                onChange={ this.handleChange }
              />
            </Form.Group>
            <Form.Group as={ Col } controlId="formGridZip">
              <Form.Label className="formLabel">Zip Code</Form.Label>
              <Form.Control
                name="zip"
                value={ zip }
                onChange={ this.handleChange }
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridPhone">
            <Form.Label className="formLabel">Phone number</Form.Label>
            <Form.Control
              name="phone"
              value={ phone }
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Form.Group controlId="formGridNotes">
            <Form.Label className="formLabel">Delivery Notes</Form.Label>
            <Form.Control
              rows="3"
              name="deliveryNotes"
              value={ deliveryNotes }
              onChange={ this.handleChange }
            />
          </Form.Group>
        </Form>




        <h3>Payment Info</h3>
        <Form >
          <Form.Row className="cc">
            <Form.Group className="creditCards">
                <label>
                  <Form.Check value="credit" name="creditcard" type="radio" onChange={ this.handleChange } />
                  <img src={ credit } />
                </label>
                <label>
                  <Form.Check value="google wallet" name="creditcard" type="radio" onChange={ this.handleChange } />
                  <img src={ googleWallet } />
                </label>
                <label>
                  <Form.Check value="amazon pay" name="creditcard" type="radio" onChange={ this.handleChange } />
                  <img src={ amazonPay } />
                </label>
                <label>
                  <Form.Check value="paypal" name="creditcard" type="radio" onChange={ this.handleChange } />
                  <img src={ paypal} />
                </label>
            </Form.Group>
          </Form.Row>
          <Form.Row className="cardInfo">
            <Form.Group  controlId="">
              <Form.Label className="formLabel">Credit Card Number</Form.Label>
              <Form.Control
                name="creditNo"
                value={ creditNo }
                onChange={ this.handleChange }
              />
            </Form.Group>
            <Form.Group  controlId="">
              <Form.Label className="formLabel">Expiration Date</Form.Label>
              <Form.Control
                name="creditExp"
                value={ creditExp }
                onChange={ this.handleChange }
              />
            </Form.Group>
            <Form.Group  controlId="">
              <Form.Label className="formLabel">Security Code</Form.Label>
              <Form.Control
                name="creditCode"
                value={ creditCode }
                onChange={ this.handleChange }
              />
            </Form.Group>
            <Form.Group className="sameCheck">
              <Form.Check value="sameCheck" name="sameCheck" type="radio" checked />
              <Form.Label className="formLabel">Same as delivery address</Form.Label>
            </Form.Group>
          </Form.Row>
        </Form>


          <Button
            className="submitButton"
            type="submit"
            onClick={ this.onSubmitOrder }
          >
          Submit
          </Button>

      </div>
    )
  }
}

export default withRouter(Payment)
