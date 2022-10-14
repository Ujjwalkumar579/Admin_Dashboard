import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import "./View_User.css";
const View_User = (props) => {
  const curState = useSelector((state) => state.userStore.users);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="user_detail">
            {curState
              .filter((ele) => ele.id === props.viewId)
              .map((val, i) => {
                return (
                  <ul key={i}>
                    <li>
                      <span>UserName :</span>
                      <span>{val.dataCreated.userName}</span>
                    </li>
                    <li>
                      <span>First Name :</span>
                      <span>{val.dataCreated.firstName}</span>
                    </li>
                    <li>
                      <span>Last Name :</span>
                      <span>{val.dataCreated.lastName}</span>
                    </li>
                    <li>
                      <span>Gender :</span>
                      <span>{val.dataCreated.gender}</span>
                    </li>
                    <li>
                      <span>Address :</span>
                      <span>{val.dataCreated.address}</span>
                    </li>
                    <li>
                      <span>Status :</span>
                      <span>{val.dataCreated.status}</span>
                    </li>
                  </ul>
                );
              })}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default View_User;
