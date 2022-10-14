/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../Redux/action/ActionCreator";
import { ToastContainer, toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Create_user from "../create_user/Create_user";
import View_User from "../view_user/View_User";
import Update_User from "../update_user/Update_User";

const Dashboard = ({ setLogin_auth }) => {
  // useSelector for get data from store of redux
  const curState = useSelector((state) => state.userStore.users);
  // useDispatch for doing actions in redux
  const dispatch = useDispatch();

  // all states for modals open and close
  const [modalShowForCreate, setModalShowForCreate] = useState(false);
  const [modalShowForView, setModalShowForView] = useState(false);
  const [modalShowForUpdate, setModalShowForUpdate] = useState(false);

  // states for sending id to modal to get correct user which i am clicking
  const [idForView, setIdForView] = useState(null);
  const [idForUpdate, setIdForUpdate] = useState(null);

  // state for search field to get and set value in input filed
  const [searchText, setSearchText] = useState("");

  // state for filter by Gender and Status (select tag)
  const [filterVal, setfilterVal] = useState({
    filterValForGender: "",
    filterValForStatus: "",
  });

  // state for creating new user this are the fileds
  const [userInputData, setUserInputData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    address: "",
    password: "",
    gender: "",
  });

  // View , Update, Delete and Logout Handler Function
  const viewHandler = (id) => {
    setIdForView(id);
    setModalShowForView(true);
  };

  const updateHandler = (id) => {
    setIdForUpdate(id);
    setModalShowForUpdate(true);
  };

  const deleteHandler = (id) => {
    toast.success("User Deleted Successfully");
    dispatch(deleteUser(id));
  };

  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/");
    setLogin_auth(false);
  };

  // ----------------//

  useEffect(() => {
    window.addEventListener('load', () => {
      navigate('/')
    })
  }, [])

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
      <Create_user
        show={modalShowForCreate}
        onHide={() => setModalShowForCreate(false)}
        userInputData={userInputData}
        setUserInputData={setUserInputData}
        setModalShowForCreate={setModalShowForCreate}
      />
      <View_User
        show={modalShowForView}
        onHide={() => setModalShowForView(false)}
        viewId={idForView}
      />
      <Update_User
        show={modalShowForUpdate}
        onHide={() => setModalShowForUpdate(false)}
        updateId={idForUpdate}
        userInputData={userInputData}
        setUserInputData={setUserInputData}
      />
      <div className="dashboard_wrapper">
        <Container fluid>
          <Row className="mb-4 mt-4 buttons_row">
            <Col className="text-start">
              <button className="btn btn-primary" onClick={logoutHandler}>
                Logout
              </button>
            </Col>
            <Col className="text-end">
              <button
                className="btn btn-primary"
                onClick={() => setModalShowForCreate(true)}
              >
                + Add User
              </button>
            </Col>
          </Row>
          <Row className="mb-4 filter_row">
            <Col lg={4}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search by username or Firstname"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="form-control"
              />
            </Col>
            <Col lg={2}></Col>
            <Col lg={3}>
              <select
                name=""
                id=""
                className="form-control"
                onChange={(e) =>
                  setfilterVal({
                    ...filterVal,
                    filterValForGender: e.target.value,
                  })
                }
              >
                <option value="">Filter By Gender - All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </Col>
            <Col lg={3}>
              <select
                name=""
                id=""
                className="form-control"
                onChange={(e) =>
                  setfilterVal({
                    ...filterVal,
                    filterValForStatus: e.target.value,
                  })
                }
              >
                <option value="">Filter By Status - All</option>
                <option value="active">Active</option>
                <option value="in-active">In-Active</option>
              </select>
            </Col>
          </Row>

          <Row>
            <Col>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Status</th>
                    <th>Gender</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {curState
                    .filter((ele) => {
                      if (searchText === "") {
                        return ele;
                      } else if (
                        ele.dataCreated.userName
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                      ) {
                        return ele;
                      } else if (
                        ele.dataCreated.firstName
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                      ) {
                        return ele;
                      }
                    })
                    .filter((filterEle) => {
                      if (
                        filterVal.filterValForGender ===
                        filterEle.dataCreated.gender &&
                        filterVal.filterValForStatus ===
                        filterEle.dataCreated.status
                      ) {
                        console.log("dono apply hoga then");
                        return filterEle;
                      } else if (
                        filterVal.filterValForGender === "" &&
                        filterVal.filterValForStatus === ""
                      ) {
                        console.log("khali wala");
                        return filterEle;
                      } else if (
                        filterVal.filterValForGender ===
                        filterEle.dataCreated.gender
                      ) {
                        console.log("gender");
                        return filterEle;
                      } else if (
                        filterVal.filterValForStatus ===
                        filterEle.dataCreated.status
                      ) {
                        console.log("status wala");
                        return filterEle;
                      }
                    })
                    .map((val, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{val.dataCreated.userName}</td>
                          <td>{val.dataCreated.firstName}</td>
                          <td>{val.dataCreated.lastName}</td>
                          <td>{val.dataCreated.status}</td>
                          <td>{val.dataCreated.gender}</td>
                          <td>
                            <div className="action_btns">
                              <ul>
                                <li>
                                  <button
                                    className="btn btn-success"
                                    onClick={() => viewHandler(val.id)}
                                  >
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="btn btn-primary"
                                    onClick={() => updateHandler(val.id)}
                                  >
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => deleteHandler(val.id)}
                                  >
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
