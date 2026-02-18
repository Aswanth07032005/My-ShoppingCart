import { Col, Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <>
    <Container>
        <Row>
             <div>
        <h1 className="display-1">About</h1>
        <p className="text-muted">Find Your Fashion</p>
      </div>
        </Row>
    </Container>
    <Container>
      <Row>
        <Col md={4}>
          <Image fluid rounded className="m-2" src="https://placehold.co/200" />
        </Col>
        <Col md={8}>
          <p>
            Asw Hub Shop Cart is a modern and user-friendly online shopping
            platform designed to make your shopping experience simple, fast, and
            reliable. We bring together a wide range of quality products at
            affordable prices, all in one place. <br /> Our goal is to provide
            customers with a smooth and secure shopping journey, from browsing
            products to checkout. <br />
            With easy navigation, trusted sellers, and responsive support, Asw
            Hub Shop Cart ensures convenience and satisfaction at every step. We
            focus on quality, transparency, and customer trust. <br /> Whether
            you are looking for daily essentials, electronics, fashion, or
            accessories, Asw Hub Shop Cart is your one-stop destination for
            smart online shopping.
            <br />
            Asw Hub Shop Cart is a smart online shopping platform offering
            quality products at the best prices. We aim to deliver a simple,
            secure, and reliable shopping experience for every customer.
            <br />
            Our mission is to simplify online shopping by combining modern
            technology, transparent pricing, and dependable customer support. We
            continuously improve our services to meet the changing needs of our
            customers and deliver satisfaction with every order. At Asw Hub Shop
            Cart, we believe shopping should be easy, affordable, and
            trustworthy.
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}
export default About;
