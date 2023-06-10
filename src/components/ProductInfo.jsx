import React from 'react';
import { useParams } from 'react-router';
import FakeStoreApi from '../components/Assets/FakeStoreApi'
import Navbar from './Navbar';

const ProductInfo = () => {
  const {id} =  useParams();
  const selectedItem = FakeStoreApi.find((item =>{
    return item.id === Number(id);
  }));
  
  return (<>
    <Navbar/>
    <div className="product-info-container">
      <div className="product-image-container">
        <img src={selectedItem.image} alt="Product" style={{width : "500px" , height : "600px"}} />
        
      </div>
      <div className="product-details-container">
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.description}</p>
        <p>Rating {selectedItem.rating.rate}</p>
        <p>${selectedItem.price}</p>
      </div>
    </div>
    </>
  );
};

export default ProductInfo;

