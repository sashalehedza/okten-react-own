import React, { useState } from 'react'
import usePrevious from '../hooks/usePrevious'

const PreviousValueComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const prevCount = usePrevious<number>(count)

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default PreviousValueComponent
