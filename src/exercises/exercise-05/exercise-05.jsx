/* eslint-disable react/prop-types */

import { useEffect } from 'react'

const fakePromise = () => new Promise((resolve) => resolve())

export const Exercise05 = ({ onRender }) => {
  useEffect(() => {
    fakePromise().then(() => {
      console.log('hello')
      onRender?.('hello')
    })
  }, [])

  return (
    <div className="flex-col">
      <div className="text-bold">Hello world</div>
    </div>
  )
}
