import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/Auth/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/Auth/AutoDismissAlert/AutoDismissAlert'
import Header from './components//Header'
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import SignOut from './components/Auth/SignOut'
import ChangePassword from './components/Auth/ChangePassword'
import Restaurant from './components/Restaurant'
import Review from './components/Review'
import Confirmation from './components/Confirmation'
import Welcome from './components/Welcome'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/' render={(props) => (
            <Restaurant msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/welcome' render={(props) => (
          <Welcome user={user} />
        )} />
          <AuthenticatedRoute user={user} exact path='/confirm' render={(props) => (
            <Confirmation msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/review' render={(props) => (
            <Review msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
