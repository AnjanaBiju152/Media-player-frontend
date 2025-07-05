import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import WatchHistory from "./pages/WatchHistory"


function App() {


  return (
    <>
    <div style={{ 
  background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
  minHeight: '100vh'
}}>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch' element={<WatchHistory />} />

      </Routes>

      <Footer />
      </div>
    </>
  )
}

export default App
