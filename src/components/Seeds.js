import React, { createContext,useReducer } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assests/css/Plants.css'


const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default function Seeds() {
  const seedProducts = [
    {
      id: 1,
      name: 'Sunflower Seeds',
      description: 'High-quality sunflower seeds for your garden.',
      price: 160,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJAHQVXuHqcuVmWrlihEHjaFumlf_OsZRbw&usqp=CAU',
    },
    {
      id: 2,
      name: 'Watermelon Seeds',
      description: 'High-quality Watermealon seeds for your garden.',
      price: 100,
      image: 'https://www.goldenmayura.com/wp-content/uploads/2021/04/watermelon-seeds-01-thumb1582265978.jpg',
    },
    {
      id: 3,
      name: 'Tomato Seeds',
      description: 'High-quality Tomato seeds for your garden.',
      price: 70,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8yiiu271l-4qD2Yuz91yjvN2ceLpHSV9JA&usqp=CAU',
    },
    {
      id: 4,
      name: 'Apple Seeds',
      description: 'High-quality Apple seeds for your garden.',
      price: 150,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51JOVU000sL._AC_UL600_SR600,600_.jpg',
    },
    {
      id: 5,
      name: 'Pumkin Seeds',
      description: 'High-quality Pumkin seeds for your garden.',
      price: 120,
      image: 'https://hips.hearstapps.com/hmg-prod/images/how-reuse-pumpkin-seeds-1666947599.jpg?crop=1.00xw:0.753xh;0,0.247xh&resize=1200:*',
    },
    {
      id: 6,
      name: 'Orange Seeds',
      description: 'High-quality Orange seeds for your garden.',
      price: 200,
      image: 'https://cdn.mos.cms.futurecdn.net/f42agxokV7uhwbKtHruNHU.jpg',
    },
    {
      id: 7,
      name: 'cucumber Seeds',
      description: 'High-quality Watermealon seeds for your garden.',
      price: 100,
      image: 'https://qph.cf2.quoracdn.net/main-qimg-623d62575134eb7ba145cd5e0476c991.webp',
    },
    {
      id: 8,
      name: 'grapes Seeds',
      description: 'High-quality Tomato seeds for your garden.',
      price: 70,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gJUC5SEcV2_xDRgfGngcfMOEa2tx_MdczQ&usqp=CAU',
    },
    {
      id: 9,
      name: 'Pepper Seeds',
      description: 'High-quality Apple seeds for your garden.',
      price: 150,
      image: 'https://rukminim1.flixcart.com/image/850/1000/k6ci8i80/plant-seed/n/q/h/50-premium-extra-rich-black-pepper-piper-nigrum-seeds-50-gram-original-imafzzmfzgspggpk.jpeg?q=20',
    },
    {
      id: 10,
      name: 'Papaya Seeds',
      description: 'High-quality Pumkin seeds for your garden.',
      price: 120,
      image: 'https://images.healthshots.com/healthshots/en/uploads/2023/02/11192419/papaya-seeds.jpg',
    }
  ];

  
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  
  const addToCart = (seed) => {
    dispatch({ type: 'ADD_TO_CART', payload: seed });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      <Navbar />

      <div style={{ width: '100%', textAlign: 'center', padding: '50px 0' }}>
        <h1>Seeds for Sale</h1>
        <h5>Choose from our high-quality seeds for a thriving garden.</h5>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {seedProducts.map((seed) => (
          <div className='plant-box' key={seed.id} style={boxStyle}>
            <img src={seed.image} alt={seed.name} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
            <div style={{ marginTop: '10px' }}>
              <h3>{seed.name}</h3>
              <p>{seed.description}</p>
              <p>₹{seed.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(seed)}
                style={{ cursor: 'pointer', padding: '8px 16px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px' }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </CartContext.Provider>
  );
}

const boxStyle = {
  width: '250px',
  height: '450px', 
  border: '1px solid #ccc',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
};
