'use client'

import Link from 'next/link'
import React from 'react'

import { signIn, signOut, useSession } from 'next-auth/react';

import  './Navbar.css'


const Navbar = () => {

  const { status, data } = useSession()

  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav  ${!data && status === 'loading' ? 'loading' : 'loaded'}
      `}>
        <li>
          <Link href='/' legacyBehavior>
            Home
          </Link>
        </li>
        <li>
          <Link href='/dashboard' legacyBehavior>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog' legacyBehavior>
            Blog
          </Link>
        </li>

        {status !== 'loading' && !data && (
        <li>
          <Link href='/api/auth/signin' legacyBehavior>
            Sign In
          </Link>
          {/* <button onClick={(e) => {
              e.preventDefault();
              signIn('github')
            }}>
              Sign In
            </button> */}
        </li>
         )}
        {data && (
        <li>
          <Link href='/api/auth/signout' legacyBehavior>            
            Sign Out          
          </Link>
          {/* <a onClick={(e) => {
            e.preventDefault();
            signOut()
          }}>
            Sign Out
          </a> */}
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar
