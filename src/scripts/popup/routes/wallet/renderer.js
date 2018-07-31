import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'

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

  i {
    margin-left: auto;
    font-size: 12px;
    opacity: 0.6;
  }
`

export default ({ wallet, identicon }) => (
  <Container>
    <WalletInfo>
      <Identicon src={identicon} />
      <NameBalance>
        <Name>{wallet.name}</Name>
        <Balance>0 BAND</Balance>
      </NameBalance>
      <Actions>
        <Button size={10} slim green>
          SEND
        </Button>
        <Button size={10} slim blue>
          GET BAND
        </Button>
      </Actions>
    </WalletInfo>
    <Address>
      {wallet.address}
      <i className="icon ion-ios-copy" />
    </Address>
  </Container>
)
