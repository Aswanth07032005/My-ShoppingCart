import { Container, Row } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import ProductItems from "../components/ProductItems";
import { useSelector } from "react-redux";

function Home() {

  const {product} = useSelector((state)=>(state.productState))

  return (
    <>
      <HomeCarousel />
      <h3 className="m-3 text-center text-muted">Featured Brands</h3>
      <Container>
        <Row>
          {product.map((item, index) => (
            <ProductItems key={index} item={item} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
