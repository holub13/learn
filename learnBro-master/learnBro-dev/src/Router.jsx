import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/reg' element={<SignUp/>} />
        </Routes>
    )
}
export default Router;