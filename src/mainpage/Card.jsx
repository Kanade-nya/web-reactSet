// 每一个文章缩略页是一个card
import {useNavigate} from "react-router-dom";



export default function Card({arts}) {
    let navigate = useNavigate();
    function handleJump2Id(id){
        navigate(`article/${id}`,{state: {arts_info: article_info}})
    }
    let article_info = arts
    console.log(article_info.title)
    return (
            <div className='bg-center justify-center my-5 w-3/5 transition ease-in-out hover:bg-cyan-300 rounded-md p-2' style={{marginLeft: '20%',marginRight: '20%'}} onClick={()=>handleJump2Id(article_info.id)}>
                <h1 className='text-xl font-bold text-gray-900 leading-tight'>{article_info.title}</h1>
                <div className='my-2 text-ellipsis max-h-12 block h-auto min-h-6 break-words overflow-hidden'>
                    {article_info.content}
                </div>
                <div>{article_info.time}</div>
            </div>
    )
}