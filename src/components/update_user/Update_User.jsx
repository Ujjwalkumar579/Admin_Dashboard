/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { createUser, updateUser } from "../Redux/action/ActionCreator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update_User = (props) => {
  const curState = useSelector((state) => state.userStore.users);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "In Active", value: "2" },
  ];

  const updateDataHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(props.userInputData));
  };

  return (
    <div>
      {" "}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {curState
            .filter((ele) => ele.id === props.updateId)
            .map((val, i) => {
              console.log(val.dataCreated.firstName);
              return (
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(updateUser(props.userInputData, val.id));
                  }}
                >
                  <Row className="mb-3">
                    {/* first name --------------- */}
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"

                      // onChange={(e) => {
                      //   props.setUserInputData({
                      //     ...props.userInputData,
                      //     firstName: e.target.value,
                      //   });
                      // }}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    {/* last name --------------- */}
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                        onChange={(e) => {
                          props.setUserInputData({
                            ...props.userInputData,
                            lastName: e.target.value,
                          });
                        }}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    {/* user name -------------- */}
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          required
                          onChange={(e) => {
                            props.setUserInputData({
                              ...props.userInputData,
                              userName: e.target.value,
                            });
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    {/* Address ------------------ */}

                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        required
                        onChange={(e) => {
                          props.setUserInputData({
                            ...props.userInputData,
                            address: e.target.value,
                          });
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Address.
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* password ------------- */}
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => {
                          props.setUserInputData({
                            ...props.userInputData,
                            password: e.target.value,
                          });
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* gender select ---------------- */}
                    <Form.Group as={Col} md="4">
                      <Form.Label>Gender</Form.Label>
                      <select
                        name=""
                        id=""
                        className="form-control"
                        onChange={(e) => {
                          props.setUserInputData({
                            ...props.userInputData,
                            gender: e.target.value,
                          });
                        }}
                        required
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>

                      <Form.Control.Feedback type="invalid">
                        Please provide a valid gender.
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* user status ----------------- */}
                    <Form.Group as={Col} md="4">
                      <Form.Label>Status</Form.Label> <br />
                      <ButtonGroup>
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={
                              idx % 2 ? "outline-danger" : "outline-success"
                            }
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                        <Form.Control.Feedback type="invalid">
                          Please choose status of user.
                        </Form.Control.Feedback>
                      </ButtonGroup>
                    </Form.Group>
                  </Row>
                  {/* submit button ------------------------------ */}
                  <Button type="submit">Submit form</Button>
                </Form>
              );
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Update_User;
