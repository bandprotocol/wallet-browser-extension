import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'
import VoteCommit from '~/popup/components/VoteCommit'

const Container = styled.div`
  background: #6645c2;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

const InnerContainer = styled.div`
  padding: 6px 4px;
  font-size: 12px;
`

const PowerContainer = styled.div`
  display: flex;
  line-height: 20px;
  border-radius: 3px;
  color: #ffffff;
  width: 100%;
`

const VotingHeader = styled.div`
  margin: 0 5px;
  font-size: 11px;
  flex: 1;
  font-weight: 500;
`
const VotingPower = styled.div`
  display: flex;
  flex: 0 1 70px;

  i {
    font-size: 12px;
    margin: 0 2px;
  }
`
const VotingPowerNumber = styled.div`
  flex: 1;
  margin: 0 5px;
  text-align: center;
  font-weight: 600;
`

export default () => (
  <Container>
    <InnerContainer>
      <PowerContainer>
        <VotingHeader>Voting Power</VotingHeader>
        <VotingPower>
          <Button slim red>
            <i className="icon ion-md-arrow-round-down" />
          </Button>
          <VotingPowerNumber>1200</VotingPowerNumber>
          <Button slim blue>
            <i className="icon ion-md-arrow-round-up" />
          </Button>
        </VotingPower>
      </PowerContainer>
    </InnerContainer>
  </Container>
)
