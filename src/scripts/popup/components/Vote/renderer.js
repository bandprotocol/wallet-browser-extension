import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'
import VoteCommit from '~/popup/components/VoteCommit'

const Container = styled.div``

const InnerContainer = styled.div`
  background: #9165e4;
  font-size: 12px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 0 3px 0 7px;
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
  font-size: 10px;
  flex: 1;
  font-weight: 600;

  > i {
    margin: 0 5px 0 0;
  }
`
const VotingPower = styled.div`
  display: flex;
  flex: 0 1 75px;
  align-items: center;

  button {
    font-size: 10px;
    height: 1.6em;
  }

  i {
    font-size: 10px;
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
          VOTING POWER
        </VotingHeader>
        <VotingPower>
          <Button slim red onClick={onWithdrawVotingPower}>
            <i className="icon ion-md-remove" />
          </Button>
          <VotingPowerNumber>{votingPower}</VotingPowerNumber>
          <Button slim blue onClick={onRequestVotingPower}>
            <i className="icon ion-md-add" />
          </Button>
        </VotingPower>
      </PowerContainer>
    </InnerContainer>
    <VoteCommitList>
      {voteCommits.map(
        vote =>
          vote.type === 'vote' ? (
            <VoteCommit
              key={vote.id}
              vote={vote}
              voting_address={voting_address}
            />
          ) : (
            undefined
          )
      )}
    </VoteCommitList>
  </Container>
)
