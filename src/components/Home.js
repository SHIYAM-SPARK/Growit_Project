import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import '../assests/css/Home.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar/>
      <div className='desc' style={{ width: '100%', textAlign: 'center', padding: '50px 0' }}>
        <h1>Welcome to Growit!</h1>
        <h5>Discover amazing products and find what you need.</h5>
        <h5>GrowIt: Elevate your gardening experience with our app, where you'll discover a curated </h5>
        <h5>collection of premium plants, expert tools, and stylish accessories – all tailored to help you </h5>
        <h5>cultivate a thriving and beautiful garden.</h5>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      <Link to='/seeds' className='card'>
        <div className="card-content" style={boxStyle}>
          <img src={'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-a-bag-of-sprinkled-melon-seeds-illustration-image_1470577.jpg'} alt="Seeds" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px',textDecorationLine:'none' }}>Seeds</p>
        </div>
      </Link>
      <br/>
      <br/>
      <Link to='/plants' className='card'>
        <div className="card-content" style={boxStyle}>
          <img src={'https://i.pinimg.com/474x/f7/8d/db/f78ddb347a04362c1be5453e5e5693e0.jpg'} alt="Plants" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' ,textDecoration:'none' }}>Plants</p>
        </div>
        </Link>
        <br/>
        <br/>
        <Link to='/tools' className='card'>
        <div className="card-content" style={boxStyle}>
          <img src={'https://i0.wp.com/mnmremovals.co.uk/wp-content/uploads/2012/10/How-To-Pack-Garden-Equipment-Safely-When-Moving-Home.png?fit=640%2C480&ssl=1'} alt="Tools" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' }}>Tools</p>
        </div>
       </Link>
      </div>
      <Footer />
    </>
  );
}

const boxStyle = {
  width: '200px',
  height: '250px', 
  border: '1px solid #ccc',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease-in-out', 
  textDecoration:'none',
};

