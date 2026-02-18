import { Button, Card, Col } from "react-bootstrap";
import "./Productitems.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../redux/productSlice";






function ProductItems({item}) {

  const {product} = useSelector((state)=>(state.productState))

  const dispatch = useDispatch()

  const handelAddCart=()=>{
   dispatch(addCartItems(product))
  
  console.log(product);
  
  
   
   
  }
  


  

  let truncateString = (str, maxlen) => {
    if (str.length > maxlen) {
      return str.substring(0, maxlen);
    }
    return str;
  };



  return (
    <Col sm={6} md={4} lg={3} xl={2} xxl={1}>
      <Card className="m-2 Font">
        <Link to={`/product-detils/${item.id}`}>
          <Card.Img
            className="p-3 w-100 img-size"
            variant="top"
            src={item?.productImage?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJEKQCNrEx1JCjZttrbKV-2ZcXRoPhDGQIw&s"}
          />
        </Link>
        <Card.Body>
          <Card.Title>{truncateString(item.productName,10)}</Card.Title>
          <Card.Text>
            Price :
            <span className="text-success">
              ₹{item.productPrice }
            </span>
          </Card.Text>
          <Card.Text>{truncateString(item.productDescription,35)}</Card.Text>
          <Button variant="primary" onClick={handelAddCart} >Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductItems;
