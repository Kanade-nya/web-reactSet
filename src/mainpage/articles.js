import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism/index.js";

let json = [
  {
    "id": 1,
    "title": "测试1",
    "date": "2024-12-24",
    "content": "主控板 (2024-02-06 更新)\n"
  },
  {
    "id": 2,
    "title": "测试2",
    "date": "2024-12-5",
    "content": "计算机科学家观察了类似实例，“外师物化，内得心源”，借用了这些思想、处理方式和名称，研制了一系列中断服务程序及其调度系统。"
  },
  {
    "id": 3,
    "title" : 'tes3',
    "date": "2024-12-5",
    "content": "[ESLint] 出现1-> this.props.setItem1()报错\n" +
        "\n" +
        "2-> this.props.setItem2报错\n" +
        "\n" +
        "这个错误一般会报错是 'setItem1'或者'setItem2' is missing in props validation(react/prop-types)\n" +
        "\n" +
        "此时，你需要引入 import PropTypes from 'prop-types'\n" +
        "\n" +
        "比如你的类是这样的=> let List = class List extent Component{}\n" +
        "\n" +
        "then=> const propTypes = {\n" +
        "\n" +
        "setItem1: PropTypes.func,\n" +
        "\n" +
        "setItem2: http://PropTypes.xxx（xxx是setItem2的属性）"
  },
  {
    "id": 4,
    title: '布局方式',
    date: "2024-12-5",
    content: "   <div className='w-4/5' style={{marginLeft: '10%',marginRight: '10%'}}>\n" +
        "                <h1 className='text-3xl'>{state.title}</h1>\n" +
        "                <p>文章id: {id}</p>\n" +
        "\n" +
        "                    <Markdown\n" +
        "                        children={state.content}\n" +
        "                        // rehypePlugins={[rehypeHighlight]}\n" +
        "                        // className='prose prose-zinc max-w-none dark:prose-invert'\n" +
        "                        components={{\n" +
        "                            code({node, inline, className, children, ...props}) {\n" +
        "                                const match = /language-(\\w+)/.exec(className || '')\n" +
        "                                return !inline && match ? (\n" +
        "                                    <SyntaxHighlighter\n" +
        "                                        {...props}\n" +
        "                                        children={String(children).replace(/\\n$/, '')}\n" +
        "                                        style={darcula}\n" +
        "                                        language={match[1]}\n" +
        "                                        PreTag=\"div\"\n" +
        "                                    >\n" +
        "                                    </SyntaxHighlighter>"
  }
]
export default json