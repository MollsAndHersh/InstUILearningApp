// eslint-disable-next-line notice/notice
import React, { Component } from 'react'
import { themeable } from '@instructure/ui-themeable'
import { Heading, Text, Link, Progress } from '@instructure/ui-elements'
import { View } from '@instructure/ui-layout'
import { IconClockSolid } from '@instructure/ui-icons'

import styles from '../Banner/styles.css'
import theme from '../Banner/theme.js'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <View
        as="main"
        background="inverse"
        padding="large medium none"
        minHeight="100%"
        textAlign="center"
      >
        <View
          padding="small"
          display="inline-block"
          background="light"
          borderRadius="large"
          shadow="topmost"
        >
          <IconClockSolid size="medium" inline={false}/>
        </View>
        <div className={styles.banner}>
          <View
            as="div"
            textAlign="center"
            maxWidth="40rem"
            margin="0 auto"
            padding="x-large medium medium"
            display="block"
            background="light"
            borderRadius="large"
            shadow="above"
          >
            <Heading>
              It is {this.state.date.toLocaleTimeString()}.
            </Heading>
            <div>&nbsp;</div>
            <div>
              <Progress
              label="Hours"
              variant="circle"
              formatValueText={function(valueNow){
                let hour = valueNow > 12 ? valueNow - 12 : valueNow
                return hour}}
              formatDisplayedValue={function(valueNow){
                let hour = valueNow > 12 ? valueNow - 12 : valueNow
                return (
                  <Text>
                    {hour}
                  </Text>
                )
              }}
              valueNow={this.state.date.getHours()}
              valueMax={12}
              size="x-small"
            />
              <Progress
                label="Minutes"
                variant="circle-inverse"
                valueNow={this.state.date.getMinutes()}
                valueMax={60}
                formatValueText={function(valueNow){return valueNow}}
                formatDisplayedValue={function(valueNow){
                  return (
                    <Text>
                      {valueNow}
                    </Text>
                  )
                }}
                size="x-small"
              />
              <Progress
                label="Seconds"
                variant="circle"
                valueNow={this.state.date.getSeconds()}
                valueMax={60}
                formatValueText={function(valueNow){return valueNow}}
                formatDisplayedValue={function(valueNow){
                  return (
                    <Text>
                      {valueNow}
                    </Text>
                  )
                }}
                size="x-small"
              />
            </div>
            <Text color="secondary" size="small" lineHeight="double">Note: This is probably a very irresponsible use of the Progress component. </Text>
            <hr/>
            <Text color="secondary">See&nbsp;
              <Link href="https://reactjs.org/docs/state-and-lifecycle.html">
                State and Lifecycle
              </Link> for the original clock component.
            </Text>
          </View>
        </div>
      </View>
    )
  }
}

export default themeable(theme, styles)(Clock)
