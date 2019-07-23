// eslint-disable-next-line notice/notice
import React, { Component } from 'react'

import { themeable } from '@instructure/ui-themeable'

import { Heading, Text } from '@instructure/ui-elements'
import { View } from '@instructure/ui-layout'
import { IconCheckMarkSolid } from '@instructure/ui-icons'

import Panda from './Panda'

import styles from './styles.css'
import theme from './theme.js'

class Banner extends Component {
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
          background="success"
          borderRadius="large"
          shadow="topmost"
        >
          <IconCheckMarkSolid size="medium" inline={false}/>
        </View>
        <div className={styles.banner}>
          <View
            maxWidth="40rem"
            margin="0 auto"
            padding="x-large medium medium"
            display="block"
            background="light"
            borderRadius="large"
            shadow="above"
          >
            <Panda/>
            <Heading level="h1" margin="none none small">We&apos;re all ready to go!</Heading>
            <Text size="large">Feel free to look around and check stuff out. </Text>
            <Text size="large">
              <Text weight="bold"
                    size="large">
                App.js
              </Text>
              is already edited, but let&apos;s see how far we can take this together!
              Hopefully you don&apos;t mind getting roped into this.
            </Text>
          </View>
        </div>
      </View>
    )
  }
}

export default themeable(theme, styles)(Banner)
