myapp.controller("caseCtrl",function($scope,$ionicListDelegate,$http){
    //模拟数据
    $scope.cases=[
        {"imgSrc":"images/case05.jpg","name":"新作《秋日物语》 ","desc":"三房 | 现代简约 | 半包8.6万​"},
        {"imgSrc":"images/case07.jpg","name":"风的足迹","desc":"四房 | 现代简约 | 半包21万"},
        {"imgSrc":"images/case08.jpg","name":"北欧之家","desc":"​三房 | 现代简约 | 半包11万"}
    ];

    $scope.onRefresher=function(){
        //向服务器端请求新数据，替换原有的数据
        $http.get("case.json")
            .success(function(data){
                //请求回来的数据替换原来的数据
                $scope.cases=data;
            })
            .finally(function(){
                //刷新结束后告诉框架下拉刷新已经结束  隐藏下拉刷新图标
                $scope.$broadcast("scroll.refreshComplete");
            });
    };


    $scope.displayBox=false;
    $scope.displayImg=function(ca){
        $scope.displayBox ? $scope.displayBox=false:$scope.displayBox=true;
    };

    //$scope.displayImg=function(ca){
    //    if(ca.displayBox){
    //        $scope.displayBox=false;
    //    }else{
    //        ca.displayBox=true;
    //    }
    //};


    //选项按钮函数  并且依赖注入$ionicListDelegate 服务
    $scope.edit=function(ca){
        $ionicListDelegate.closeOptionButtons();
    };
    $scope.share=function(ca){
        $ionicListDelegate.closeOptionButtons();
    }
});