import { Form, Card, Button } from "react-bootstrap";

export default function SignUp() {
  const onSignUpSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value.toLowerCase();
    const password = e.target[1].value;
    const calorieLimit = e.target[2].value;
    /**
     * Call signup api from backend with email and password and calorie limit
     */
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        calorie_limit: calorieLimit
      })
    });
  };

  return (
    <>
      <Card style={{ width: "27rem", margin: "auto", display: "flex" }}>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          <Form onSubmit={onSignUpSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Number Of Calories</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your calorie limit"
              />
            </Form.Group>
            <Button className="selectButton" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
