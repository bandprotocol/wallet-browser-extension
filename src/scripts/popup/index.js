import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { configureStore, history } from '~/store/configure-store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes'
import ext from '~/utils/ext'
import storage from '~/utils/storage'

let store

const Loading = styled.div`
  display: flex;
  height: 100%;
  color: #ffffff;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  state = { loaded: false }

  async componentDidMount() {
    store = await configureStore()
    this.setState({ loaded: true })
  }

  render() {
    if (!this.state.loaded) {
      return <Loading>loading ...</Loading>
    }

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
