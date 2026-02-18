import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Register.css";
import * as formik from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {  userRegister } from "../redux/userSlice";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";


const Register = () => {

  const {userAuthenticated} = useSelector((state)=>(state.userState))

const navigate = useNavigate()

const dispatch = useDispatch()

  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(6, "Enter minimum 6 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter valid email"),
    password: yup
      .string()
      .required("Password is required"),
  });

  const handleRegister = (values) => {

    values.status = true;
    values.role = "User";

    values.id = Date.now()

    dispatch(userRegister(values))
    navigate("/login")
    toast.success("You have Registerd Succesfully")
    
    
  };

  return (
    <>
   {userAuthenticated ? (
    <Navigate to="/"/>
   ):(
     <Container className="size my-5 ">
      <Row>
        <Col className="text-center">
          <h1>Register</h1>
        </Col>
      </Row>

      <Row>
        <Formik
          validationSchema={schema}
          onSubmit={handleRegister}
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
           validateOnMount={false}
            validateOnBlur={true}   
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              {/* NAME */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.name && !!errors.name}
                  isValid={touched.name && !errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              {/* EMAIL */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.email && !!errors.email}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              {/* PASSWORD */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.password && !!errors.password}
                  isValid={touched.password && !errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" variant="primary">
                  Register
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>
   )}
   </>
  );
};

export default Register;

