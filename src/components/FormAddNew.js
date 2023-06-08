import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUserRedux } from "../action/actions";

const FormAddNew = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const isCreating = useSelector((state) => state.user.isCreating);

  const handleCreateNewUser = () => {
    console.log("create new user", email, password, username);
    dispatch(createNewUserRedux(email, password, username));
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <>
      <div className="container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Button
            disabled={isCreating}
            onClick={() => handleCreateNewUser()}
            variant="primary"
          >
            Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormAddNew;
