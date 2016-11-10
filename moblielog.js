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

    function insertTestData(){

        for(var i =0;i<999;++i){
            var elm = DC('div');
            elm.innerHTML=i;
            fullPage.appendChild(elm);
            elm.scrollIntoView()
        }

    }

    window.onload=function(){
        document.head.appendChild(styleElm);
        document.body.appendChild(fullPage);
        insertTestData()
    }



    function DC(type){
        return document.createElement(type);
    }

})();