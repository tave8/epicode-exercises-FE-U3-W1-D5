// styles
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import "./assets/css/header.css"
import "./assets/css/simple-slider.css"
import "./assets/css/checkbox.css"

// react components
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MySlider from "./components/MySlider"
import MySearchFilters from "./components/MySearchFilters"

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
        {/* <MySlider title="Watch It Again" search="The Witcher" /> */}
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App
