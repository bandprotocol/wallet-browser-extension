import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: ${p => p.size || 11}px;
  color: #ffffff;
  letter-spacing: 0.05em;
  border-radius: 0.3em;
  line-height: ${p => (p.slim ? 1.8 : 2.5)}em;
  padding: 0 ${p => (p.slim ? 0.25 : 1.5)}em;
  background: linear-gradient(
    to bottom,
    ${p => {
      if (p.blue) return '#00D1F2, #00B1FF'
      if (p.red) return '#FF9898, #F56868'
      if (p.grey) return '#928a98,#72687b'
      else return '#00F2A7, #02D594'
    }}
  );
  text-shadow: 0 0.07em 0.3em rgba(0, 0, 0, 0.4);
  transition: transform 250ms;
  transform: translateY(-0.1em);
  cursor: pointer;

  :active {
    transform: translateY(0);
  }
`

export class Button extends React.Component {
  state = {
    loading: false,
  }

  async onClick() {
    if (this.props.onClick) {
      const clickResult = this.props.onClick()
      if (
        typeof clickResult === 'object' &&
        typeof clickResult.then === 'function'
      ) {
        this.setState({ loading: true })
        const finalResult = await clickResult
        this.setState({ loading: false })
        return finalResult
      } else {
        return clickResult
      }
    }
  }

  render() {
    const { onClick, children, ...props } = this.props
    return (
      <ButtonComponent onClick={this.onClick.bind(this)} {...props}>
        {this.state.loading ? <i className="icon ion-ios-more" /> : children}
      </ButtonComponent>
    )
  }
}
