import "./signUp.css";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <form className="sign">
        <input type="text" placeholder="FirstName" />
        <input type="text" placeholder="LastName" />
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />

        <button className="signUP">SignUp</button>
        <button
          type="buttons"
          className="signUP"
          onClick={() => {
            navigate("/login");
          }}
        >
          Go to LogIn
        </button>
      </form>
    </div>
  );
};

export default Signup;
