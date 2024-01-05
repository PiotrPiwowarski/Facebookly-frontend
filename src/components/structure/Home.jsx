import {useNavigate} from "react-router-dom";
const Home = () => {

  const navigator = useNavigate();

  const login = () => {
    navigator("/login");
  }

  const addUser = () => {
    navigator("/addUser");
  }

  return (
    <div className="main">
      <button className="home-btn btn btn-dark mb-2 m-lg-2" onClick={login}>Login</button>
      <button className="home-btn btn btn-dark mb-2 m-lg-2" onClick={addUser}>Register</button>
    </div>
  );
}

export default Home;