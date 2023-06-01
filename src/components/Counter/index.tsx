import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counter';

export function Counter() {
  const count = useSelector(state => (state as any).counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement Async"
        //   onClick={() => dispatch(decrement())}
        >
          Decrement Async
        </button>
      </div>
    </div>
  )
}