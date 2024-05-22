import {useNavigate} from "react-router-dom";

export default function Course() {
    const navigate = useNavigate();
    return (<div onClick={()=>navigate('/home')}>this is course</div>)
}