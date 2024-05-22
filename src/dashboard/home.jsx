import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Link1 from "../link1.jsx";
import Link2 from "../Link2.jsx";

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <div>
            on dash board page
            <div onClick={() => navigate('/about')}>this is db</div>
            <Link to='/link/link1'>l1</Link>
            <Link to='/link/link2'>l2</Link>

            <div>
                <p>Show here</p>
                <Routes>
                    {/*<Route path='/link'>*/}
                        <Route path='/link/link1' element={<Link1/>}></Route>
                        <Route path='/link/link2' element={<Link2/>}></Route>
                    {/*</Route>*/}
                </Routes>
            </div>
        </div>

    )
}