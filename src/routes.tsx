import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { Home } from './pages/home'
import { AppContextProvider } from './context/AppContext'
import { PageDetail } from './pages/Detail'
import { Cart } from './pages/Cart'
import { Login } from './pages/Login'
import { Register } from './pages/Register'


export const PagesRouter = ()=>{
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/detail' element={<PageDetail />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/'  element={<Navigate to='/home'/>}/>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    )
}