import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ext from '~/utils/ext'
import storage from '~/utils/storage'

class App extends React.Component {
  render() {
    return <BrowserRouter />
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
