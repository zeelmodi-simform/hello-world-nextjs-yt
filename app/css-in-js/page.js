'use client';

import React from 'react'
import { styled } from 'styled-components'

// color: ${({ theme }) => theme?.colors?.primary};
// color: ${({ theme }) => theme?.colors?.primary};
const Title = styled.h1`
font-size: 50px;
`

const CSSJS = () => {
  return (
      <div style={{
        color: 'red'
    }}>Hello World</div>
  )
}

export default CSSJS