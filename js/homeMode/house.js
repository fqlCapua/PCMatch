    var user_selectors = Mock.mock({
        "choices":{
            "h_location": ["郑东新区","管城","中原","二七","惠济","高薪","中牟","经开区","荥阳","新郑","上街","新密","巩义","登封"],
            "h_subway": [ "1号线", "2号线"],
            "h_sum": [ "30万以下","30-40万","40-50万","60-80万","80-100万","100-120万","120-160万","160-200万","200万以上"],
            "h_type": ["一室","两室","三室","四室","五室","五室以上"],

            "h_area": [ "<50m","50-70m","70-90m","90-120m","120-150m","150-200m","200-300m",">300m"],
            
        }
    });


    var Allusersdata = Mock.mock({
        "userInfo|100-200": [{
            "hid|+1":1,
            "headerImg|1": ["https://wx2.sinaimg.cn/mw690/e732ef12ly1fmzrv422bhj20px0pe46r.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmzrv5p1j4j20qo0qo0xn.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmyw7tsdalj20go0go75j.jpg", "https://wx4.sinaimg.cn/mw690/e732ef12ly1fnahqpj7a6j20ku0ku76u.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmwgflx4x4j20h30gqq4y.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fn6joko0m7j20k00k0nli.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fn6jojlf60j20g40g4t9h.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fn6jom3d76j222g219ndp.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fnchxcz2xhj20ju0jujty.jpg", "https://wx3.sinaimg.cn/mw690/e732ef12ly1fnchxd8uivj20ku0ku0v6.jpg"],
            "name": "@cname",
            "gender|1": ["男", "女"],
            "age": "@natural(18,25)" + "岁",
            "isMarry|1": ["未婚", "离异"],
            "salary|1": ["<3000元", "3000-5000元", "5000-8000元", ">8000元"],
            "height": "@natural(155,180)" + "cm",
            "city|1": ["新郑", "新密", "登封", "荥阳", "巩义", "洛阳", "偃师", "商丘", "永城", "安阳", "林州", "南阳", "邓州", "开封", "平顶山", "汝州", "焦作", "沁阳", "孟州", "新乡", "卫辉", "辉县", "鹤壁", "濮阳", "许昌", "禹州", "长葛", "漯河", "三门峡", "义马", "灵宝", "信阳", "周口", "项城", "驻马店", "济源"],
            "des|1": ["朋友不是看他有钱时能分你多少，而是看他没钱时能对你多好。", "我怎么变这样，这样倔强。", "我不怕苦不怕累不怕失败不怕鼻青脸肿不怕遍体鳞伤我只怕自己有梦却没从努力过。", "无论走多远 都不要忘了当初为了什么出发", "努力吧，你要对得起你所受过的苦。", "活得有棱有角是一种态度", "要么混日子等老要么拼命赢未来", "无论我此时是如何的彷徨迷茫最终我都要为自己想要过的生活而努力", "性格开朗，对生活充满激情，希望找可靠踏实的男人，希望男生好好打拼自己的事业，更希望你能有时间为我撑起一把伞，而这把伞正好是你我都喜欢的颜色。有时间晚上给我读一篇格林童话，听着你的声音，就仿佛听到你到了格林的童话世界。"]
        }]
    });



    // console.log(Allusersdata.userInfo)
    var app = angular.module("myApp", []);
    app.controller("houseCtr", function($scope) {
        $scope.Userselectors = user_selectors.choices;

    })
    app.controller("AllUserCtr", function($scope) {
        $scope.Allusers = Allusersdata.userInfo;

        $scope.getDetail=function($event){
            var Obj=$event.currentTarget;
            var hid=$(Obj).attr("name");
            var url="index.html#/user_detail?hid="+hid;
            window.open(url);
        }

    });
    
   
    $(function() {
        $("#content").kkPages({
            PagesClass: ".s_user_box",
            PagesMth: 30,
            PagesNavMth: 4 //显示导航个数

        })

    })