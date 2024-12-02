import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Genre from '../pages/Genre/Genre';
import Detail from '../pages/Detail/Detail';
import Search from '../pages/Search/Search';
import Favourite from '../pages/Favourite/Favourite';
import Account from '../pages/Account/Account';
import Watch from '../pages/Watch/Watch'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Contact from '../pages/Contact/Contact'

const AppRoutes  = () => {
    return (
        <Routes>
            <Route
                path='/search'
                element={<Search/>}
            />
            <Route
                path='/:genre/search/:keyword'
                element={<Genre/>}
            />
            <Route
                path='/:genre/:id'
                element={<Detail/>}
            />
            <Route
                path='/:genre'
                element={<Genre/>}
            />
            <Route
                path='/'
                exact
                element={<Home/>}
            />
            <Route
                path='/:genre/search'
                element={<Search/>}
            />
            <Route
                path='/favourite'
                element={<Favourite/>}
            />
            <Route
                path='/account'
                element={<Account/>}
            />
            <Route
                path='/:genre/:id/watch'
                element={<Watch/>}
            />
            <Route
                path='/login'
                element={<Login/>}
            />
            <Route
                path='/register'
                element={<Register/>}
                />
            <Route
                path='/contact'
                element={<Contact/>}
            />
        </Routes>
    );
}

export default AppRoutes ;

// Routes: Thành phần Routes của react-router-dom dùng để bao bọc các Route bên trong và đảm bảo rằng chỉ một trong các Route sẽ được render tại một thời điểm. Routes sẽ duyệt qua từng Route từ trên xuống dưới và render Route đầu tiên có đường dẫn (path) phù hợp với URL hiện tại.

// Route: Thành phần Route dùng để xác định đường dẫn (path) và component cần render khi URL khớp với đường dẫn đó. Khi URL trùng khớp với path, component sẽ được render. Route còn có thể nhận thêm một số thuộc tính khác như exact, component, hoặc render.