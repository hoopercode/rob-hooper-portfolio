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
          <Route path="/my-work">
            <MyWork />
          </Route>
          <Route path="/my-skills">
            <Skills />
          </Route>
          <Route path="/contact-me">
            <Contact />
          </Route>
          <Route path ="/calculator">
            <Calculator />
          </Route>
          <Route path ="/candy-crush">
            <Candy />
          </Route>
          <Route path ="/punk">
            <Punk />
          </Route>
          <Route path ="/morse">
            <Morse />
          </Route>
          <Route path ="/noughts">
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
