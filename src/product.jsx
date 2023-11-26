import {Outlet} from 'react-router-dom';
import Navbar from './navbar';
import NavbarStyle from './navbar.module.css';

const Product = () => {
    return (
        <section>
        <h1>Product</h1>
       <Navbar navLinks={{key1:"Mobile",key2:"Watches",key3:"Laptop",key4:"Television"}}
       navPaths={{url1:"mobile",url2:"watches",url3:"laptop",url4:"television"}}
       className={NavbarStyle.child} anchorClass={NavbarStyle.name}/>

  
        <div style={{border:"2px solid red",margin:"50px auto",width:"600px",height:"400px"}}>
           <Outlet/> 
        </div>
        </section>
    );
}

export default Product;
