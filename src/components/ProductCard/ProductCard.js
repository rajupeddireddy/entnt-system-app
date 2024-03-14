
import './productCard.css'

const ProductCard = props => {
  const {productData} = props
  const {title, brand, image_url, rating, price, category, stockQuantity} = productData

  return (
    <li className="product-item">
      <div className="link-item">
        <img src={image_url} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand"> {category}</p>
        <p className="brand"> by {brand}</p>
        <p className="brand  stock"> Stock Quantity: {stockQuantity}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </div>
    </li>
  )
}
export default ProductCard
