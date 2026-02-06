import { Component } from "react"
import SimpleSlider from "../assets/js/SimpleSlider"
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap"

class MySlider extends Component {
  static OMDP_API_KEY = "3571ac08"

  state = {
    searchQuery: this.props.search,
  }

  async searchFilmsAndUpdateState() {
    try {
      const respData = await this.searchRemoteFilms()
      const films = respData.Search
      console.log(films)
    } catch (err) {
        console.error(err)
    }
  }

  async searchRemoteFilms() {
    const url = this.getApiUrlForSearch()
    const config = {}
    const resp = await fetch(url, config)
    if (!resp.ok) {
        throw Error("error while searching remote films: status: ", resp.status)
    }
    const data = await resp.json()
    return data
  }

  getApiUrlForSearch() {
    const apiKey = MySlider.OMDP_API_KEY
    const query = this.state.searchQuery
    return `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
  }

  componentDidMount() {
    this.searchFilmsAndUpdateState()
  }

  render() {
    return (
      <Container fluid className="mt-5">
        {/* title */}
        <Row>
          <Col>
            <h4>{this.props.title}</h4>
          </Col>
        </Row>

        {/* slides */}
        <Row></Row>
      </Container>
    )
  }
}

export default MySlider
