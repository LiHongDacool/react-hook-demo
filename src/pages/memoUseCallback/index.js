import React, { useState, useCallback } from 'react';

function renderChild(props) {
  console.log('子组件渲染了');
  return (
    <>
      <h1>子组件中渲染：{props.lalala}</h1>
      <button onClick={props.onClick}>子组件中 修改标题</button>
    </>
  );
}
const Child = React.memo(renderChild);
// 父组件中执行setTitle方法 改变数据后 触发父组件render 子组件也随之 render

export default () => {
  const [title, setTitle] = useState('这是一个 title');
  const [subtitle, setSubtitle] = useState('这是一个副标题');
  const callback = () => {
    setTitle('标题改变了' + new Date().getTime());
  };
  const dealCallBack = useCallback(callback,[]);
  return (
    <div>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      <button
        onClick={() => {
          setSubtitle('副标题改变了' + new Date().getTime());
        }}
      >
        改变副标题
      </button>
      <Child lalala={'lalala'} onClick={dealCallBack}></Child>
    </div>
  );
};
