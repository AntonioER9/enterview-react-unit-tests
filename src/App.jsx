import { useState, useEffect } from 'react'
import { TabsContainer, Tab, TabContent } from './components/Tabs/Tabs'
import * as exercises from './exercises'

const components = Object.values(exercises)

const getParamValue = (urlParams, key) => {
  const paramValue = urlParams.get(key)

  let current = typeof paramValue === 'string' ? Number(paramValue) : null

  if (isNaN(current)) {
    current = null
  }

  return current
}

const useQueryParamValue = (key) => {
  const [urlParams] = useState(
    () => new URLSearchParams(window.location.search)
  )
  const [current, setCurrent] = useState(
    () => getParamValue(urlParams, key) || 1
  )

  const set = (value) => {
    urlParams.set(key, value)
    setCurrent(value)
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${urlParams}`
    )
  }

  return [current, set]
}

const getTitle = (idx) => `Ex. ${idx < 10 ? `0${idx}` : idx}`

function App() {
  const [selected, setSelected] = useQueryParamValue('selected')

  useEffect(() => {
    document.title = getTitle(selected)
  }, [selected])

  return (
    <div className="app-container">
      <TabsContainer className="app" defaultValue={selected}>
        <div className="app-tabs">
          {components.map((_, index) => (
            <Tab number={index + 1} key={index} onSelect={setSelected}>
              {getTitle(index + 1)}
            </Tab>
          ))}
        </div>

        <div className="app-content">
          {components.map((Exercise, index) => (
            <TabContent number={index + 1} key={index}>
              <Exercise />
            </TabContent>
          ))}
        </div>
      </TabsContainer>
    </div>
  )
}

export default App
