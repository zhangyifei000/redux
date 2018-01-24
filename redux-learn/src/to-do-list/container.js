import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTodo from './add-to-do';
import {addTodo} from './actions/action';
import TodoList from './to-do-list';

class Container extends Component {
  render() {
    const {dispatch, todos} = this.props;

    return (
      <div>
        <AddTodo 
          onAddClick={(text) => {
            dispatch(addTodo(text));
          }}
        />
        <TodoList 
          todos={todos}
        />
      </div>
    )
  }
}

function selecte(state) {
  return {todos: state.todos}
}

export default connect(selecte)(Container)