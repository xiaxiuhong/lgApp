myapp.controller("aboutCtrl",function($scope){
    //1. 当文档加载完的时候显示第一个选项页内容(最初显示第一页）
    $("#abContent > div").first().show();
    //2. 给标题栏的li 添加鼠标移入事件
    $(".aboutTabs ul").find("li").on("click", function () {
        //3. 显示当前的li标题(增加类名）  隐藏兄弟li(重置）（移除类名）
        $(this).find("a").addClass("current");
        $(this).siblings().children().removeClass("current");
        //4. 显示对应index的选项页（内容） 隐藏兄弟选项页
        var index = $(this).index();  //获取当前li的编号
        $("#abContent>div").eq(index).stop().slideDown().siblings().hide();
    });
});