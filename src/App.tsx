import { useEffect, useState } from 'react'
import SplashScreen from './pages/SplashScreen'
import HomePage from './pages/HomePage'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return showSplash ? <SplashScreen /> : <HomePage />
}

export default App