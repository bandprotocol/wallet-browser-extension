import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'
import moment from 'moment'

const Container = styled.div`
  background: #f3edff;
  color: #444444;
  border-radius: 4px;
  line-height: 26px;
  font-size: 11px;
  margin-top: 5px;
  padding: 5px 10px 5px 5px;
`
const Id = styled.div`
  flex: 1;
`

const Symbol = styled.div`
  font-weight: 600;
  padding: 0 5px;
  font-size: 9px;
  line-height: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  i {
    width: 11px;
    margin-left: 4px;
    font-size: 9.5px;
  }
`
const FirstRow = styled.div`
  display: flex;
  font-weight: 500;
  line-height: 15px;
`
const SecondRow = styled.div`
  display: flex;
  padding-left: 20px;
  line-height: 14px;
`
const Status = styled.div`
  flex: 0 0 auto;
  font-size: 9px;

  > button {
    margin-left: 8px;
    width: 70px;
  }
`
const Dismiss = styled.div`
  font-size: 14px;
  color: #8361a0;
  opacity: 0.5;
  transition: all 250ms;

  :hoover {
    opacity: 1;
  }
`

export default ({
  vote,
  period,
  result,
  commit_end_time,
  reveal_end_time,
  vote_against,
  vote_for,
  onClaimReward,
  onRevealVote,
  onRescueToken,
}) => (
  <Container>
    <FirstRow>
      <Id>
        <Symbol choice={vote.choice}>
          <i
            className={`icon ion-md-${
              vote.choice == 1 ? 'arrow-round-up' : 'arrow-round-down'
            }`}
          />
          {vote.choice == 1 ? 'VOTE FOR' : 'VOTE AGAINST'}
        </Symbol>
        #{vote.poll_id}
      </Id>
      <Dismiss>
        <i className="icon ion-md-close" />
      </Dismiss>
    </FirstRow>
    <SecondRow>
      {(() => {
        if (period === 0) {
          return (
            <Status>{`Reveal ${moment(
              commit_end_time * 1000
            ).fromNow()}`}</Status>
          )
        }
        if (period === 1) {
          if (vote.revealed) {
            return (
              <Status>{`End ${moment(
                reveal_end_time * 1000
              ).fromNow()}`}</Status>
            )
          } else {
            return (
              <Status>
                {`End ${moment(reveal_end_time * 1000).fromNow()} `}
                <Button slim green size={9} onClick={onRevealVote}>
                  REVEAL
                </Button>
              </Status>
            )
          }
        }
        if (period === 2) {
          if (vote.revealed) {
            return (
              <Status>
                {`You ${
                  result === !!vote.choice ? 'won' : 'lost'
                }  (${vote_for} vs ${vote_against}) ${moment(
                  reveal_end_time * 1000
                ).fromNow()}`}
                {!vote.claimed && (
                  <Button slim blue size={9} onClick={onClaimReward}>
                    WITHDRAW
                  </Button>
                )}
              </Status>
            )
          } else {
            return (
              <Status>
                {`Expired ${moment(reveal_end_time * 1000).fromNow()}`}
                {!vote.rescued && (
                  <Button slim blue size={9} onClick={onRescueToken}>
                    WITHDRAW
                  </Button>
                )}
              </Status>
            )
          }
        }
      })()}
    </SecondRow>
  </Container>
)
