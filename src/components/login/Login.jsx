import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import loginImg from "../../img/welcom_img.jpg";
import loginLock from "../../img/lock_img.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
const Login = ({ setLogin_auth }) => {
  const [authToken, setAuthToken] = useState(false);
  const [input_credential, setInput_credential] = useState({
    inputUserName: "",
    inputPassword: "",
  });

  const notify = () => toast.error("Please Enter Valid Details");
  function auth(e) {
    e.preventDefault();
    notify();
    const { username, password } = JSON.parse(
      localStorage.getItem("login_credential")
    );
    // console.log(username, password);
    if (
      input_credential.inputUserName === username &&
      input_credential.inputPassword === password
    ) {
      setAuthToken(true);
    }
  }

  const navigate = useNavigate();

  if (authToken) {
    navigate("/dashboard");
    setLogin_auth(true);
  }
  return (
    <div className="login-wrapper">
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
      <Container fluid className="">
        <Row className="">
          {/* <div className="login">
              <form action="">
                <div className="login_username">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="userename"
                    id="username"
                    placeholder="Username"
                    value={input_credential.inputUserName}
                    onChange={(e) => {
                      setInput_credential({
                        ...input_credential,
                        inputUserName: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="login_password">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="on"
                    value={input_credential.inputPassword}
                    onChange={(e) => {
                      setInput_credential({
                        ...input_credential,
                        inputPassword: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="login_submit">
                  <button type="submit" onClick={auth}>
                    Login
                  </button>
                </div>
              </form>
            </div> */}
          <Col lg={7} className="">
            <div className="login_wel_img">
              <img src={loginImg} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={5} sm={12} xs={12} className="p-0 ">
            <div className="login_form">
              <img src={loginLock} alt="" className="img-fluid lock_img" />
              <h2 className="text-center">Admin Login</h2>
              <form action="">
                <div className="login_username form-field">
                  {/* <label htmlFor="username">Username</label> */}
                  <input
                    type="text"
                    name="userename"
                    id="username"
                    placeholder="Username"
                    className="form-control"
                    value={input_credential.inputUserName}
                    onChange={(e) => {
                      setInput_credential({
                        ...input_credential,
                        inputUserName: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="login_password form-field">
                  {/* <label htmlFor="password">Password</label> */}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="on"
                    className="form-control"
                    value={input_credential.inputPassword}
                    onChange={(e) => {
                      setInput_credential({
                        ...input_credential,
                        inputPassword: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="login_submit form-field">
                  <button type="submit" onClick={auth} className="form-control">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
