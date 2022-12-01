import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutus/AboutUs";
import Service from "./components/service/Service";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="nav_border">
        <Container>
          <Navbar />
        </Container>
      </div>
      <div className="header">
        <Container>
          <Header />
        </Container>
      </div>
      <div className="aboutus">
        <Container>
          <AboutUs />
          <Service />
        </Container>
      </div>
      <div className="pricing_screen">
        <Container>
          <Pricing />
        </Container>
      </div>
      <div className="contact_screen">
        <Container>
          <Contact />
          <Team />
        </Container>
      </div>
      <div className="footer_screen">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}

export default App;
