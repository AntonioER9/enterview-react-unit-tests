import { useState } from 'react'

export const Exercise01 = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="flex-col">
      <div className="text-bold">{counter}</div>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
    </div>
  )
}
