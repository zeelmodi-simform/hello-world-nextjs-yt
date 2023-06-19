import React from 'react';

export const revalidate = 30;
// NOTE: try it with 30 also

const ProductsList = async () => {
  const { products } = await getProducts();
  return (
    <>
      <h1>List of Products</h1>
      {products.map((product) => {
        return (
          <div key={product?.id}>
            <h2>
              {product?.id} {product?.title} {product?.price}{' '}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ProductsList;

export async function getProducts() {
  console.log('Generating / Regenerating ProductList');
  const response = await fetch(`http://localhost:4000/products`);
  const data = await response.json();

  return {
    products: data,
  };
}
