import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap";
import "./ListProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { removeProductItems } from "../redux/productSlice";
import { toast } from "react-toastify";

function ListProduct() {

 const {product} = useSelector((state)=>(state.productState)) 

 const [removeItem,setRemoveItem] = useState(null)

 const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (productId) =>{
    console.log(productId);
    
     setRemoveItem(productId)
     setShow(true)
  }

 const handelReomveItem = () => {
    dispatch(removeProductItems(removeItem))
    setShow(false)
    toast.success(`${removeItem.productName} Removed`)
 }



   
 let truncateString = (str, maxlen) => {
    if (str.length > maxlen) {
      return str.substring(0, maxlen)+"..."
    }
    return str;
  };

  return (<>
   {product.length === 0 ? (
   <Container>
    <Row>
      <Col className="text-center mt-5">
         <h1>Add Your Product Now!</h1>
      </Col>
    </Row>
   </Container>
    ):( <Container>
      <Row>
        <Col className="text-center my-3">
          <h1>Product List</h1>
        </Col>
      </Row>
      <Row>
      <Col>
       <Table  bordered >
      <thead>
        <tr>
          <th className="table-contents-center">No</th>
          <th className="table-contents-center">Image</th>
          <th className="table-contents-center">Product Name</th>
          <th className="table-contents-center">Price</th>
          <th className="table-contents-center">Description</th>
          <th className="table-contents-center">Edit</th>
          <th className="table-contents-center">Remove</th>
        </tr>
      </thead>
      <tbody>
      {product.map((item,index)=>(
          <tr key={index}>
          <td className="table-contents-center">{index+1}</td>
          <td className="table-contents-center"><Image className="img-size" src={item.productImage} /></td>
          <td className="table-contents-center">{truncateString(item.productName,15)}</td>
          <td className="table-contents-center">₹{item.productPrice}</td>
          <td className="table-contents-center">{truncateString(item.productDescription,15)}</td>
          <td className="table-contents-center">
          <Link to={`/edit-product/${item.id}`}>
            <MdEditCalendar size={18} 
          /></Link>
          </td>
          <td className="table-contents-center"><MdDelete onClick={()=>handleShow(item)} size={20} /></td>
        </tr>
      ))}
       
      </tbody>
    </Table>
      </Col>
      </Row>
    </Container>) }


     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>  Are you sure! remove this product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            No
          </Button>
          <Button variant="outline-danger" onClick={handelReomveItem}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
}

export default ListProduct;
