import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {login} from "../../services/AuthenticationService";

const Login = ({getDataFromChild}) => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState(null);

  const navigator = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const response = await login(loginData);
      setLoginData({
        email: "",
        password: ""
      });
      navigator("/allPosts");
      getDataFromChild(response.data);
    } catch(err) {
      setError("Something went wrong!");
    }
  }

  return (
    <div className="form-container main">
      <div>
        <h2>Login</h2>
      </div>
      {error !== null ? <div>
        <p className="error">{error}</p>
      </div> : ""}
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <button className="btn btn-dark mb-2 m-lg-2" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;