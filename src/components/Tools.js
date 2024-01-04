import React, { createContext, useContext, useReducer } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assests/css/Plants.css'

const CartContext = createContext();

// Cart reducer to handle actions
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

export default function Tools() {
  const seedProducts = [
    {
      id: 1,
      name: 'Watering can',
      description: 'Efficiently water your garden with our precision-designed watering cans.',
      price: 800,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXMYfcZ9Yv7K4Qr2L7qLw-tZZgmTIXuto1w&usqp=CAU',
    },
    {
      id: 2,
      name: 'Rake',
      description: 'Keep your garden tidy with versatile rake for efficient leaf and debris clearing.',
      price: 2000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLt0HzNyh50nIFopqh6h1ge35_D3hocqYcQ&usqp=CAU',
    },
    {
      id: 3,
      name: 'hedge shears',
      description: 'Trim and shape hedges effortlessly with our precision hedge shears.',
      price: 1500,
      image: 'https://jjideapasumaibhoomi.com/wp-content/uploads/2022/09/nurserylive-gardening-tools-hedge-shear-with-wooden-handle-no-mmi-78-gardening-tool-16968925151372.jpg',
    },
    {
      id: 4,
      name: 'Shovel',
      description: 'Dig and plant effortlessly with our sturdy and versatile garden shovel.',
      price: 1500,
      image: 'https://images-cdn.ubuy.co.in/6571d88beab92e3c6d1b51a7-shovel-for-digging-28-inch-small-round.jpg',
    },
    {
      id: 5,
      name: 'Green Hose',
      description: 'Easily water your garden with our flexible and durable green hose.',
      price: 900,
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/hose-pipe/d/q/w/13-heavy-duty-3-layered-braided-water-hose-pipe-size-0-5-inch-original-imagzzshzdrbzwsg.jpeg?q=20',
    }
  ];

  // Cart state and dispatch
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  // Function to add item to cart
  const addToCart = (seed) => {
    dispatch({ type: 'ADD_TO_CART', payload: seed });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      <Navbar />

      <div style={{ width: '100%', textAlign: 'center', padding: '50px 0' }}>
        <h1>Tools for Sale</h1>
        <h5>Discover essential gardening tools on our app – from precise pruning shears to durable shovels, making gardening a breeze.</h5> 
        <h5>Cultivate effortlessly with the right tools at your fingertips</h5>
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
  height: '500px', // Adjust height as needed
  border: '1px solid #ccc',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
};
