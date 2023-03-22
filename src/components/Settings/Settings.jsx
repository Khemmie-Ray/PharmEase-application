import { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TitleBar from "../Global/TitleBar";


const Settings = () => {
  const [email, setEmail] = useState("test@email.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleDeleteAccount = () => {
    // Code to delete account goes here
    setAlertMessage("Account deleted successfully.");
    setAlertVariant("success");
    setShowAlert(true);
  };

  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match.");
      setAlertVariant("danger");
      setShowAlert(true);
      return;
    }
    // Code to save changes goes here
    setAlertMessage("Changes saved successfully.");
    setAlertVariant("success");
    setShowAlert(true);
  };

  return (
    
    <div>
        <TitleBar title="Settings" icon="BsGearFill"/>
      <Form className="settings-container bg-white m-auto"
      style={{ width: "90%", padding: "77px 45px" }}>
        <Row>
          <Form.Label style={{ fontSize: "29px", fontWeight: "500" }}>
            Email Address
          </Form.Label>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
            </Form.Group>
          </Col>{" "}
          <Col>
            <Button variant="secondary">Change</Button>
          </Col>
        </Row>
        <h3
          style={{
            fontSize: "29px",
            marginBlockStart: "20px",
            marginBlockEnd: "30px",
          }}
        >
          Password
        </h3>
        <Row className="w-50">
          <Col>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Old Password</Form.Label>
              <div className="password-input">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                  onClick={handleShowPassword}
                ></i>
              </div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>New Password</Form.Label>
              <div className="password-input">
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i
                  className={
                    showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"
                  }
                  onClick={handleShowConfirmPassword}
                ></i>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <p className="mt-3">
          Can't Remember your current password?{" "}
          <Link style={{textDecoration:"underline"}} to="/">Reset your password</Link>
        </p>

        <Button onClick={handleSaveChanges} style={{color:"#fff", padding:"8px 50px", backgroundColor:"#173C96", outline:"none", border:"none", margin:"15px 0"}}>
          Save Password
        </Button>
        <h3 style={{ fontSize: "29px", margin:"20px 0" }}>Delete Account</h3>
        <p style={{fontWeight:"400"}}>
          Would you like to delete your account? <br />
          By deleting your account will loose all your data.
        </p>
        <Button
          variant="outline-none"
          style={{
            color: "red",
            textDecoration: "underline",
            fontWeight: "500",
          }}
          onClick={handleDeleteAccount}
        >
          I want to delete my account
        </Button>
        <div className="mt-3">
          <Button style={{color:"#173C96", padding:"8px 50px", backgroundColor:"#C6C6C69C", outline:"none", border:"none"}}>Cancel</Button> <Button style={{color:"#fff", padding:"8px 50px", backgroundColor:"#173C96", outline:"none", border:"none"}}>Save</Button>
        </div>
      </Form>
      {showAlert && (
        <Alert
          variant={alertVariant}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
    </div>
  );
};

export default Settings;
