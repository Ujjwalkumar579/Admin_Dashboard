import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { createUser } from "../Redux/action/ActionCreator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Create_user = (props) => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      props.userInputData.userName === "" ||
      props.userInputData.firstName === "" ||
      props.userInputData.lastName === "" ||
      props.userInputData.address === "" ||
      props.userInputData.password === "" ||
      props.userInputData.gender === "" ||
      props.userInputData.status === ""
    ) {
      setValidated(true);
      return;
    } else {

      notify();
      dispatch(
        createUser({
          ...props.userInputData,
          status: radioValue === "1" ? "active" : "in-active",
        })
      );


      setValidated(true);
      props.setUserInputData({
        firstName: "",
        lastName: "",
        userName: "",
        address: "",
        password: "",
        gender: "",
      });
      props.setModalShowForCreate(false)
    }
  };
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "In Active", value: "2" },
  ];

  const notify = () => toast.success("User Created");
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="user_create">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">fill form for create user</div>
                      <div className="col-lg-12">
                        <div className="create_user_form">
                          <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                          >
                            <Row className="mb-3">
                              {/* first name --------------- */}
                              <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom01"
                              >
                                <Form.Label>First name</Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    value={props.userInputData.firstName}
                                    min="3"
                                    onChange={(e) => {
                                      props.setUserInputData({
                                        ...props.userInputData,
                                        firstName: e.target.value,
                                      });
                                    }}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide first name.
                                  </Form.Control.Feedback>
                                  <Form.Control.Feedback type="valid">
                                    Looks good!
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>

                              {/* last name --------------- */}
                              <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom02"
                              >
                                <Form.Label>Last name</Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    value={props.userInputData.lastName}
                                    onChange={(e) => {
                                      props.setUserInputData({
                                        ...props.userInputData,
                                        lastName: e.target.value,
                                      });
                                    }}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide last name.
                                  </Form.Control.Feedback>
                                  <Form.Control.Feedback type="valid">
                                    Looks good!
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>

                              {/* user name -------------- */}
                              <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustomUsername"
                              >
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    value={props.userInputData.userName}
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
                                  <Form.Control.Feedback type="valid">
                                    Looks good!
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </Row>
                            <Row className="mb-3">
                              {/* Address ------------------ */}

                              <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom03"
                              >
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Address"
                                  required
                                  value={props.userInputData.address}
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
                                <Form.Control.Feedback type="valid">
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>

                              {/* password ------------- */}
                              <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom04"
                              >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="Password"
                                  required
                                  value={props.userInputData.password}
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
                                <Form.Control.Feedback type="valid">
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>

                              {/* gender select ---------------- */}
                              <Form.Group as={Col} md="4">
                                <Form.Label>Gender</Form.Label>
                                <select
                                  name=""
                                  id=""
                                  className="form-control"
                                  value={props.userInputData.gender}
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
                                <Form.Control.Feedback type="valid">
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>

                              {/* user status ----------------- */}
                              <Form.Group as={Col} md="4">
                                <Form.Label>Status</Form.Label> <br />
                                <InputGroup hasValidation>
                                  <ButtonGroup>
                                    {radios.map((radio, idx) => (
                                      <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={
                                          idx % 2
                                            ? "outline-danger"
                                            : "outline-success"
                                        }
                                        name="radio"
                                        required
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
                                </InputGroup>
                              </Form.Group>
                            </Row>
                            {/* submit button ------------------------------ */}
                            <Button type="submit">Submit form</Button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Create_user;
