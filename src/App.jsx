import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
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
        <MySlider title="Trending Now" search="Game of Thrones" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App
