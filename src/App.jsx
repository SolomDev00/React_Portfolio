import "./style.css";
import { Banner } from "./Components/Banner";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
