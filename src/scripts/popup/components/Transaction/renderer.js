import React from 'react'
import styled from 'styled-components'
import { Button } from '~/popup/components/Button'

const Container = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  padding: 6px 0 6px 12px;
  width: 100%;
  margin-bottom: 15px;
  padding: 5px 10px;

  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
`
const Name = styled.div`
  font-weight: 500;
  color: #784fe9;
  font-size: 12px;
`

const Field = styled.div`
  display: flex;
  margin: 3px 0;
  font-size: 11px;
`
const Label = styled.div`
  flex: 0 0 60px;
  color: #8d62f8;
  font-weight: 500;
  text-align: right;
  padding-right: 10px;
`
const Data = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
`
const BigData = styled.div`
  background: #ffffff;
  border: solid 1px #dbd4ea;
  border-radius: 4px;
  padding: 5px;
  font-size: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
  max-width: 100%;
  margin-top: 10px;
  width: 100%;
`
const ButtonContainer = styled.div`
  display: flex;
  padding: 5px 0;

  > * {
    flex: 1;
    margin: 0 5px;
  }
`
const StatusOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  i {
    color: ${p => (p.status === 'approved' ? '#00D1F2' : '#FF9898')};
    font-size: 24px;
    margin-right: 10px;
  }
`

export default ({
  contractType,
  contractAddress,
  method,
  created_at,
  args,
  status,
  onApprove,
  onReject,
}) => (
  <Container>
    {status === 'approved' && (
      <StatusOverlay status={status}>
        <i className="icon ion-md-checkmark-circle" /> Approved
      </StatusOverlay>
    )}
    {status === 'rejected' && (
      <StatusOverlay status={status}>
        <i className="icon ion-md-close-circle" /> Rejected
      </StatusOverlay>
    )}
    <Field>
      <Label>Created</Label>
      <Data>{created_at}</Data>
    </Field>
    <Field>
      <Label>Contract</Label>
      <Data>{contractType}</Data>
    </Field>
    <Field>
      <Label>Address</Label>
      <Data>{contractAddress}</Data>
    </Field>
    <Field>
      <Label>Method</Label>
      <Data>{method}</Data>
    </Field>
    <Field>
      <BigData>{JSON.stringify(args, null, 2)}</BigData>
    </Field>
    <ButtonContainer>
      <Button red onClick={onReject}>
        REJECT
      </Button>
      <Button blue onClick={onApprove}>
        APPROVE
      </Button>
    </ButtonContainer>
  </Container>
)
