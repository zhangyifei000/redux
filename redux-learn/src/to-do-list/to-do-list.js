import React, { Component} from 'react'
import Todo from './add-to-do.js'

export default class TodoList extends Component {
  render() {
    const {todos} = this.props;

    return (
      <ul>
        {todos.map((item, index) => {
          return (<li key={index}>{item}</li>);
        })}
      </ul>
    )
  }
}
