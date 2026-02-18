import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../redux/productSlice";
import { toast } from "react-toastify";






const EditProduct = () => {

  const {product} = useSelector((state)=>(state.productState))
  
    const  {id} = useParams();

  const findProduct = product.find((item)=>(item.id === Number(id)))
 
 
  const dispatch = useDispatch()

 
 const navigate = useNavigate()

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



  const handleEditProduct = (values) => {
       
       values.id = Number(id)
       console.log(values.id);
       
     
       
       
    dispatch(updateProduct(values))
     navigate("/list-product")
     toast.success(`${values.productName} as Updated `)
  };



  

  return (
    <Container className="size my-3 ">
      <Row>
        <Col className="text-center">
          <h1>Edit Product</h1>
        </Col>
      </Row>

      <Row>
        <Formik
          validationSchema={schema}
          onSubmit={handleEditProduct}
          initialValues={{

          productName:findProduct?.productName ??"",
          productPrice:findProduct?.productPrice?? "",
          productImage: findProduct?.productImage??"",
          productDescription:findProduct?.productDescription??"",
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
            values,
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
                  value={values.productName}
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
                  value={values.productPrice}
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
                  value={values.productImage}
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
                  value={values.productDescription}
                  isInvalid={touched.productDescription && !!errors.productDescription}
                  isValid={touched.productDescription && !errors.productDescription}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.productDescription}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" variant="primary">
                Update
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>
  );
};

export default EditProduct;

