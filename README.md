# redux
## 动机
    在创建应用时我们知道程序有很多状态需要管理，比如服务器的缓存数据，本地的逻辑控制都会产生大量状态。如果我们在view层保留大量的状态将使我们的应用变的维护起来越来
    越难，而且造成view的无法复用，无法去编写单元进行测试，于是跟随着[flux](http://facebook.github.io/flux/)的脚步，redux让状态管理更加的容易。我们知道view是用来和用户进行
    交互的，它应该只负责展示数据，接收用户动作，而不应该去承担额外的逻辑。作为一个iOS开发者我深知苹果的mvc设计结构，作为视图层的UIViewController承受了太多的逻辑了。当然也可以使用其他
    模式，比如mvvm, mvp等去进行开发。回到正题，redux动机是管理应用状态。
## 设计原则
    - 单一数据源：数据存储在一个store中
    - 状态是不可变的：唯一修改状态的方式是通过action
    - 纯函数的方式修改状态

    你可以从这里了解到详细的信息[redux中文教程](http://www.redux.org.cn/docs/introduction/PriorArt.html)
## 简单的实现一个
    应用启动的时候我们创建一个单例，这个单例就是我们说的store,然后把数据存储在store中然后根据action去改变store中的数据，
    view监听store的变化这样store就像胶水一样把action和view粘合了在一起。所以我们可以做一个简单的状态管理框架。

    - store
        store应该具有什么样的功能。
        1. 存储状态
        2. 把状态变化通知给view
        3. 接收用户发过来的要改变状态的action

    到此为止我们可使用下面的代码来实现上面所说的功能

```
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

//在componentWillMount的时候监听
store.subscribe((state) => {
  console.log('我在视图中发现了state发生了变化，我要更新视图。', state)
});


store.dispatch(addTodo('新添加了一条信息'))

//在componentWillUnmount的时候取消监听
store.unSubscribe()

store.dispatch(addTodo('在添加一条信息'))
```

很多根据flux模式设计的状态管理框架思路，其实都是差不多的。另外说一定函数式编程思想还是很不错的。
