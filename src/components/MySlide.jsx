import { Component } from "react"

class MySlide extends Component {
  state = {
    film: this.props.film,
  }

  componentDidMount() {
    console.log("mounted myslide", this.state)
  }
  render() {
    return <p>{this.state.film.Title}</p>
  }
}

export default MySlide
