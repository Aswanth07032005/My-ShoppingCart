import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function ProductDetails() {



   const {product} = useSelector((state)=>(state.productState))



  let { id } = useParams(); // useParams Hook dedfined "id"

  let findItem = product.find((item) => item.id === Number(id));
  
  
   
  const addCart = () =>{
   
   console.log(findItem);
   
    
      
       
  }

  return (
   <Container className="my-5">
    <Row>
        <Col md={4}>
            <Image className="w-100" src={findItem?.productImage ??  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJEKQCNrEx1JCjZttrbKV-2ZcXRoPhDGQIw&s"} />
        </Col>
        <Col md={8}>
          <ListGroup variant="flush">
         <ListGroup.Item> <h1 className="fs-5">{findItem.category}</h1> </ListGroup.Item>   
        <ListGroup.Item> <h3>{findItem.productName}</h3> </ListGroup.Item>
        <ListGroup.Item> <h5> Price: <span className="text-success">₹{findItem.productPrice}</span> </h5> </ListGroup.Item>
        <ListGroup.Item> <p className="fs-5">{findItem.productDescription}</p> </ListGroup.Item>
         </ListGroup>
         <Button variant="primary" onClick={addCart} className="m-3">Add to Cart</Button>
        </Col>
    </Row>
   </Container>
  )
}
export default ProductDetails;
