import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" exact component={SignUpForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
