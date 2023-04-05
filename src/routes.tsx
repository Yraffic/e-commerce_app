import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/home'
import { AppContextProvider } from './context/AppContext'
import { PageDetail } from './pages/Detail'


export const PagesRouter = ()=>{
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/detail' element={<PageDetail />}/>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    )
}