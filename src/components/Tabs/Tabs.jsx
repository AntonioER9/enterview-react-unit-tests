/* eslint-disable react/prop-types */

import { useContext, createContext, useState } from 'react'
import clsx from 'classnames'
import './Tabs.style.scss'

const TabsContext = createContext()

const TabsProvider = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue || 1)

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  )
}

const useTab = () => {
  return useContext(TabsContext)
}

export const TabsContainer = ({ defaultValue, children, className }) => {
  return (
    <TabsProvider defaultValue={defaultValue}>
      <div className={clsx('tabs-container', className)}>{children}</div>
    </TabsProvider>
  )
}

export const Tab = ({ onSelect, number, children }) => {
  const { activeTab, setActiveTab } = useTab()

  const isActive = activeTab === number

  return (
    <div
      className={clsx('tab', isActive && 'active')}
      onClick={() => {
        if (!isActive) {
          onSelect?.(number)
          setActiveTab(number)
        }
      }}
    >
      {children}
    </div>
  )
}

export const TabContent = ({ children, className, number }) => {
  const { activeTab } = useTab()

  const isActive = activeTab === number

  if (!isActive) return null

  return <div className={clsx('tab-content', className)}> {children}</div>
}
