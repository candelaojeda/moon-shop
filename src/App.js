import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import HeroImage from "./components/HeroImage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Introduction />
        <HeroImage />
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
