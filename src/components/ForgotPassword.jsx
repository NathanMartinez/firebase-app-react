import { useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

export default function ForgotPassword() {
  const emailRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button className="w-100" type="Submit">
              Send password link
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/login">Already have an account? Log In</Link>
      </div>
    </>
  );
}