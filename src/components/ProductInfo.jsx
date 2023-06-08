import React from 'react';

const ProductInfo = () => {
  return (
    <div className="product-info-container">
      <div className="product-image-container">
        <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/monitor/r/5/v/-original-imaggd38vfwc6h7v.jpeg?q=70" alt="Product" />
      </div>
      <div className="product-details-container">
        <h2>Product Title</h2>
        <p>Product Description</p>
        <p>Product Price</p>
        {/* Additional product information */}
      </div>
    </div>
  );
};

export default ProductInfo;

