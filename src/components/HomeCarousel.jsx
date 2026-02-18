import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel() {
  return (
    <Carousel className='mt-1'>
      <Carousel.Item className='p-2'>
       <Image className='w-100 ' src='https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6e837a30ad35d4c2.png?q=60'  />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='p-2'>
       <Image className='w-100' src='https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/cee9c14ade480a7a.png?q=60'  />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='p-2'>
       <Image className='w-100' src='https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/59c2b919e17ab3c9.png?q=60'  />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;