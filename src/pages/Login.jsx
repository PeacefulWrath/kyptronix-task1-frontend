import Google from "../img/google.png";


const Login = () => {
  const google = () => {
    window.open("https://krypt-task1-backend.onrender.com/auth/google", "_self");
  };

 
  return (
    <div className="login">
        <div className="center">
          <div  className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
        </div>
      </div>
    
  );
};

export default Login;