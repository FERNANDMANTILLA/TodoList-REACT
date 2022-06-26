
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import {LoginPage} from './LoginPage'
import {AboutPage} from './AboutPage'
import { Navigate } from 'react-router'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>
      
       
      <NavBar/>
        <hr/>
        <Routes>
        <Route path='/' element={ <HomePage/>}></Route>
        <Route path='login' element={<LoginPage/>}></Route>
        <Route path='about' element={<AboutPage/>}></Route>
        {/* <Route path='*' element={<div className="text-danger display-1 text-center">Not Found</div>}></Route> */}
        <Route path="/*" element={<Navigate to="/login"/>}></Route>
        </Routes>

    </UserProvider>
  )
}
