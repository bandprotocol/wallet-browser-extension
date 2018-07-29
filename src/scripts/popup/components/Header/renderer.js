import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  padding: 12px 15px;
  display: flex;

  :before {
    content: '';
    position: absolute;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), transparent);
    top: 0;
    left: 0;
    right: 0;
    bottom: -30px;
    z-index: 0;
  }

  :after {
    content: '';
    position: absolute;
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    bottom: 0;
    left: 15px;
    right: 15px;
    z-index: 1;
  }
`

const LogoContainer = styled.div`
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 3px;
  z-index: 1;
`
const Logo = styled.img`
  width: 15px;
`

const NetworkContainer = styled.div`
  flex: 1;
  color: #ffffff;
  margin-left: 10px;
  z-index: 1;
`
const BandProtocol = styled.div`
  font-size: 12px;
  font-weight: 600;
`
const Network = styled.div`
  font-size: 9px;
`

export default props => (
  <Container>
    <LogoContainer>
      <Logo src="images/logo.png" />
    </LogoContainer>
    <NetworkContainer>
      <BandProtocol>BAND Protocol</BandProtocol>
      <Network>Dev Network</Network>
    </NetworkContainer>
  </Container>
)
