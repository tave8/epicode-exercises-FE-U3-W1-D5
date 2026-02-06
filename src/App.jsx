// styles
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import "./assets/css/header.css"
import "./assets/css/simple-slider.css"
import "./assets/css/checkbox.css"

// react components
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MySlider from "./components/home/MySlider"
import MySearchFilters from "./components/home/MySearchFilters"

function App() {

  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        {/* search filters */}
        <MySearchFilters />
        {/* sliders */}
        <MySlider title="Trending Now" search="Game of Thrones" id="simple-slider1"/>
        <MySlider title="Watch It Again" search="The Witcher" id="simple-slider2"/>
        <MySlider title="New Releases" search="Hunger Games" id="simple-slider3"/>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App
