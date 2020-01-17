import React, { useContext } from 'react';
import IndexContext from './context';
import Grandson from './Grandson';
export default function() {
  let { dispatchCont, cont } = useContext(IndexContext);
  return (
    <>
      <h1>子组件渲染cont : {cont}</h1>
      <button onClick={() => dispatchCont({ type: 'add', payload: 1 })}>子组件 加1</button>
      <Grandson></Grandson>
    </>
  );
}
  