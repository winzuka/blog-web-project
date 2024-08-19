import Home from "../components/home/Home.jsx";
import {Route, Routes} from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    );
};

export default Router;