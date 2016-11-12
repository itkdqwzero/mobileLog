(function(){
    'use strict';

    // 1.  初始化页面:
    var fullPage=DC('div');

    var objStyle={
        width:"100vw",
        height:"100vh",
        background:"rgba(0,0,0,.3)",
        color:"#FFF",
        position:"fixed",
        top:"0",
        left:"0",
        fontSize:"8px",
        overflowY:"scroll",
        pointerEvents:"none"
    }
    for(var i in objStyle){
        fullPage.style[i]=objStyle[i];
    }
    fullPage.setAttribute("class","no-scrollbar");
    var styleElm = DC('style');
    styleElm.innerHTML=".no-scrollbar::-webkit-scrollbar{width:0;height:0;}";

    // 2.自动滚动到底:
    //   自动向上滚动

    //function insertTestData(){
    //
    //    for(var i =0;i<999;++i){
    //        var elm = DC('div');
    //        elm.innerHTML=i;
    //        fullPage.appendChild(elm);
    //        elm.scrollIntoView()
    //    }
    //
    //}

    window.onload=function(){
        document.head.appendChild(styleElm);
        document.body.appendChild(fullPage);
        //insertTestData();
    }

    // 3.改写console.log :
    var _fun1=console.log;
    var oldLog = function(a,b,c){
        _fun1.apply(null,arguments);
    }
    console.log= function(){
        oldLog.apply(console,arguments);
        insertLogIntoPage.apply(null,arguments);
    }

    function insertLogIntoPage(){
        var _outStr='';
        for(var i in arguments){
            _outStr += arguments[i].toString()+" ";
        }
        var elm = DC('div');
        elm.innerHTML=_outStr;
        fullPage.appendChild(elm);
        elm.scrollIntoView()
    }

    function DC(type){
        return document.createElement(type);
    }

})();