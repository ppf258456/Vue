//使用es6导入语法,导入jquery
import $  from 'jquery'

//定义jQuery 的入口函数
$(function(){
    //3 实现奇偶行变色
    $('li:odd').css('background-color','red')
    $('li:even').css('bacground-color','pink')
})