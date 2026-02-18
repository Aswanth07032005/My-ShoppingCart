import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";




const AddProduct = () => {

const navigate = useNavigate()
  const dispacth = useDispatch()

  const { Formik } = formik;

  const schema = yup.object().shape({
    productName: yup
      .string()
      .required("Name is required"),
    productPrice: yup
      .number()
      .required("Enter Price"),
    productImage: yup
      .string()
      .required("Please add product img src"),
    productDescription: yup
      .string()
      .required("Enter Product Description"),
  });

  const handleRegister = (values) => {
     values.id = Date.now()
   
   
   dispacth(addProduct(values))
  toast.success("Product Added Succesfully")
  navigate("/list-product")
    
  };

  return (
    <Container className="size my-3 ">
      <Row>
        <Col className="text-center">
          <h1>Add Product</h1>
        </Col>
      </Row>

      <Row>
        <Formik
          validationSchema={schema}
          onSubmit={handleRegister}
          initialValues={{

          productName: "",
          productPrice: "",
          productImage: "",
          productDescription:"",
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
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  name="productName"
                  type="text"
                  placeholder="Enter Product Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.productName && !!errors.productName}
                  isValid={touched.productName && !errors.productName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productName}
                </Form.Control.Feedback>
              </Form.Group>

              {/* EMAIL */}
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="productPrice"
                  type="number"
                  placeholder="Enter Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.productPrice && !!errors.productPrice}
                  isValid={touched.productPrice && !errors.productPrice}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productPrice}
                </Form.Control.Feedback>
              </Form.Group>

              {/* PASSWORD */}
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="productImage"
                  type="text"
                  placeholder="Enter Image Src:"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.productImage&& !!errors.productImage}
                  isValid={touched.productImage && !errors.productImage}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productImage}
                </Form.Control.Feedback>
              </Form.Group>

               <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="productDescription"
                  as={'textarea'}
                  placeholder="Enter Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.productDescription && !!errors.productDescription}
                  isValid={touched.productDescription && !errors.productDescription}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productDescription}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" variant="primary">
               Add
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>
  );
};

export default AddProduct;

