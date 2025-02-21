import { Routes, Route } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/add' element={<AddEmployee/>}/>
        <Route path='/edit' element={<EditEmployee/>}/>
        
      </Routes>   
      
    </>
  )
}

export default App
