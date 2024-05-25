import Card from "./Card.jsx";
import json from "./articles.js";
import {useNavigate} from "react-router-dom";


export default function MainBoard(){
    let arts_from_public = new FileReader()
    arts_from_public


    let articles = JSON.parse(JSON.stringify(json))
    let articles_lists = articles.map(article => {
        return (<Card key={article.id} arts={article} />)
    })
    // console.log(articles_lists)

    return (
        <div>
            {articles_lists}
        </div>
    )
}