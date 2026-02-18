import { Col, Container, Form, Row, Table } from "react-bootstrap";
import "./UsersList.css";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { upadateUserRole } from "../redux/userSlice";
import { toast } from "react-toastify";

function UsersList() {
  const { users } = useSelector((state) => state.userState);
   const dispacth = useDispatch()


const updateRole = (item,role) =>{

  const  id = item.id
  
  dispacth(upadateUserRole({id,role}))

  toast.success(`${item.name}’s role has been successfully changed to ${role}`)
}

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Users List</h1>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Table bordered>
            <thead>
              <tr>
                <th className="td-center-align">No</th>
                <th className="td-center-align">Name</th>
                <th className="td-center-align">Email</th>
                <th className="td-center-align">Status</th>
                <th className="td-center-align">Role</th>
                <th className="td-center-align">Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td className="td-center-align">{index + 1}</td>
                  <td className="td-center-align">{item.name}</td>
                  <td className="td-center-align">{item.email}</td>
                  <td className="td-center-align">
                    {item.status === true ? "Active" : "Inactive"}
                  </td>

                  <td className="td-center-align">

                    <Form.Select  defaultValue={item.role} onChange={(event)=>updateRole(item,event.target.value)}>
                      <option className="td-center-align" value="admin">Admin</option>
                      <option className="td-center-align" value="user">User</option>
                      <option className="td-center-align" value="seller">Seller</option>
                    </Form.Select>
                  </td>
                  

                  <td className="td-center-align">
                    <MdDelete />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default UsersList;
