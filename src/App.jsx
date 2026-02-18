import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Footer from './components/Footer';
import Product from './pages/Product';
import About from './pages/About';
import ProductDetails from './pages/ProductDetils';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import Register from './pages/Register';
import AddProduct from './admin/AddProduct';
import ListProduct from './admin/ListProduct';
import EditProduct from './admin/EditProduct';
import ProtectedRoutes from './utils/ProtectedRoutes';
import UsersList from './admin/UsersList';



// const productsItems = [
//   {
//     id: 1,
//     name: "iPhone 15",
//     price: 79999,
//     category: "Mobile",
//     image:
//       "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
//     details:
//       "Apple iPhone 15 with A16 Bionic chip, 128GB storage, 48MP dual camera system, Super Retina XDR display and iOS experience.",
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S23",
//     price: 69999,
//     category: "Mobile",
//     image:
//       "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/0/g/-original-imah4zp7fvqp8wev.jpeg?q=70",
//     details:
//       "Samsung Galaxy S23 5G powered by Snapdragon processor, Dynamic AMOLED display, 50MP camera and premium glass design.",
//   },
//   {
//     id: 3,
//     name: "HP Laptop",
//     price: 58999,
//     category: "Laptop",
//     image:
//       "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/j/m/p/-original-imahgpw3bq4h8yky.jpeg?q=70",
//     details:
//       "HP Laptop with Intel Core processor, 8GB RAM, 512GB SSD, Windows 11 and 15.6-inch Full HD display.",
//   },
//   {
//     id: 4,
//     name: "Dell Inspiron",
//     price: 55999,
//     category: "Laptop",
//     image:
//       "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/i/b/-original-imahgx8xfjr3aah3.jpeg?q=70",
//     details:
//       "DELL Inspiron 15 MSO'24 with Backlit Keyboard and Fingerprint Sensor, Intel Core i5 13th Gen, 16GB RAM, 512GB SSD, Windows 11.",
//   },
//   {
//     id: 5,
//     name: "Sony Headphones",
//     price: 4999,
//     category: "Accessories",
//     image:"data:image/jpeg;base64,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",
//     details:
//       "Sony wireless headphones with noise isolation, deep bass, long battery life and comfortable over-ear design.",
//   },
//   {
//     id: 6,
//     name: "Boat Earbuds",
//     price: 1999,
//     category: "Accessories",
//     image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/z/r/n/-original-imahfczvrftznu58.jpeg?q=70",
//     details:
//       "boAt true wireless earbuds with ENx technology, fast charging support, immersive sound and touch controls.",
//   },
//   {
//     id: 7,
//     name: "Apple Watch",
//     price: 29999,
//     category: "Wearables",
//     image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/a/-original-imah4jndwgy9yfhz.jpeg?q=70",
//     details:
//       "Apple Watch with fitness tracking, heart rate monitoring, Retina display and seamless iPhone connectivity.",
//   },
//   {
//     id: 8,
//     name: "Samsung Smart Watch",
//     price: 24999,
//     category: "Wearables",
//     image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/l/a/-original-imahgh9twzzte3uf.jpeg?q=70",
//     details:
//       "Samsung smart watch with AMOLED display, health tracking features, GPS support and long-lasting battery.",
//   },
//   {
//     id: 9,
//     name: "Canon Camera",
//     price: 45999,
//     category: "Camera",
//     image: "https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70",
//     details:
//       "Canon DSLR camera with high-resolution sensor, optical zoom lens, Full HD video recording and professional controls.",
//   },
//   {
//     id: 10,
//     name: "JBL Speaker",
//     price: 7999,
//     category: "Speaker",
//     image: "https://rukminim2.flixcart.com/image/612/612/l27wtjk0/speaker/i/4/e/-original-imagdhhg2f7zjbt7.jpeg?q=70",
//     details:
//       "JBL portable Bluetooth speaker with powerful bass, waterproof design and long battery backup.",
//   },
//   {
//     id: 11,
//     name: "iPhone 15",
//     price: 79999,
//     category: "Mobile",
//     image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
//     details:
//       "Apple iPhone 15 with A16 Bionic chip, 128GB storage, 48MP dual camera system, Super Retina XDR display and iOS experience.",
//   },
//   {
//     id: 12,
//     name: "Samsung Galaxy S23",
//     price: 69999,
//     category: "Mobile",
//     details:
//       "Samsung Galaxy S23 with Snapdragon 8 Gen 2 processor, Dynamic AMOLED display, pro-grade camera and One UI.",
//   },
//   {
//     id: 13,
//     name: "Nothing Phone (2)",
//     price: 44999,
//     category: "Mobile",
//     details:
//       "Nothing Phone (2) featuring Glyph Interface, Snapdragon 8+ Gen 1 chipset, clean Android experience and premium design.",
//   },
//   {
//     id: 14,
//     name: "Realme GT Neo 3",
//     price: 36999,
//     category: "Mobile",
//     details:
//       "Realme GT Neo 3 with Dimensity 8100 processor, 120Hz AMOLED display and fast charging support.",
//   },
//   {
//     id: 15,
//     name: "Redmi Note 13 Pro",
//     price: 25999,
//     category: "Mobile",
//     details:
//       "Redmi Note 13 Pro with 200MP camera, AMOLED display, Snapdragon processor and long battery life.",
//   },

// ];



function App() {
  return(
  <BrowserRouter>
  <ToastContainer position='bottom-center'  autoClose={2000}  />
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/product' element={<Product    />} />
    <Route path='/about' element={<About/> } />
    <Route path='/product-detils/:id' element={<ProductDetails/>} />
    <Route path='cart-page' element={<Cart/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/add-product' element={<ProtectedRoutes><AddProduct/></ProtectedRoutes>} />
    <Route path='/list-product' element={<ProtectedRoutes><ListProduct/></ProtectedRoutes>} />
    <Route path="/edit-product/:id" element={<ProtectedRoutes><EditProduct/></ProtectedRoutes>} />
    <Route path='/users-list' element={<ProtectedRoutes><UsersList/></ProtectedRoutes>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
