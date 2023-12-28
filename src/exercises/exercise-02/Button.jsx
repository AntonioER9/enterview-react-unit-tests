/* eslint-disable react/prop-types */
import { memo, useState, useEffect } from 'react'
import clsx from 'classnames'

const ExpensiveButton = ({ action }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 600)
  }, [action])

  return (
    <button
      className={clsx('btn', loading && 'btn--loading')}
      onClick={action}
      disabled={loading}
    >
      Increase
    </button>
  )
}

const Button = memo(ExpensiveButton)

export { Button }
