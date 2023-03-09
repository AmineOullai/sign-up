import "./logIn.css";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAMES } from "../constant";
import useAuth from "../hooks/useAuth";

const Login = (props) => {
  const authContext = useAuth();

  const navigate = useNavigate();
  return (
    <div>
      <form className="log">
        <input type="text" placeholder=" Enter your email..." />

        <input type="password" placeholder="Password" />
        <button
          className="logIN"
          type="button"
          onClick={() => {
            authContext.login(email, password);
          }}
        >
          LOG IN
        </button>
        <button
          type="button"
          className="logIN"
          onClick={() => {
            navigate(ROUTES_NAMES.signup);
          }}
        >
          Go to signUP
        </button>
      </form>
    </div>
  );
};

export default Login;
