import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Movies from "./pages/Movies"
import NotFound from "./pages/NotFound"
import Movie from "./pages/Movie"
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" Component={ Home } />
        <Route path="/about" Component={ About } />
        <Route path="/movies" Component={ Movies } />
        <Route path="/movie/:id" Component={ Movie } />
        <Route path='*' Component={NotFound} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
