// 'use client';

import React from 'react';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ProductDetails = ({ params }) => {
  const productId = params?.productId;
  return <h1>Details about Product {productId}</h1>;
};

export default ProductDetails;
