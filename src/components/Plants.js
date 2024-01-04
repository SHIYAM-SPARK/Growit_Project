import React, { createContext, useContext, useReducer } from 'react';
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

export default function Plants() {
  const seedProducts = [
    {
      id: 1,
      name: 'Hibiscus',
      description: 'Vibrant hibiscus plants for sale, adding a burst of color to your garden..',
      price: 200,
      image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/5/23/0/shutterstock_211989697_topimages_chinese-hibiscus.jpg.rend.hgtvcom.1280.1280.suffix/1527091860274.jpeg',
    },
    {
      id: 2,
      name: 'Mango',
      description: 'Fresh and flavorful mangoes plant for sale – indulge in tropical sweetness!.',
      price: 300,
      image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/515uHDsvVuL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 3,
      name: 'Jasmine',
      description: 'Elevate your garden with enchanting fragrance of jasmine plants for sale now!.',
      price: 200,
      image: 'https://m.media-amazon.com/images/I/61P-M-hE5NL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 4,
      name: 'chikoo',
      description: 'Bring the sweet and taste chikoo to your garden with chikoo plants',
      price: 150,
      image: 'https://www.plantsguru.com/image/cache/data/Avenue%20Tree/plants-guru-avenue-tree-cheeku-plant-800x800.png',
    },
    {
      id: 5,
      name: 'Neem',
      description: 'Enhance your garden with our Neem plants,known for their natural properties..',
      price: 120,
      image: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-neem-tree-azadirachta-indica-plant.jpg?v=1634224777',
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
        <h1>Plants for Sale</h1>
        <h5>Transform your space with our vibrant selection of plants for sale, bringing nature's beauty to your doorstep..</h5>
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
  height: '500px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
};
