import React, { useReducer, useState } from 'react';
import Child from './Child';
import IndexContext from './context';
import Communication from './Communication';
export default function() {
  // state: 数据
  // action: dispatch函数入参 传递过来的数据  通常是一个对象结构 key包含: type 以及payload
  function contReducer(state, action) {
    // 根据类型进行加加 或者减减的操作
    switch (action.type) {
      case 'add':
        return (state = state + action.payload);
      case 'reduce':
        return (state = state - action.payload);
      default:
        return 3;
    }
  }

  // useReducer
  const [cont, dispatchCont] = useReducer(contReducer, 1);

  // 声明响应式数据
  const [msg] = useState('hello word'); // 声明简单数据
  const [people, setPeople] = useState({
    age: 19,
    name: '小明',
  });
  return (
    <>
      <IndexContext.Provider value={{dispatchCont,cont}}>
        <div>我是在父组件中渲染的cont:---{cont}</div>
        <button
          onClick={() => {
            dispatchCont('default');
          }}
        >
          父组件点击后 默认数值只为3
        </button>
        <button
          onClick={() => {
            dispatchCont({ type: 'add', payload: 2 });
          }}
        >
          父组件点击后 递增2
        </button>
        <button
          onClick={() => {
            dispatchCont({ type: 'reduce', payload: 1 });
          }}
        >
          父组件点击后 减减
        </button>
        <Child></Child>

        <div>组件通信 --------------------------------</div>

        <h1>父组件渲染people name{people.name}</h1>
        <Communication
          changePeople={value => {
            setPeople(value);
          }}
          people={people}
          msg={msg}
        ></Communication>
      </IndexContext.Provider>
    </>
  );
}
