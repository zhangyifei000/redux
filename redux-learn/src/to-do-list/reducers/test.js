
// store

function createStore(reducer) {
  var currentState;
  var currentListener;

  function dispatch(action) {
    console.log('来了一个action, action类型为', action)
    setState(reducer(currentState, action))
  }

  function getState() {
    return currentState
  }
  
  function setState(state) {
    currentState = state;

// store

function createStore(reducer) {
  var currentState;
  var currentListener;

  function dispatch(action) {
    console.log('来了一个action, action类型为', action)
    setState(reducer(currentState, action))
  }

  function getState() {
    return currentState
  }
  
  function setState(state) {
    currentState = state;

// store

function createStore(reducer) {
  var currentState;
  var currentListener;

  function dispatch(action) {
    console.log('来了一个action, action类型为', action)
    setState(reducer(currentState, action))
  }

  function getState() {
    return currentState
  }
  
  function setState(state) {
    currentState = state;

    if (currentListener) {
      currentListener(getState())
      console.log('状态发生变化，通知视图', currentListener)
    } else {
      console.log('订阅者已经销毁，无法通知')
    }
  }

  function subscribe(listener) {
    console.log('我正在监听store里的状态， state发生变化我就通知视图')
    currentListener = listener
  }
  
  function unSubscribe() {
    currentListener = null  
  }

  return {
    dispatch,
    getState,
    subscribe,
    unSubscribe
  };
}

//redux

function todos(state, action) {
  switch(action.type){
    case 'add_todo':
      return (state || []).concat([action.text])
    default:
      return []
  }
}

//action

function addTodo(text) {
  return {type: 'add_todo', text: text}
}

var store = createStore(todos)

//view

//在willMount的时候监听
store.subscribe((state) => {
  console.log('我在视图中发现了state发生了变化，我要更新视图。', state)
});


store.dispatch(addTodo('新添加了一条信息'))

//在willUnMount的时候取消监听
store.unSubscribe()

store.dispatch(addTodo('在添加一条信息'))