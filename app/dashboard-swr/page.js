'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch(`http://localhost:4000/dashboard`);
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, isLoading, error } = useSWR('dashboard', fetcher);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>An error has occurred</h2>;
  }

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <h2>Posts - {data?.posts}</h2>
        <h2>Likes - {data?.likes}</h2>
        <h2>Followers - {data?.followers}</h2>
        <h2>Following - {data?.following}</h2>
      </div>
    </>
  );
};

export default DashboardSWR;
