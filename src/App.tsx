import './App.css'
import { Footer, Header } from './components/Common'
import Homepage from './pages/Homepage'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  )
}

export default App
