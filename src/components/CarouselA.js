import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

class CarouselA extends Component {
  render() {

    return(
        <div>
          <div class='container-fluid' >
            <div className="row title" style={{ marginBottom: "20px" }} >
            <div class="col-sm-12 btn btn-warning">
            Carousel
            </div>
            </div>
          </div>
          <div className='container-fluid' >
            <Carousel interval={1000} keyboard={true} pauseOnHover={true} className="carousel">
              <Carousel.Item interval={1000}>
                <img
                  style={{'height':"300vh", 'width':"300vh"}}
                  className="d-block w-100"
                  src='src/images/pexels-ella-olsson-1640777.jpg'
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/elijah-m-henderson-jRA-yoDL68M-unsplash.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
    )
  }
}

export default withRouter(CarouselA)
