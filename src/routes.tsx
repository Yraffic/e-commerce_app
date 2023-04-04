import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/home'


export const PagesRouter = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}