import React, { useContext } from 'react';
import IndexContext from './context';
export default function() {
  const {dispatchCont,cont} = useContext(IndexContext);
  return (
    <>
      <button
        onClick={() => {
          dispatchCont({ type: 'reduce', payload: 1 });
        }}
      >
        孙子组件进行减减
      </button>
    </>
  );
}
