// eslint-disable-next-line notice/notice
import React, { Component } from 'react'

import { themeable } from '@instructure/ui-themeable'

import { Heading , Text } from '@instructure/ui-elements'
import { View } from '@instructure/ui-layout'
import { IconHeartLine } from '@instructure/ui-icons'
import { Select } from '@instructure/ui-select'
import { TextInput } from '@instructure/ui-text-input'
import { FormFieldGroup } from '@instructure/ui-form-field'

import RoleSelect  from '../Components/RoleSelect'

// import Panda from './Panda'
//
import styles from './styles.css'
import theme from './theme.js'


const sections = [
  { section_id: "29100", section_title: "Cohort 1" },
  { section_id: "29101", section_title: "Cohort 2" },
  { section_id: "29102", section_title: "Cohort 3A" },
  { section_id: "29103", section_title: "Cohort 3C" }
]

const roles = [
  { role_id: "Student", role_title: "Student" },
  { role_id: "Teacher", role_title: "Teacher" },
  { role_id: "Ta", role_title: "Ta" },
  { role_id: "Designer", role_title: "Designer" }
]



class SearchForm extends Component {
  render () {
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
          background="warning"
          borderRadius="large"
          shadow="topmost"
        >
          <IconHeartLine size="medium" inline={false} />
        </View>
        {/*    <Heading level="h1" margin="none none small">You&apos;re all ready to go!</Heading>*/}
        {/*    <Text size="large">Just edit <Text weight="bold" size="large">App.js</Text> to start building with Instructure UI.</Text>*/}
        {/*  </View>*/}
        {/*</div>*/}
        <div className={styles.banner}>
        <View
          maxWidth="70rem"
          margin="0 auto"
          padding="x-large medium medium"
          display="block"
          background="light"
          borderRadius="large"
          shadow="above"
        >
          <FormFieldGroup
            description="Search"
            colSpacing="medium"
            layout="columns"
            vAlign="top"
          >
            <TextInput label="Search for users:" />
            <View>
              <RoleSelect
                options={[
                  { id: "Student", label: "Student" },
                  { id: "Teacher", label: "Teacher" },
                  { id: "Ta", label: "Ta" },
                  { id: "Designer", label: "Designer" }
                ]}
              />
            </View>
          </FormFieldGroup>
        </View>
        </div>
      </View>
    )
  }
}

export default themeable(theme, styles)(SearchForm)
