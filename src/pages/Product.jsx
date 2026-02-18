import { Container, Row } from "react-bootstrap";
import ProductItems from "../components/ProductItems";
import { useSelector } from "react-redux";

function Product() {


     const {product} = useSelector((state)=>(state.productState))

    return(
       <Container className="mt-4">
        <Row>
            {product.map((item,index)=>(
                <ProductItems key={index} item={item} />
            ))}
        </Row>
       </Container>
    )
}

export default Product;