import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Netflix from "./pages/Netflix";
import Youtube from "./pages/Youtube";
import Spotify from "./pages/Spotify";

function App() {

  return (
    <div className="App">
      <Header />

      <main className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/netflix' element={<Netflix />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/spotify' element={<Spotify />} />
          <Route path='/login' element={<Home />} />
          <Route path='/registration' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
