// eslint-disable-next-line notice/notice
import React from 'react'
import { Tabs } from '@instructure/ui-tabs'
import Banner from './Banner'
import Soich from './SearchForm'

import BasicReact from './BasicReact/index'
import Clock from './BasicReact/clock.js'

import '@instructure/canvas-theme'

// const App = () => <Clock />

class App extends React.Component {
  state = {
    selectedIndex: 0
  }
  handleTabChange = (event, { index }) => {
    this.setState({
      selectedIndex: index
    })
  }
  render () {
    const { selectedIndex } = this.state
    return (
      <Tabs
        margin="large auto"
        padding="medium"
        onRequestTabChange={this.handleTabChange}
      >
        <Tabs.Panel renderTitle="Banner" isSelected={selectedIndex === 0}>
          <Banner />
        </Tabs.Panel>
        <Tabs.Panel renderTitle="Basic React" isSelected={selectedIndex === 1}>
          <BasicReact />
        </Tabs.Panel>
        <Tabs.Panel renderTitle="Clock" isSelected={selectedIndex === 2}>
          <Clock />
        </Tabs.Panel>
        <Tabs.Panel renderTitle="Forms" isSelected={selectedIndex === 3}>
          <Soich />
        </Tabs.Panel>
      </Tabs>
    )
  }
}

export default App
