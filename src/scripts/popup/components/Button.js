import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: ${p => p.size || 11}px;
  color: #ffffff;
  letter-spacing: 0.05em;
  border-radius: 0.3em;
  line-height: ${p => (p.slim ? 1.8 : 2.5)}em;
  padding: 0 ${p => (p.slim ? 0.25 : 1.5)}em;
  background: linear-gradient(
    to bottom,
    ${p => {
      if (p.blue) return '#00D1F2, #00B1FF'
      if (p.red) return '#FF9898, #F56868'
      else return '#00F2A7, #02D594'
    }}
  );
  text-shadow: 0 0.07em 0.3em rgba(0, 0, 0, 0.4);
  transition: transform 250ms;
  transform: translateY(-0.1em);
  cursor: pointer;

  :active {
    transform: translateY(0);
  }
`
