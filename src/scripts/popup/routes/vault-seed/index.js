import React from 'react'
import { connect } from '~/store'
import Component from './renderer'

export default class Route extends React.Component {
  render() {
    return <Component />
  }
}
