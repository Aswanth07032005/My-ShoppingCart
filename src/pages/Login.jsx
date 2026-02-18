import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../redux/userSlice";


const Login = () => {
 
  const {userAuthenticated} = useSelector((state)=>(state.userState)) 
  
  const {users} = useSelector((state)=>(state.userState))
  
  const dispatch = useDispatch()

  const navigate  = useNavigate()
  
  const { Formik } = formik;

  const schema = yup.object().shape({
   
    email: yup.string().required("Please enter your email").email("Enter your valid email"),
    password: yup.string().required("Please enter password").min(6,"Please enter minimum 6 chareters")
  });


  const handleRegister=(value)=>{
     
    const user = users.find((item)=>(
      item.email  == value.email
    
    )) 

    if (!user) {
      toast.error("Your Emaii invalid")
      return
    }
    
   if (user.password !== value.password){
      toast.error("Password is Incorect")
      return
   }

    
   
    
   dispatch(userLogin(user))
    toast.success("You have Logined")
    
    navigate("/")
  } 


  return (
    <>
   {userAuthenticated ? (
    <Navigate to="/" />
   ):( <Container className="mt-3 justify-content-center  Login-size ">
      <Row>
        <Col className="my-3 text-center">
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        
        <Col>
          <Formik
            validationSchema={schema}
            onSubmit={handleRegister}
            initialValues={{
             
              email: "",
              password: "",
            }}
            validateOnMount={false}
            validateOnBlur={true}
          >
            {({ handleSubmit, handleChange,touched,handleBlur, errors }) => (
              
              <Form noValidate onSubmit={handleSubmit}>

               




                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="User@gmail.com"
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                    isValid={touched.email && !errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="password"
                    type="password"
                    placeholder="xxxxxxxxxx"
                    onBlur={handleBlur}
                    isInvalid={ touched.password &&!!errors.password}
                    isValid={touched.password && !errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  
                    
                  </Form.Control.Feedback>
                </Form.Group>
                   
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                  Login
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
        <Row>
          <Col className="my-3 text-center">
         If you don’t have an account, <Link to={'/register'}>please register</Link>
          </Col>
        </Row>
      </Row>
    </Container>)}
    </>
  );
};
export default Login;
