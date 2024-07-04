import { Exercise03 } from '../exercise-03'
import { render, screen } from '@testing-library/react'

// Función auxiliar para resetear las props entre pruebas
const createProps = (overrides) => ({
  temperature: null,
  error: false,
  loading: false,
  ...overrides,
})

test.each([
  ['error', { error: true }, '💢 Error'],
  ['loading', { loading: true }, '🕒 Loading...'],
  ['temperature', { temperature: 5 }, "It's cold 🥶"],
  ['temperature', { temperature: 31 }, "It's hot 🔥"],
  ['temperature', { temperature: 20 }, "It's nice 🌼"],
])('When %s is %s, should display "%s"', (prop, value, text) => {
  const props = createProps(value)

  render(<Exercise03 {...props} />)

  expect(screen.getByText(text)).toBeInTheDocument()
})

// Prueba adicional para el caso de error y carga simultánea
// test('When loading and error are both true, should display error message', () => {
//   const props = createProps({ loading: true, error: true })

//   render(<Exercise03 {...props} />)

//   expect(screen.getByText('💢 Error')).toBeInTheDocument()
//   expect(screen.queryByText('🕒 Loading...')).not.toBeInTheDocument()
// })

// Prueba adicional para el caso sin error ni carga
test('When neither loading nor error, should display temperature message', () => {
  const props = createProps({ temperature: 25 })

  render(<Exercise03 {...props} />)

  expect(screen.getByText("It's nice 🌼")).toBeInTheDocument()
  expect(screen.queryByText('🕒 Loading...')).not.toBeInTheDocument()
  expect(screen.queryByText('💢 Error')).not.toBeInTheDocument()
})
