import React from 'react'
import styled from 'styled-components'
import Vote from './Vote'

const Container = styled.div`
  margin-bottom: 10px;
  width: 100%;
`

const Token = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 6px 0 6px 12px;
  display: flex;
  align-items: center;
  width: 100%;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Name = styled.div`
  font-weight: 500;
  color: #784fe9;
  font-size: 12px;
`
const Host = styled.div`
  font-size: 10px;
  color: #747474;
`
const Balance = styled.div`
  flex: 0 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: solid 0.5px #784fe9;
`
const BalanceAmount = styled.div`
  font-weight: 500;
  color: #784fe9;
  font-size: 12px;
`
const Unit = styled.div`
  font-size: 10px;
  color: #747474;
`

const VerifiedBadgeContaier = styled.div`
  display: inline-block;
  background: linear-gradient(to bottom, #00f2a7, #02d594);
  color: #ffffff;
  padding: 0 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-shadow: 0 0.4px 10px rgba(0, 0, 0, 0.3);
  line-height: 13px;
  border-radius: 3px;
  margin-right: 3px;

  i {
    margin-right: 2px;
  }
`
const VerifiedBadge = () => (
  <VerifiedBadgeContaier>
    <i className="icon ion-md-lock" /> verified
  </VerifiedBadgeContaier>
)

export default ({ address, symbol, name, host, balance, onClick }) => (
  <Container>
    <Token onClick={onClick}>
      <Info>
        <Name>{name}</Name>
        <Host>
          <VerifiedBadge /> {host}
        </Host>
      </Info>
      <Balance>
        <BalanceAmount>{balance}</BalanceAmount>
        <Unit>{symbol}</Unit>
      </Balance>
    </Token>
    <Vote />
  </Container>
)
