import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'
import { Input } from '~/popup/components/Input'

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`

const Piggy = styled.img`
  width: 110px;
  display: block;
  margin-bottom: 30px;
`

const H1 = styled.div`
  font-weight: 600;
  letter-spacing: 1.8px;
  font-size: 18px;
`

const H2 = styled.div`
  font-size: 11px;
`

const InputContainer = styled.div`
  margin: 15px 0;
  width: 200px;
`

const ButtonContainer = styled.div`
  text-align: centter;
`

export default ({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  onCreateVault,
}) => (
  <Container>
    <Piggy src="images/piggy.svg" />
    <H1>BAND PROTOCOL</H1>
    <H2>Encrypt your new vault</H2>
    <InputContainer>
      <Input
        onChange={e => onPasswordChange(e.target.value)}
        value={password}
        type="password"
        placeholder="New Password (8+ chars)"
      />
      <Input
        onChange={e => onConfirmPasswordChange(e.target.value)}
        value={confirmPassword}
        type="password"
        placeholder="Confirm password"
      />
    </InputContainer>
    <ButtonContainer>
      <Button onClick={onCreateVault}>CREATE VAULT</Button>
    </ButtonContainer>
  </Container>
)
