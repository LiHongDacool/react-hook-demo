import React from 'react';
export default function(props) {
  const { msg, people, changePeople } = props; // 通过props接收
  return (
    <>
      <h1>子组件渲染msg------ {msg}</h1>

      <h2>子组件渲染people age {people.age}</h2>
      <button
        onClick={() => {
          changePeople({ name: '小红', age: '10000' });
        }}
      >
        子组件向父组件传值
      </button>
    </>
  );
}
