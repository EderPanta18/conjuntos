import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { SetsActionPage, SetsAddPage, SetsHomePage, SetsOperationsPage, SetsPropertysPage } from './pages'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className='grid grid-cols-5'>
        <div className='col-span-2'>
          <SetsAddPage />
        </div>
        <div className='col-span-3 bg-blackCustom-800 bg-gradient-to-tl from-blackCustom-300'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<NavBar />}>
                <Route index element={<SetsHomePage />} />
                <Route path='actions' element={<SetsActionPage />} />
                <Route path='operations' element={<SetsOperationsPage />} />
                <Route path='propertys' element={<SetsPropertysPage />} />
              </Route>
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
