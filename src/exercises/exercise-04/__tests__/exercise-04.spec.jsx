import { Exercise04 } from '../exercise-04'
import { render, screen } from '@testing-library/react'

describe('When temperature is below 10', () => {
  it('should display "It\'s cold"', async () => {
    render(<Exercise04 />)

    expect(await screen.findByText("It's cold 🥶")).toBeInTheDocument()
  })
})

describe('When temperature is Above 30', () => {
  it('should display "It\'s hot"', async () => {
    render(<Exercise04 />)

    expect(await screen.findByText("It's hot 🔥")).toBeInTheDocument()
  })
})

describe('When temperature is between 10 and 30', () => {
  it('should display "It\'s nice"', async () => {
    render(<Exercise04 />)

    expect(await screen.findByText("It's nice 🌼")).toBeInTheDocument()
  })
})
