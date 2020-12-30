import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CarouselA from './CarouselA'


class Welcome extends Component {
  render() {
    return(
      <CarouselA />



    )
  }
}

export default withRouter(Welcome)
