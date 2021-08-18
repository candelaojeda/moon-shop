import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Introduction/>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
