import { Exercise03 } from '../exercise-03'
import { render, screen } from '@testing-library/react'
import { props } from './fixtures'

test.each([
  ['error', true, '💢 Error'],
  // ['temperature', 5, "It's cold 🥶"],
  // ['temperature', 31, "It's hot 🔥"],
  // ['temperature', 20, "It's nice 🌼"],
])('When %s is %s, should display "%s"', (prop, value, text) => {
  props[prop] = value

  render(<Exercise03 {...props} />)

  expect(screen.getByText(text)).toBeInTheDocument()
})

test.each([
  ['temperature', 5, "It's cold 🥶"],
])('When %s is %s, should display "%s"', (prop, value, text) => {
  props[prop] = value

  render(<Exercise03 {...props} />)

  expect(screen.getByText(text)).toBeInTheDocument()
})