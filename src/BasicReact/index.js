// eslint-disable-next-line notice/notice
import React, { Component } from 'react'

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>
}

function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />

  )
  return (
    <ul>
      {listItems}
    </ul>
  )
}


class BasicReact extends Component {

  render() {
    const numbers = [1, 2, 3, 4, 5]
    return (
  <NumberList numbers={numbers} />
    )
}
}

export default BasicReact