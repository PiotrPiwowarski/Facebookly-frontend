import {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/UserService";
import Navbar from "../structure/Navbar";

const AllUsers = ({id}) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllUsers();
      setUsers(response.data);
    };
    fetchData().catch((e) => console.error(`Error: ${e.message}`));
  }, []);
  
  return (
    <div className="users-list-container">
      <div>
        <Navbar id={id} />
      </div>
      <div>
        <h2>All Users</h2>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;