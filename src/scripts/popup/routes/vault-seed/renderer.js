import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`

const H1 = styled.div`
  font-weight: 600;
  letter-spacing: 1.8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const H2 = styled.div`
  font-size: 11px;
`

const SafeIcon = styled.img`
  width: 20px;
  display: inline-block;
  margin-right: 10px;
`
const ButtonContainer = styled.div`
  text-align: centter;
`

const MnemonicContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 11px;
  margin: 10px 0 20px;
  line-height: 15px;
`
const Word = styled.div`
  flex: 0 0 80px;
  padding: 3px;
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: #ffffff;
  margin: 3px auto;
`
const No = styled.div`
  border-right: solid 1px rgba(255, 255, 255, 0.3);
  width: 18px;
  padding-right: 3px;
  margin-right: 4px;
  font-weight: 600;
  text-align: center;
  font-size: 10px;
`

export default ({ mnemonic, onDone }) => (
  <Container>
    <H1>
      <SafeIcon src="images/safe-lock.svg" /> VAULT CREATED
    </H1>
    <H2>
      These 21 words are the only way to restore your BAND wallets. Save it
      somewhere safe and secret.
    </H2>
    <MnemonicContainer>
      {mnemonic.map((word, no) => (
        <Word key={word}>
          <No>{no + 1}</No>
          {word}
        </Word>
      ))}
    </MnemonicContainer>
    <ButtonContainer>
      <Button onClick={onDone}>I'VE KEPT THEM SAFE</Button>
    </ButtonContainer>
  </Container>
)
