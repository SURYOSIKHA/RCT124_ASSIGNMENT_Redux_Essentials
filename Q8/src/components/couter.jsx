import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import increase from '../redux/actions/increase';
import decrease from '../redux/actions/decrease';

const Couter = () => {
    const count = useSelector(store => store)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increase())}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrease())}>-</button>
    </div>
  )
}

export default Couter