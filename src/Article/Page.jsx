//ArticlePage
import {useLocation, useParams} from "react-router-dom";
// import {Prism} from "react-syntax-highlighter";
// import {dark} from "react-syntax-highlighter/dist/cjs/styles/prism/index.js";
import Markdown from "react-markdown";
// import {useEffect, useState} from "react";
// import rehypeHighlight from "rehype-highlight";
//
// import 'highlight.js/styles/atom-one-dark.css'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// @ts-ignore
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'


import remarkGfm from "remark-gfm";

export default function Page(){
    let {state} = useLocation();
    state = state.arts_info
    console.log(state)
    const {id} = useParams();
    console.log(state)
    const markdown = `A paragraph with *emphasis* and **strong importance**.
       \n > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
       \n * Lists
       \n * [ ] todo
       \n * [x] done

       \`\`\`python
    a=10\`\`\`

    \`\`\`javascript  let {state} = useLocation();\\n" +
        //     "    state = state.arts_info\\n" +
        //     "    console.log(state)\\n" +
        //     "    const {id} = useParams();\\n" +
        //     "    console.log(state)\`\`\`
       \n A table:

      \n | a | b |
      \n  | - | - |\n
      # This is title 1  \n

         ## This is title 2 \n\\n### This is title 3\\n\\nAnd this is a paragraph\\n\\n**A paragraph with strong importance**\\n\\n*A block quote with ~strikethrough~*\n
      `
    // const markdown = "```javascript  let {state} = useLocation();\n" +
    //     "    state = state.arts_info\n" +
    //     "    console.log(state)\n" +
    //     "    const {id} = useParams();\n" +
    //     "    console.log(state)```"


    // const [documentContent, setDocumentContent] = useState('')
    // useEffect(() => {
    //     setDocumentContent(state.content)
    // }, [])

    return (
        <>
            <div className='w-4/5' style={{marginLeft: '10%',marginRight: '10%'}}>
                <h1 className='text-3xl'>{state.title}</h1>
                <p>文章id: {id}</p>

                    <Markdown
                        children={state.content}
                        // rehypePlugins={[rehypeHighlight]}
                        // className='prose prose-zinc max-w-none dark:prose-invert'
                        components={{
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        {...props}
                                        children={String(children).replace(/\n$/, '')}
                                        style={darcula}
                                        language={match[1]}
                                        PreTag="div"
                                    >
                                    </SyntaxHighlighter>
                                ) : (
                                    <code {...props} className={className}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    ></Markdown>

                this is article page
            </div>
        </>
    )

}