/**
 * Created by hxsd on 2016/12/21.
 */
//创建主模板
var myapp=angular.module("myapp",["ionic"]);

//路由配置
myapp.config(function($stateProvider,$urlRouterProvider){
    //去掉后退按钮文字（只有后退图标）
    //$ionicConfigProvider.backButton.text("");
    //$ionicConfigProvider.backButton.previousTitleText("");

    //根据状态切换
    $stateProvider
        //一级路由
        .state("tour",{
            url:"/tour",
            templateUrl:"templates/tour/tour.html"
        })
        .state("tabs",{
            url:"/tabs",
            templateUrl:"templates/tabs/tabs.html",
            abstract:true       //抽象的，加载的tabs页面不要直接显示
        })
        //二级路由
        .state("tabs.home",{
            url:"/home",
            views:{"tabs-home":{templateUrl:"templates/home/home.html"}}
        })
        .state("tabs.advantage",{
            url:"/advantage",
            views:{"tabs-home":{templateUrl:"templates/advantage/advantage.html",controller:"advantageCtrl"}}
        })
        .state("tabs.flow",{
            url:"/flow",
            views:{"tabs-home":{templateUrl:"templates/flow/flow.html",controller:"flowCtrl"}}
        })
        .state("tabs.case",{
            url:"/case",
            views:{"tabs-case":{templateUrl:"templates/case/case.html",controller:"caseCtrl"}}
        })
        .state("tabs.order",{
            url:"/order",
            views:{"tabs-order":{templateUrl:"templates/order/order.html",controller:"orderCtrl"}}
        })
        .state("tabs.about",{
            url:"/about",
            views:{"tabs-about":{templateUrl:"templates/about/about.html",controller:"aboutCtrl"}}
        });

    $urlRouterProvider.otherwise("/tour");
});

