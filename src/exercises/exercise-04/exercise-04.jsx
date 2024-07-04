/* eslint-disable react/prop-types */
import { useFetchTemperature } from './hooks'

const TemperatureDisplayer = ({ temperature }) => {
  switch (true) {
    case temperature < 10:
      return <div className="text-bold">It&apos;s cold 🥶</div>
    case temperature > 30:
      return <div className="text-bold">It&apos;s hot 🔥</div>
    default:
      return <div className="text-bold">It&apos;s nice 🌼</div>
  }
}

export const Exercise04 = () => {
  const [temperature, loading, error] = useFetchTemperature()
  
  return (
    <div className="flex-col">
      {loading && <div className="text-bold">🕒 Loading...</div>}
      {error && <div className="text-bold">💢 Error</div>}
      {!loading && !error && <TemperatureDisplayer temperature={temperature} />}
    </div>
  )
}
