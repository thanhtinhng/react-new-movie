import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const AppRoutes  = () => {
    return (
        <Routes>
            <Route
                path='/:category/search/:keyword'
                element={<Catalog/>}
            />
            <Route
                path='/:category/:id'
                element={<Detail/>}
            />
            <Route
                path='/:category'
                element={<Catalog/>}
            />
            <Route
                path='/'
                exact
                element={<Home/>}
            />
        </Routes>
    );
}

export default AppRoutes ;

// Switch: Thành phần Switch của react-router-dom dùng để bao bọc các Route bên trong và đảm bảo rằng chỉ một trong các Route sẽ được render tại một thời điểm. Switch sẽ duyệt qua từng Route từ trên xuống dưới và render Route đầu tiên có đường dẫn (path) phù hợp với URL hiện tại.

// Route: Thành phần Route dùng để xác định đường dẫn (path) và component cần render khi URL khớp với đường dẫn đó. Khi URL trùng khớp với path, component sẽ được render. Route còn có thể nhận thêm một số thuộc tính khác như exact, component, hoặc render.