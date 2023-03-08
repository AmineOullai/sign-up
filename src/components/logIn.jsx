import "./logIn.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <form className="log">
        <input type="text" placeholder=" Enter your email..." />

        <input type="password" placeholder="Password" />
        <button className="logIN">LOG IN</button>
        <button
          type="button"
          className="logIN"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Go to signUP
        </button>
      </form>
    </div>
  );
};

export default Login;
