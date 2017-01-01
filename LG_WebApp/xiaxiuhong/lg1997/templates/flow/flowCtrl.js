myapp.controller("flowCtrl",function($scope){
    //数据
    $scope.flows=[
        {className:"col-offset-50 flowOne",imgSrc:"images/flow01.jpg",step:"Step1:预约咨询",contTxt:"预约后，我们的工作人员会在第一时间联系您，您需要提供的资料有：原始房型图或结构图、设计要求、钟意风格、大致预算"},
        {className:"col-40  flowTwo",imgSrc:"images/flow07.jpg",step:"Step2:初步洽谈",contTxt:"根据您提供的资料，我们会提前做好准备工作，以提高第一次沟通的效率"},
        {className:"col-offset-50 flowThree",imgSrc:"images/flow03.jpg",step:"Step3:上门测量",contTxt:"通过前期沟通，如果您认可我们的设计师，可预约免费上门量房"},
        {className:"col-40  flowTwo",imgSrc:"images/flow04.jpg",step:"Step4:平面方案",contTxt:"基于量房的准确数据和现场实际情况，设计师会给您规划一个准确的平面方案，方案可设计到您满意为止"},
        {className:"col-50  flowTwo",imgSrc:"images/flow05.jpg",step:"Step5:签约设计",contTxt:"平面方案确定后既可以签订设计合同，并支付设计费的50%"},
        {className:"col-60  flowTwo",imgSrc:"images/flow06.jpg",step:"Step6:深化设计",contTxt:"全套施工图，包括：吊顶图，地面材质图，开关插座图，弱电图，水路示意图，立面详图，节点大样图等"},
        {className:"col-offset-50 flowThree flowSev",imgSrc:"images/flow08.jpg",step:"Step7:确认图纸",contTxt:"确认后需要对图纸签字认可，并付清设计费余款（设计费50%）"},
        {className:"col-40  flowTwo",imgSrc:"images/flow09.jpg",step:"Step8:预算报价",contTxt:"根据全套已确认的施工图纸做精确报价，报价准确率控制在5%以内"},
        {className:"col-60  flowTwo",imgSrc:"images/flow12.jpg",step:"Step9:签约施工",contTxt:"认可报价后签订施工合同，并确定开工日期和合同日期，且需支付装修一期款（合同价的30%）"},
        {className:"col-offset-50 flowThree flowTen",imgSrc:"images/flow10.jpg",step:"Step10:施工交底",contTxt:"至少5此，按时间节点：开工当日，水电交底，木工交底，泥工交底，油漆交底，以保证施工现场完全按既定方案执行"},
        {className:"col-40  flowTwo",imgSrc:"images/flow11.jpg",step:"Step11:陪同选材",contTxt:"硬装阶段所涉及到的主材陪同：地板，墙地砖，橱柜，洁具，卫浴，无尽，开关插座面板，墙纸，拉手，门锁等"},
        {className:"col-60  flowTwo",imgSrc:"images/flow02.jpg",step:"Step12:软装搭配",contTxt:"包括家具，窗帘，灯具，装饰画，地毯等主体软装的陪同选购服务"}
    ]
});