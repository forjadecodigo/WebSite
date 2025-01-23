import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <img 
          src={logo} 
          alt="Forja de Código" 
          className="logo"
        />
        <h1 className="title">Forja de Código</h1>
        <p className="subtitle">Próximamente</p>
      </div>
    </div>
  )
}

export default App
