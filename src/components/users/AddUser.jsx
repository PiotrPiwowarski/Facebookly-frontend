import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {addUser} from "../../services/UserService";
import Navbar from "../structure/Navbar";

export default function AddUser({id}) {

  const navigator = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await addUser(user);

      setUser({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        password: ""
      });

      navigator("/addUserSuccess");
    } catch(e) {
      console.error("Error: " + e.message);
    }
  }

  return (
    <div className="form-container">
      <div>
        <h2>Register</h2>
      </div>
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Gender
            </label>
          </div>
          <div>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="MALE"
                onChange={handleChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="FEMALE"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={user.email}
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
                value={user.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <button className="btn btn-dark mb-2 m-lg-2" type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}