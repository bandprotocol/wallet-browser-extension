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
  padding: 2px 4px;
  font-size: 12px;
`

const PowerContainer = styled.div`
  display: flex;
  line-height: 20px;
  border-radius: 3px;
  color: #ffffff;
  width: 100%;
  margin: 3px 0;
`

const VotingHeader = styled.div`
  margin: 0 5px;
  font-size: 11px;
  flex: 1;
  font-weight: 600;

  > i {
    margin: 0 10px 0 5px;
  }
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
  font-size: 11px;
`
const VoteCommitList = styled.div``

export default ({
  voting_address,
  voteCommits,
  votingPower,
  onRequestVotingPower,
  onWithdrawVotingPower,
}) => (
  <Container>
    <InnerContainer>
      <PowerContainer>
        <VotingHeader>
          <i className="icon ion-md-star" />
          Voting Power
        </VotingHeader>
        <VotingPower>
          <Button slim red onClick={onWithdrawVotingPower}>
            <i className="icon ion-md-arrow-round-down" />
          </Button>
          <VotingPowerNumber>{votingPower}</VotingPowerNumber>
          <Button slim blue onClick={onRequestVotingPower}>
            <i className="icon ion-md-arrow-round-up" />
          </Button>
        </VotingPower>
      </PowerContainer>
      <VoteCommitList>
        {voteCommits.map(vote => (
          <VoteCommit
            key={vote.id}
            vote={vote}
            voting_address={voting_address}
          />
        ))}
      </VoteCommitList>
    </InnerContainer>
  </Container>
)
