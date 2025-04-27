import logo from './logo.svg';
import './App.css';
import { Carousel } from './components/carousel';
import { LeftImg } from './components/left-img';
import { Rightsec } from './components/right-section';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { LeftImg2 } from './components/left-img';
import { Rightsec2 } from './components/right-section';
import { Rightsec3 } from './components/right-section';







const OPTIONS = { dragFree: false, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel slides={SLIDES} options={OPTIONS} />
      <hr />
      <div class="container">
        <div className="second-section">
          <LeftImg />
          <Rightsec />

        </div>
        <section class="full-width-image">
          <img src="https://itechstore.tn/img/cms/MULTIL-min_3.jpg" alt="" />
        </section>
        <h2>Découver ce qu'il voius faut au meilleur prix.</h2>
        <div className="second-section">
          <LeftImg2 />
          <Rightsec2 />


        </div>
        <h3> MADE BY APPLE</h3>
      </div>
      <Rightsec3 />
      <Footer />
    </div>
  );
}

export default App;
