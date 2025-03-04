
const Shop = () => {
    return (
      <div className="shop-container">
        <h1 className="shop-title">Welcome to Our Shop</h1>
        <div className="product-list">
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="product-image"
            />
            <h2 className="product-name">Product 1</h2>
            <p className="product-price">$19.99</p>
            <button className="buy-button">Buy Now</button>
          </div>
  
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="product-image"
            />
            <h2 className="product-name">Product 2</h2>
            <p className="product-price">$29.99</p>
            <button className="buy-button">Buy Now</button>
          </div>
  
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="product-image"
            />
            <h2 className="product-name">Product 3</h2>
            <p className="product-price">$39.99</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shop;
  