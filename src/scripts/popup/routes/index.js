import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import styled from 'styled-components'

import Header from '~/popup/components/Header'

// Routes
import Welcome from '~/popup/routes/welcome/'
import VaultPassword from '~/popup/routes/vault-password/'
import VaultSeed from '~/popup/routes/vault-seed/'
import Wallet from '~/popup/routes/wallet/'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  padding: 12px 15px;
  flex-direction: column;
`

export default () => (
  <Container>
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/vault-password" component={VaultPassword} />
        <Route exact path="/vault-seed" component={VaultSeed} />
        <Route exact path="/wallet" component={Wallet} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Content>
  </Container>
)
