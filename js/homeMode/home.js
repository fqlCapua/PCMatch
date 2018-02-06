  var JSONdata = Mock.mock({
      "userInfo|13-50": [{
          "hid|+1":1,
          "headerImg|1": ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=739322019,1387616363&fm=27&gp=0.jpg", "https://wx1.sinaimg.cn/mw690/620cec29gy1fnigrnfcvuj21w02ioe81.jpg", "http://wx3.sinaimg.cn/thumb180/7d453399gy1fmxfp9x6kxj21kw11zqag.jpg", "http://wx2.sinaimg.cn/thumb180/80c55ebagy1fmxa80y43pj20qo1bewmb.jpg", "http://wx3.sinaimg.cn/thumb180/677a5bc4gy1fmw573nqvjj20ht0bn3zf.jpg", "http://wx3.sinaimg.cn/thumb180/65f8ed38gy1fmvshl95h9j20qo0zi7au.jpg", "http://wx4.sinaimg.cn/thumb180/cf1114f6gy1fmvr2de839j20s90qowi9.jpg", "http://wx2.sinaimg.cn/thumb180/6253641fly1fmvooi4xixj20k00zkdkb.jpg", "http://wx1.sinaimg.cn/thumb180/671ba324ly1fmvm8kdpbvj20yi1a0x6p.jpg"],
          "name": "@cname",
          "gender|1": ["男", "女"],
          "age": "@natural(18,30)" + "岁",
          "salary|1": ["<3000元", "3000-5000元", "5000-8000元", ">8000元"],
          "height": "@natural(155,170)" + "cm",
          "city|1": ["新郑", "新密", "登封", "荥阳", "巩义", "洛阳", "偃师", "商丘", "永城", "安阳", "林州", "南阳", "邓州", "开封", "平顶山", "汝州", "焦作", "沁阳", "孟州", "新乡", "卫辉", "辉县", "鹤壁", "濮阳", "许昌", "禹州", "长葛", "漯河", "三门峡", "义马", "灵宝", "信阳", "周口", "项城", "驻马店", "济源" ],
          "des|1": ["朋友不是看他有钱时能分你多少，而是看他没钱时能对你多好。", "我怎么变这样，这样倔强。", "我不怕苦不怕累不怕失败不怕鼻青脸肿不怕遍体鳞伤我只怕自己有梦却没从努力过。", "无论走多远 都不要忘了当初为了什么出发", "努力吧，你要对得起你所受过的苦。", "活得有棱有角是一种态度", "要么混日子等老要么拼命赢未来", "无论我此时是如何的彷徨迷茫最终我都要为自己想要过的生活而努力", "性格开朗，对生活充满激情，希望找可靠踏实的男人，希望男生好好打拼自己的事业，更希望你能有时间为我撑起一把伞，而这把伞正好是你我都喜欢的颜色。有时间晚上给我读一篇格林童话，听着你的声音，就仿佛听到你到了格林的童话世界。"]
      }]
  });;



  var app = angular.module("Myapp", []);
  app.controller("updateCtr", function($scope) {
      $scope.updateUsers = JSONdata.userInfo;
      $scope.getDetail=function($event){
   
       var Obj=$event.currentTarget;
       var hid=$(Obj).find(".user_img").attr("name");
       var url="index.html#/user_detail?hid="+hid;
            window.open(url);
     }
  })
$(".house li a").click(function(){

    var hash=$(this).attr("href");
      var used=parent.location.href;
      window.open(used+hash);
})