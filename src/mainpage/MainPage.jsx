import {Route, Routes, useNavigate} from "react-router-dom";
import MainBoard from "./MainBoard.jsx";
import Article from "../Article/Article.jsx";
import {useState} from "react";
import Topic from "../topic/Topic.jsx";
import Page from "../Article/Page.jsx";

function TopBar() {
    const navigate = useNavigate();
    const [selectLink, setSelectLink] = useState("");

    function handleLinkClick(link) {
        setSelectLink(link)
    }

    function jumpToUrl(link) {
        console.log(link)
        handleLinkClick(link)
        navigate(link) // navigate直接跳转
        // this.props.history.push(link)
    }

    let topUl = [
        {id: 1, name: '主页', link: ''},
        {id: 2, name: '文章', link: 'article'},
        {id: 3, name: '专题', link: 'topic'}
    ]

    const topLi = topUl.map(li => {
        // console.log('0:', li.link)
        console.log(selectLink.split('/'))
        const isSelected = (li.link === selectLink.split('/')[0])
        const className = `text-base basis-1/8 px-4 py-2 hover:bg-amber-100 ${isSelected ? 'border-b-2 border-cyan-200' : ''}`
        return (
            <li key={li.id} onClick={() => jumpToUrl(li.link)} className={className}>
                {li.name}
            </li>
        )
    })

    return (
        <ul className='flex flex-row pl-2 '>
            {topLi}
        </ul>
    )
}


export default function MainPage() {

    return (
        <div className='font-mono'>
            <TopBar/>
            <div className='mx-2'>
                <Routes>
                    <Route path='/' element={<MainBoard/>}></Route>
                    <Route path='/article' element={<Article/>}></Route>
                    <Route path='/article/:id' element={<Page/>}></Route>
                    <Route path='/topic' element={<Topic/>}></Route>
                </Routes>
            </div>
        </div>
    )
}