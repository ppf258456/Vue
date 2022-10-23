//使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports={
    //结论：开发时候用development 追求打包速度，不追求体积
    //发布上线时一定要使用production，追求体积小 ，但不要求打包速度
    mode:'development' //mode 用来指定构建模式，可选值由 development （编写代码用） 和 production （上线用）
}