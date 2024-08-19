import Home from "../components/home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Post from "../components/post/Post.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog/:postID' element={<Post />}/>
        </Routes>
    );
};

export default Router;