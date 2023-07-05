'use client';

import React from 'react'
import { styled } from 'styled-components'

// color: ${({ theme }) => theme?.colors?.primary};
const Title = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme?.colors?.primary};
`

const CSSJS = () => {
  return (
      <Title style={{
        color: 'red'
    }}>Hello World</Title>
  )
}

export default CSSJS