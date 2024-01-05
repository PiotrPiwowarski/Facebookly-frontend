import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {login} from "../../services/AuthenticationService";

const Login = ({onDataFromChild}) => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

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
      onDataFromChild(response.data);
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <div className="form-container">
      <div>
        <h2>Login</h2>
      </div>
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