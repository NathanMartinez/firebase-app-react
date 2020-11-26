import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
