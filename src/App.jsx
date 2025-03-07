//Components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'

import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </>
  )
}

export default App
