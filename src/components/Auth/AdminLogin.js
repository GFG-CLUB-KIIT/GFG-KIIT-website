import "./adminLogin.css";
import LoginForm from "./LoginForm.js";
function AdminLogin() {
  return (
    <>
      <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
        <div className="login-main-div">
          <div className="vertical-box"></div>
        </div>
        <div className="login-content">
          <p>Need help?</p>
          <div className="login-form">
            <LoginForm />
          </div>
          <div className="login-button">Login</div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
