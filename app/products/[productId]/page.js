import React from 'react';

export const dynamicParams = true;
export const revalidate = 10;

export async function generateStaticParams() {
  //   // NOTE: will be used when dynamicParams=false
  //   const { posts } = await getData();

  //   return posts.map((post) => ({ postId: post.id?.toString() }));

  return [{ productId: '1' }]; // NOTE: will be use when dynamicParams are true
}

const ProductDetails = async ({ params: { productId } }) => {
  const { product } = await getProductDetails(productId);
  return (
    <div>
      <h2>
        {product?.id} {product?.title} {product?.price}{' '}
      </h2>
      <p>{product?.description}</p>
      <hr />
    </div>
  );
};

export default ProductDetails;

export async function getProductDetails(productId) {
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const data = await response.json();
  return {
    product: data,
  };
}
