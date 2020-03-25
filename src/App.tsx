import React, { JSXElementConstructor } from "react";
import "./App.css";
import { ExampleComponent } from "./components/ExampleComponent";
import { NavBar } from "./components/pages/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutPage } from "./components/pages/AboutPage";
import { HomePage } from "./components/pages/HomePage";
import { Projects } from "./components/pages/Projects";

export const App: React.FC = ({}, {}) => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
};

//ANOTHER WAY OF MAKING COMPONENTS
// export default function App(): JSX.Element {
//   return <div>Hello</div>;
// }

export default App;
