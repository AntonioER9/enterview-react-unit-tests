// Exercise05.test.jsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Exercise05 } from '../exercise-05'

// Mocking fakePromise to immediately resolve
jest.mock('../exercise-05', () => ({
  ...jest.requireActual('../exercise-05'),
  fakePromise: jest.fn(() => Promise.resolve())
}))

describe('Exercise05', () => {
  it('renders "Hello world" text', () => {
    render(<Exercise05 />)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('calls onRender with "hello" after the promise resolves', async () => {
    const onRenderMock = jest.fn()
    render(<Exercise05 onRender={onRenderMock} />)

    // Wait for the promise to resolve
    await screen.findByText('Hello world')

    expect(onRenderMock).toHaveBeenCalledWith('hello')
  })

  it('logs "hello" to the console after the promise resolves', async () => {
    const consoleSpy = jest.spyOn(console, 'log')
    render(<Exercise05 />)

    // Wait for the promise to resolve
    await screen.findByText('Hello world')

    expect(consoleSpy).toHaveBeenCalledWith('hello')
  })
})
