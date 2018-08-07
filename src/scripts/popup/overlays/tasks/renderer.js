import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'
import { Input } from '~/popup/components/Input'
import Transaction from '~/popup/components/Transaction'
import VoteTransaction from '~/popup/components/VoteTransaction'

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1000;
  overflow: auto;
`

const Header = styled.div`
  display: flex;
  color: #ffffff;
  padding: 5px 15px 5px 25px;
  background: linear-gradient(
    to bottom,
    rgb(159, 53, 255) 0%,
    rgb(159, 53, 255) 100%
  );
  z-index: 200;
`
const Title = styled.div`
  flex: 1;
  line-height: 40px;
  font-size: 18px;
  font-weight: 600;
`
const Close = styled.div`
  display: block;
  font-size: 24px;
  line-height: 40px;
  cursor: pointer;
`
const TransactionList = styled.div`
  overflow: auto;
  padding: 15px 20px 20px;
`

export default ({ tasks, resetTasks, isAllTaskComplete }) => (
  <OverlayContainer>
    <Header>
      <Title>Pending Transactions</Title>
      <Close onClick={resetTasks}>
        {isAllTaskComplete ? (
          <i className="icon ion-md-checkmark" />
        ) : (
          <i className="icon ion-md-close" />
        )}
      </Close>
    </Header>
    <TransactionList>
      {tasks.map(
        task =>
          task.contractType === 'Voting' && task.method === 'commit_vote' ? (
            <VoteTransaction key={task.id} task={task} />
          ) : (
            <Transaction key={task.id} task={task} />
          )
      )}
    </TransactionList>
  </OverlayContainer>
)
