import { Component } from "react"
import SimpleSlider from "../assets/js/SimpleSlider"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert } from "react-bootstrap"

class MySlider extends Component {
  static OMDP_API_KEY = "3571ac08"

  state = {
    searchQuery: this.props.search,
    films: [],
    isLoading: true,
    isError: false,
  }

  async searchFilmsAndUpdateState() {
    try {
      this.updateIsLoading(true)
      this.updateIsError(false)
      const respData = await this.searchRemoteFilms()
      const films = respData.Search
      this.updateFilms(films)
      this.updateIsLoading(false)
      console.log(films)
    } catch (err) {
      console.error(err)
      this.updateIsLoading(false)
      this.updateIsError(true)
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

  //   UPDATE STATE HELPERS

  updateFilms(newFilms) {
    this.setState({ films: newFilms })
  }

  updateIsLoading(val) {
    this.setState({ isLoading: val })
  }

  updateIsError(val) {
    this.setState({ isError: val })
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

        {/* carousel/slider */}
        <Row>

          {/* slides/carousel cards */}
        

          {/* spinner: loading */}
          {this.state.isLoading && (
            <div className="text-center mt-3">
              <Spinner variant="danger" animation="border" />
            </div>
          )}

          {/* alert: error */}
          {this.state.isError && (
            <Alert variant="danger">
              <Alert.Heading>Problem while loading</Alert.Heading>
            </Alert>
          )}
        </Row>
      </Container>
    )
  }
}

export default MySlider
