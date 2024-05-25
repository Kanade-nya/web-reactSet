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
    "content": "A paragraph with *emphasis* and **strong importance**.\n       \n > A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n       \n * Lists\n       \n * [ ] todo\n       \n * [x] done"
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
  },
  {
    "id": 5,
    title: "try",
    date: "2024-12-5",
    content: "## 最基础使用\n" +
        "```javascript\n" +
        "try {\n" +
        "    lalal\n" +
        "}catch (err){\n" +
        "    console.log(err)\n" +
        "}\n" +
        "```\n" +
        "> 注意：只能处理运行时错误，不能处理语法错误\n" +
        "\n" +
        "> 不能处理异步任务，要把try catch放在setTimeout里面\n" +
        "## error对象的属性\n" +
        "- message: 信息\n" +
        "- name: 名字\n" +
        "- stack: 发生时的调用栈\n" +
        "\n" +
        "## throw操作符\n" +
        "可以自定义throw操作符定义错误\n" +
        "```javascript\n" +
        "try {\n" +
        "    if(!data.name){\n" +
        "        throw new SyntaxError('没有data')\n" +
        "    }\n" +
        "}catch (err){\n" +
        "    console.log(err)\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "## 再次捕获技术\n" +
        "通常catch是为了捕获已知的错误，为了将未知的错误也捕获，可以在catch里面定义已知错误的类型。\n" +
        "\n" +
        "在外层重新捕获\n" +
        "\n" +
        "```javascript\n" +
        "try {\n" +
        "    try{\n" +
        "        // err\n" +
        "        // unexpected err\n" +
        "    }catch (err){\n" +
        "        if (err instanceof SyntaxError){\n" +
        "            //\n" +
        "        }else{\n" +
        "            throw err\n" +
        "        }\n" +
        "    }\n" +
        "}catch (e) { //在外层再次捕获未知Err\n" +
        "    console.log(e)\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "## finally\n" +
        "finally 块中的数据无论如何都要执行，不论成功或者失败\n" +
        "甚至try中有return 一样要执行finally\n" +
        "```javascript\n" +
        "function func() {\n" +
        "  // 开始执行需要被完成的操作（比如测量）\n" +
        "  try {\n" +
        "    // ...\n" +
        "  } finally {\n" +
        "    // 完成前面我们需要完成的那件事，即使 try 中的执行失败了\n" +
        "  }\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "对于错误抛出，先执行try，然后finally，然后error\n" +
        "\n"
  },
  {
    id: 6,
    title: "try",
    date: "2024-12-5",
    content: "## Autolink literals\n" +
        "\n" +
        "www.example.com, https://example.com, and contact@example.com.\n" +
        "\n" +
        "## Footnote\n" +
        "\n" +
        "A note[^1]\n" +
        "\n" +
        "[^1]: Big note.\n" +
        "\n" +
        "## Strikethrough\n" +
        "\n" +
        "~one~ or ~~two~~ tildes.\n" +
        "\n" +
        "## Table\n" +
        "\n" +
        "| a | b  |  c |  d  |\n" +
        "| - | :- | -: | :-: |\n" +
        "\n" +
        "## Tasklist\n" +
        "\n" +
        "* [ ] to do\n" +
        "* [x] done"
  }
]
export default json