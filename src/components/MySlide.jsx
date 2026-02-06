import { Component } from "react"

class MySlide extends Component {
  state = {
    film: this.props.film,
  }

  componentDidMount() {
    
  }
  render() {
    return <p>{this.state.film.Title}</p>
  }
}

export default MySlide
