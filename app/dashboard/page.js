'use client';

import { getSession, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {

  const [sessionLoading, setSessionLoading] = useState(true)

  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);


  useEffect(() => {
    const securePage = async () => {
      const session = await getSession()
      if (!session) {
        signIn()
      }
      else {
        setSessionLoading(false)
      }
    }

    securePage()
  }, [])
  

  useEffect(() => {

    
    async function fetchDashboardData() {
      const response = await fetch(`http://localhost:4000/dashboard`);
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (sessionLoading) {
    return <h2>Loading...</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <h2>Posts - {dashboardData?.posts}</h2>
        <h2>Likes - {dashboardData?.likes}</h2>
        <h2>Followers - {dashboardData?.followers}</h2>
        <h2>Following - {dashboardData?.following}</h2>
      </div>
    </>
  );
};

export default Dashboard;
