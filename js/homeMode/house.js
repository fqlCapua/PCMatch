    var user_selectors = Mock.mock({
        "choices":{
            "h_location": ["郑东新区","管城","中原","二七","惠济","高薪","中牟","经开区","荥阳","新郑","上街","新密","巩义","登封"],
            "h_subway": [ "1号线", "2号线"],
            "h_sum": [ "30万以下","30-40万","40-50万","60-80万","80-100万","100-120万","120-160万","160-200万","200万以上"],
            "h_type": ["一室","两室","三室","四室","五室","五室以上"],

            "h_area": [ "<50m","50-70m","70-90m","90-120m","120-150m","150-200m","200-300m",">300m"],
            
        }
    });


    var AllhousesData = Mock.mock({
        "houseInfo|10-30": [{
            "hid|+1":1,
            "headerImg|1": ["http://pic6.58cdn.com.cn/anjuke_58/e8cd879f80ca058cbb5e30df1315f2c1?w=294&h=220&crop=1"],
            "title|1": ["思域大户人家 精装双气房 家电齐全","万达小户人家 双气房 毛坯房"],
            "rentAll|1": ["整租", "单间"],
            "style|1":["三室两厅","三室一厅","四室一厅","一室一厅"],
            "fineDecro|1": ["精装修", "简装修"],
            "floor": "@natural(1,30)"+"/30层",
            "location|1": ["郑东新区","管城","中原","二七","惠济","高薪","中牟","经开区","荥阳","新郑","上街","新密","巩义","登封"],
            "road|1":["花园路1号","商城路287号","金水路1号"],
           "city|1":["新郑", "新密", "登封", "荥阳", "巩义", "洛阳", "偃师", "商丘", "永城", "安阳", "林州", "南阳", "邓州", "开封", "平顶山", "汝州", "焦作", "沁阳", "孟州", "新乡", "卫辉", "辉县", "鹤壁", "濮阳", "许昌", "禹州", "长葛", "漯河", "三门峡", "义马", "灵宝", "信阳", "周口", "项城", "驻马店", "济源"],
            "username":"@cname"
        }]
    });



    // console.log(Allusersdata.userInfo)
    var app = angular.module("myApp", []);
    app.controller("houseFilterCtr", function($scope) {
        $scope.Userselectors = user_selectors.choices;

    })
    app.controller("AllhouseCtr", function($scope) {
        $scope.Allhouses = AllhousesData.houseInfo;
               
        $scope.getDetail=function($event){
            var Obj=$event.currentTarget;
           
            var hid=$(Obj).attr("house_id");
              console.log( hid)
           var url="index.html#/house_detail?hid="+hid;
             window.open(url);
        }

    });
    
   
  

    //房源分类
    $(".nav_h_res li").click(function(event) {
          $(this).addClass('nav_active');
           $(this).siblings().removeClass('nav_active');

    });
      $(function() {

        $(".nav_h_result").kkPages({
            PagesClass: ".house_box",
            PagesMth:4,
            PagesNavMth: 4 //显示导航个数

        })

    })