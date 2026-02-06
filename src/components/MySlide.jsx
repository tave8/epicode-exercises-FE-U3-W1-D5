import { Component } from "react"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Image } from "react-bootstrap"

class MySlide extends Component {
  state = {
    film: this.props.film,
  }

  componentDidMount() {

  }
  render() {
    return (
        <>
            <Image src={this.state.film.Poster} fluid style={{  }} />
        </>
    )
  }
}

export default MySlide
