import { Component } from "react"
// home components
import MySlider from "./MySlider"
import MySearchFilters from "./MySearchFilters"


class HomeMain extends Component {
  render() {
    return (
      <>
        <MySearchFilters />
        <MySlider title="Trending Now" search="Game of Thrones" id="simple-slider1" />
        <MySlider title="Watch It Again" search="The Witcher" id="simple-slider2" />
        <MySlider title="New Releases" search="Hunger Games" id="simple-slider3" />
      </>
    )
  }
}

export default HomeMain
