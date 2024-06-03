import { useEffect, useReducer } from 'react'
import { getTemperature } from './api'

const initialState = {
  loading: false,
  error: false,
  data: null,
}

const reducer = (_, action) => {
  switch (action.type) {
    case 'fetch':
      return { ...initialState, loading: true }
    case 'error':
      return { ...initialState, error: true }
    case 'success':
      return { ...initialState, data: action.payload }
    default:
      throw new Error()
  }
}

export const useFetchTemperature = () => {
  const [state, setState] = useReducer(reducer, initialState)

  useEffect(() => {
    setState({ type: 'fetch' })

    getTemperature()
      .then((response) => {
        setState({ type: 'success', payload: response.data })
      })
      .catch(() => {
        setState({ type: 'error' })
      })
  }, [])

  return [state.data?.temperature, state.loading, state.error]
}