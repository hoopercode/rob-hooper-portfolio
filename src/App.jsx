import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import MyWork from "./Containers/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills"
import Punk from "./Components/Punk/Punk";
import Noughts from "./Components/Noughts/Noughts";
import Calculator from "./Components/Calculator/Calculator";
import Morse from "./Components/Morse/Morse";
import Candy from "./Components/Candy/Candy";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/rob-hooper-portfolio/my-work">
            <MyWork />
          </Route>
          <Route path="/rob-hooper-portfolio/my-skills">
            <Skills />
          </Route>
          <Route path="/rob-hooper-portfolio/contact-me">
            <Contact />
          </Route>
          <Route path ="/rob-hooper-portfolio/calculator">
            <Calculator />
          </Route>
          <Route path ="/rob-hooper-portfolio/candy-crush">
            <Candy />
          </Route>
          <Route path ="/rob-hooper-portfolio/punk">
            <Punk />
          </Route>
          <Route path ="/rob-hooper-portfolio/morse">
            <Morse />
          </Route>
          <Route path ="/rob-hooper-portfolio/noughts">
            <Noughts />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
