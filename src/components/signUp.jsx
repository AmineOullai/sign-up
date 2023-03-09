import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAMES } from "../constant";

const Signup = (props) => {
  const authContext = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <form className="sign">
        <input type="text" placeholder="FirstName" />
        <input type="text" placeholder="LastName" />
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />

        <button
          className="signUP"
          onClick={() => {
            authContext.Signup(name, lastName, email, password);
          }}
        >
          SignUp
        </button>
        <button
          type="buttons"
          className="signUP"
          onClick={() => {
            navigate(ROUTES_NAMES.login);
          }}
        >
          Go to LogIn
        </button>
      </form>
    </div>
  );
};

export default Signup;
