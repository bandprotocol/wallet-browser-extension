import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore, history } from '~/store/configure-store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes'
import ext from '~/utils/ext'
import storage from '~/utils/storage'

const store = configureStore()

class App extends React.Component {
  render() {
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
