import Download from "./components/Download/Download";
import Faq from "./components/Faq/Faq";
import Hero from "./components/Hero/Hero";
import Shows from "./components/Shows/Shows";
import Kids from "./components/kids/Kids";
import Watch from "./components/watch/Watch";

function App() {
  return (
    <div className="App">
      <Hero />
      {/* From here these components shows the short information about the webpage. */}
      <Download />
      <Watch />
      <Kids />
      {/* Till here components shows the short information about the webpage. */}
      {/* This is a card component describing movie poster, movie name, price and watch now button */}
      <Shows />
      {/* This component shows the FAQ's (Frequently Asked Question). */}
      <Faq />
    </div>
  );
}

export default App;
