import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'
import Token from '~/popup/components/Token'

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`

const WalletInfo = styled.div`
  flex: 0 0 42px;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`
const Identicon = styled.img`
  display: block;
  border-radius: 6px;
  height: 42px;
  width: 42px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`
const NameBalance = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  margin: 0 10px;
`
const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
`
const Balance = styled.div`
  font-size: 12px;
`
const Actions = styled.div`
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Address = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 300ms;
  cursor: pointer;

  i {
    margin-left: auto;
    font-size: 12px;
    opacity: 0.6;
    transition: all 300ms;
  }

  :hover {
    background: rgba(0, 0, 0, 0.35);

    i {
      opacity: 1;
    }
  }
`

const TokenList = styled.div`
  flex: 1;
  padding: 10px 0;
  width: 100%;
`

export default ({
  wallet,
  identicon,
  onAddressClick,
  onMint,
  balance,
  knownTokens,
}) => (
  <Container>
    <WalletInfo>
      <Identicon src={identicon} />
      <NameBalance>
        <Name>{wallet.name}</Name>
        <Balance>
          {balance.get('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')} BAND
        </Balance>
      </NameBalance>
      <Actions>
        <Button size={10} slim green>
          SEND
        </Button>
        <Button size={10} slim blue onClick={() => onMint()}>
          GET BAND
        </Button>
      </Actions>
    </WalletInfo>
    <Address onClick={onAddressClick}>
      {wallet.address}
      <i className="icon ion-ios-copy" />
    </Address>
    <TokenList>
      {knownTokens.map(token => (
        <Token
          key={token.address}
          {...token}
          balance={balance.get(token.token_address) || 0}
          onClick={() => onMint(token.token_address)}
        />
      ))}
    </TokenList>
  </Container>
)
