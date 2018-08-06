import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'
import moment from 'moment'

const Container = styled.div`
  line-height: 26px;
  font-size: 11px;
  border-top: solid 1px rgba(255, 255, 255, 0.3);
  display: flex;
`
const Id = styled.div`
  flex: 1;
  padding-left: 5px;
`

const Symbol = styled.div`
  content: '#';
  font-weight: 500;
  background: rgba(0, 0, 0, 0.3);
  height: 20px;
  width: 20px;
  line-height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 5px;
`
const Time = styled.div``
const Status = styled.div`
  flex: 0 0 auto;
  font-size: 10px;

  > button {
    margin-left: 8px;
    width: 70px;
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
  onRevealVote,
  onRescueToken,
}) => (
  <Container>
    <Id>
      <Symbol>
        <i
          className={`icon ion-md-${vote.choice == 1 ? 'checkmark' : 'close'}`}
        />
      </Symbol>
      #{vote.poll_id}
    </Id>
    <Time />
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
            <Status>{`End ${moment(reveal_end_time * 1000).fromNow()}`}</Status>
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
              <Button slim blue size={9} onClick={onRescueToken}>
                WITHDRAW
              </Button>
            </Status>
          )
        } else {
          return (
            <Status>
              {`Expired ${moment(reveal_end_time * 1000).fromNow()}`}
              <Button slim blue size={9} onClick={onRescueToken}>
                WITHDRAW
              </Button>
            </Status>
          )
        }
      }
    })()}
  </Container>
)
