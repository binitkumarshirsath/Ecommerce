import React from 'react';
import { useParams } from 'react-router';
import FakeStoreApi from '../components/Assets/FakeStoreApi'
import Navbar from './Navbar';

const ProductInfo = () => {
  const {id} =  useParams()
  const selectedItem = FakeStoreApi.find((item =>{
    return item.id == id;
  }));
  
  console.log(FakeStoreApi);
  return (<>
    <Navbar/>
    <div className="product-info-container">
      <div className="product-image-container">
        <img src={selectedItem.image} alt="Product" style={{width : "500px"}} />
        
      </div>
      <div className="product-details-container">
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.description}</p>
        <p>Rating {selectedItem.rating.rate}</p>
        <p>${selectedItem.price}</p>
        {/* Additional product information */}
      </div>
    </div>
    </>
  );
};

export default ProductInfo;

