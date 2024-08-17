import "./pageLogin.css"
import Input1 from "../components login/compLogin1";
import Input2 from "../components login/compLogin2";
import ButtonLog from "../components login/compLogin3";

import { Link } from "react-router-dom";


function Login() {
    return (
      <div className="containerHome">
        <div className="container2">
          <h1>Login</h1>
          <div className="container3">
            <h2>Username</h2>
            <Input1 />
            <h2>Password</h2>
            <Input2 className="input" />
          </div>
          <ButtonLog className="botao" />
          <Link to="/home">Home</Link>
        </div>
      </div>
    );
  }
  
  export default Login;