import type { JSX } from "react";
import useUserForm from "../../hooks/useUSerForm/useUserForm";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function UserForm(): JSX.Element {
  const { formData, errors, handleChange, handleSubmit } = useUserForm({
    username: "",
    email: "",
  });
  return (
    <Container className="my-4">
    <fieldset>
      <legend>User Info</legend>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="username"> User Name: </Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
          {errors.username && (
            <p style={{ color: "red" }}> {errors.username} </p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email: </Form.Label>
          <Form.Control
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </Form.Group>
        <Button type="submit">Submit</Button>
        <p>{JSON.stringify(formData)}</p>
      </Form>
    </fieldset>

    </Container>

  );
}
export default UserForm;
