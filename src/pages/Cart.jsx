import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  pulsCartItems,
  minusButton,
  removeCartItems,
} from "../redux/productSlice";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";

function Cart() {
  const [removeItem, setRemoveItem] = useState(null);

  const [show, setShow] = useState(false);

  const { cartItems } = useSelector((state) => state.productState);
  console.log(cartItems);
  

  const dispacth = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = (value) => {
     
     
        
    setRemoveItem(value);
    setShow(true);
    console.log(value);
  };

  const removeButton = () => {
    dispacth(removeCartItems(removeItem));
    setShow(false);
    toast.success(`${removeItem.name} removed your cart !`);
  };

  const plusButton = (e) => {
    dispacth(pulsCartItems(e));
   
  };

  const minusItems = (e) => {
    dispacth(minusButton(e));
  };

  const totalPrice = cartItems.reduce((Price, item) => {
    return (Price += item.quantity * item.productPrice);
  }, 0);

  return (
    <Container>
      {cartItems.length === 0 ? (
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Shope Now</h1>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <Row>
            <Col>
              <h1>CartItems</h1>
            </Col>
          </Row>

          <Row>
            <Col className="my-4">
              <Table bordered>
                <thead>
                  <tr>
                    <th className="text-center center-Item ">No</th>
                    <th className="text-center center-Item ">Image</th>
                    <th className="text-center center-Item ">Name</th>
                    <th className="text-center center-Item ">Price</th>
                    <th className="text-center center-Item ">Quantity</th>
                    <th className="text-center center-Item ">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center center-Item ">{index + 1}</td>
                      <td className="text-center center-Item">
                        <Image
                          className="img-size"
                          src={
                            item.productImage ??
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJEKQCNrEx1JCjZttrbKV-2ZcXRoPhDGQIw&s"
                          }
                        />
                      </td>
                      <td className="text-center center-Item">{item.productName}</td>
                      <td className="text-center center-Item text-success">
                        {" "}
                        ₹{item.productPrice}
                      </td>
                      <td className="text-center center-Item">
                        <div className="d-flex justify-content-center">
                          <Button
                            variant="success"
                            onClick={() => plusButton(item.id)}
                          >
                            +
                          </Button>

                          <Form.Control
                            className="formCtrl-size text-center  mx-2"
                            readOnly
                            value={item.quantity}
                          />

                          <Button
                            disabled={item.quantity < 2 ? true : false}
                            onClick={() => minusItems(item.id)}
                            variant="danger"
                          >
                            -
                          </Button>
                        </div>
                      </td>
                      <td className="text-center center-Item text-danger">
                        <MdDelete
                          size={25}
                          onClick={() => handleShow(item)}
                        />
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan={6} className="text-end">
                      <h5>
                        Total Price:{" "}
                        <span className="text-success">₹{totalPrice}</span>
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}

      {/* modal Itme Alert */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={removeButton}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Cart;
