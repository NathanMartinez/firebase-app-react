import { useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="Submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="d-flex flex-column w-100 text-center mt-2">
        <Link to="/signup">Don't have an account? Sign Up</Link>
        <Link to="/forgot-password">Forgot Password</Link>
      </div>
    </>
  );
}
