## 最基础使用
```javascript
try {
    lalal
}catch (err){
    console.log(err)
}
```
> 注意：只能处理运行时错误，不能处理语法错误

> 不能处理异步任务，要把try catch放在setTimeout里面
## error对象的属性
- message: 信息
- name: 名字
- stack: 发生时的调用栈

## throw操作符
可以自定义throw操作符定义错误
```javascript
try {
    if(!data.name){
        throw new SyntaxError('没有data')
    }
}catch (err){
    console.log(err)
}
```

## 再次捕获技术
通常catch是为了捕获已知的错误，为了将未知的错误也捕获，可以在catch里面定义已知错误的类型。

在外层重新捕获

```javascript
try {
    try{
        // err
        // unexpected err
    }catch (err){
        if (err instanceof SyntaxError){
            //
        }else{
            throw err
        }
    }
}catch (e) { //在外层再次捕获未知Err
    console.log(e)
}
```

## finally
finally 块中的数据无论如何都要执行，不论成功或者失败
甚至try中有return 一样要执行finally
```javascript
function func() {
  // 开始执行需要被完成的操作（比如测量）
  try {
    // ...
  } finally {
    // 完成前面我们需要完成的那件事，即使 try 中的执行失败了
  }
}
```

对于错误抛出，先执行try，然后finally，然后error

