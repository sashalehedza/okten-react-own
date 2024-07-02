import React from 'react'
import useToggle from '../hooks/useToggle'

const ToggleComponent: React.FC = () => {
  const [isToggled, toggle] = useToggle(false)

  return (
    <div>
      <button onClick={toggle}>{isToggled ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default ToggleComponent
