import React from "react";

export default function ProductList({ products }) {

    if (products.length === 0 ){
        return <p><strong>No products found</strong></p>
    }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <strong>{product.name}</strong> - {product.category} - R{product.price} -
          <span style={{ color: product.inStock ? "blue" : "red", marginLeft: "8px" }}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </li>
      ))}
    </ul>
  );
}
