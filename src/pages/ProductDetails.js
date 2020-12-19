import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { CartContext } from "../context/cart";
import { ProductContext } from "../context/products";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const product = products.find(item => item.id === parseInt(id));

  if(products.length === 0) {
    return <Loading/>;
  }
  else {
    const {image, title, price, description} = product;
    return <section className="single-product">
      <img src={image} alt={title} className="single-product-image"/>
      <article>
        <h1>{title}</h1>;
        <h2>{price}</h2>;
        <p>{description}</p>;
        <button className="btn btn-primary btn-block" onClick={() => {
          addToCart(product);
history.push("/cart");
        }}>add to cart</button>
      </article>
    </section>
  }

  return <h1>hello from product details page. product id is : {product.id}</h1>;
}
