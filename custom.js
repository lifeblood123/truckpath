function BindByDom() {
    try{
        var htmlBtn = document.getElementById('tp-button');//获取HTMLCollection对象集合
        //遍历集合，一个一个地设置点击事件
        htmlBtn.onclick = function () {
            var classList =  document.querySelector("#tp-state-block").classList;
            // container.
            if(classList.contains('tp-state-hide')){
                classList.remove('tp-state-hide');
            }else{
                classList.add('tp-state-hide');
            }
        };
    }
    catch (error) {
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    BindByDom();
});
