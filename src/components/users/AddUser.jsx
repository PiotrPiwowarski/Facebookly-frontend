import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {addUser} from "../../services/UserService";

const AddUser = () => {

  const navigator = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "MALE",
    email: "",
    password: ""
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
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
    } catch(err) {
      setError("Something went wrong!")
    }
  }

  return (
    <div className="form-container main">
      <div>
        <h2>Register</h2>
      </div>
      {error !== null ? <div>
        <p className="error">{error}</p>
      </div> : ""}
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                required
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
                required
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
                checked={user.gender === "MALE"}
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
                required
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
                required
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

export default AddUser;