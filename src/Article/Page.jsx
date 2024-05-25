//ArticlePage
import {useLocation, useParams} from "react-router-dom";
// import {Prism} from "react-syntax-highlighter";
// import {dark} from "react-syntax-highlighter/dist/cjs/styles/prism/index.js";
// import Markdown from "react-markdown";
import Markdown from 'https://esm.sh/react-markdown@9'
// import remarkGfm from 'remark-gfm'
// import rehypeRaw from "rehype-raw";

// import {useEffect, useState} from "react";
// import rehypeHighlight from "rehype-highlight";
//
// import 'highlight.js/styles/atom-one-dark.css'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// @ts-ignore
// import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'


// import remarkGfm from "remark-gfm";
import {github, monoBlue} from "react-syntax-highlighter/src/styles/hljs/index.js";
import remarkGfm from "remark-gfm";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism/index.js";
// import {monoBlue} from "react-syntax-highlighter/src/styles/hljs/index.js";


// import './Page.module.css'
// import styles1 from './Page.module.css'
import styles2 from './Page-2.module.css'

export default function Page(){
    let {state} = useLocation();
    state = state.arts_info
    console.log(state)
    const {id} = useParams();
    console.log(state)

    return (
        <>
            <div className='w-4/5' style={{marginLeft: '10%',marginRight: '10%'}}>
                <h1 className='text-3xl'>{state.title}</h1>
                <p>文章id: {id}</p>
                <pre >
                    ???
                </pre>
                <div className={'prose  font-mono ' + styles2.outerDiv} >
                    <Markdown
                        children={state.content}
                        className='font-mono'
                        remarkPlugins={[remarkGfm]}
                        // rehypePlugins={[rehypeRaw]}
                        components={{
                            code(props) {
                                const {children, className, node, ...rest} = props
                                const match = /language-(\w+)/.exec(className || '')
                                return match ? (
                                    <SyntaxHighlighter
                                        {...rest}
                                        showLineNumbers={true}
                                        PreTag="div"
                                        children={String(children).replace(/\n$/, '')}
                                        language={match[1]}
                                        style={darcula}
                                    />
                                ) : (
                                    <code {...rest} className={className}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    />
                </div>
                this is article page
            </div>
        </>
    )

}