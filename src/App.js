import Header from "./Components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile, Highlights, Feeds, Login } from "./Screens";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Router>
      <RecoilRoot>
          <Header />
        <div className="App container">
          <Switch>
            <Route exact path="/" component={Feeds} />
            <Route path="/highlights" component={Highlights} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
