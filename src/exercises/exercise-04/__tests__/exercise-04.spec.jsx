
import { render, screen, waitFor } from '@testing-library/react'
import { Exercise04 } from '../exercise-04'
import * as api from '../api'

// Mock de la función getTemperature
jest.mock('../api')

describe('Exercise04 Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('displays loading state initially', () => {
    api.getTemperature.mockResolvedValue({ data: { temperature: 20 } })

    render(<Exercise04 />)

    expect(screen.getByText('🕒 Loading...')).toBeInTheDocument()
  })

  test('displays temperature when fetch is successful', async () => {
    api.getTemperature.mockResolvedValue({ data: { temperature: 20 } })

    render(<Exercise04 />)

    await waitFor(() => expect(screen.getByText("It's nice 🌼")).toBeInTheDocument())
  })

  test('displays error when fetch fails', async () => {
    api.getTemperature.mockRejectedValue(new Error('Error fetching temperature'))

    render(<Exercise04 />)

    await waitFor(() => expect(screen.getByText('💢 Error')).toBeInTheDocument())
  })

  test('displays "It\'s cold 🥶" when temperature is less than 10', async () => {
    api.getTemperature.mockResolvedValue({ data: { temperature: 5 } })

    render(<Exercise04 />)

    await waitFor(() => expect(screen.getByText("It's cold 🥶")).toBeInTheDocument())
  })

  test('displays "It\'s hot 🔥" when temperature is greater than 30', async () => {
    api.getTemperature.mockResolvedValue({ data: { temperature: 35 } })

    render(<Exercise04 />)

    await waitFor(() => expect(screen.getByText("It's hot 🔥")).toBeInTheDocument())
  })
})
