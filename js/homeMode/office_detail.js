  //打开新页面
 $(".sub_info_btn").click(function() {
  var oid=String(parent.window.location).split("=")[1];
   console.log(oid);
   var url="index.html#/checkIn?oid="+oid;
   window.open(url);
});


 function  get_details(){
 	var url=parent.window.location.href;
 	var id=url.split("?oId=")[1];
 	var office_Info;
    $.ajax({
            url: "http://47.104.94.216/api/public/",
            type: 'POST',
            async: false,
            data: {
                service: "App.Agency.Get_agency",
                time: time_token()[0],
                token: time_token()[1],
                agency_id:id,
            },
        })
        .done(function(res) {
            if (res.ret == 200) {
                office_Info = res.data;

            } else {
                layer.msg(res.msg)
            }
        })
        .fail(function(err) {
            console.log("error");
        })
        .always(function() {

        });
 	return office_Info;
 }
 var officeInfos=get_details();
 function  appendImg(Str){
   var imgArr=String(Str).split(",");
   var imgStr="";
   $.each(imgArr,function(index, el) {
       var ele="http://www.yuelao666.com"+el;
       imgStr+="<img width='60' height='60' src='"+ele+"'  />"
   });
   return imgStr;
}

var ImgStr=appendImg(officeInfos.agency_pics);
$(".yulanImg").append($(ImgStr));
$(".firImg").attr("src",officeInfos.agency_pics[0]);
 var app=angular.module("agencyApp",[]);
 app.controller("agencyCtr",function($scope){
 	$scope.officeInfos=officeInfos;
 	console.log($scope.officeInfos)
 	//$scope.ctime=new Date(parseInt(str) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
 	$scope.formatDate=function(str){
 		return new Date(parseInt(str) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ').split(" ")[0];     
 	}
 	
 });
 