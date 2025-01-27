import './styles/App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Banner from './components/Banner'

function MainContent() {
  return <Banner />
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
