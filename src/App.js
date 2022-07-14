import React from 'react';
import {Routes, Route, Link} from "react-router-dom";


import Todos from "./pages/Todos";
import Albums from "./pages/Albums";
import Comments from "./pages/Comments";
import MainLayout from "./layouts/MainLayout";
import PostCurrent from "./components/posts/PostCurrent";


const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':postId'} element={<PostCurrent/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;