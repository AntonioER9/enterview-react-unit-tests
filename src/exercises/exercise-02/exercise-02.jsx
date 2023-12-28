/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Button } from './Button'

export const Exercise02 = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="flex-col">
      <div className="text-bold">{counter}</div>
      <Button action={increase} />
    </div>
  )
}
