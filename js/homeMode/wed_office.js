// var office=Mock.mock({
//     "lists|30-50": [{
//         "user_agency_id|+1": 1,
//         "user_agency_tel|1": ["0371-000000001",
//             "0371-000000002",
//             "0371-000000003",
//             "0371-000000004",
//             "0371-000000005",
//             "0371-000000006",
//             "0371-000000007",
//             "0371-000000008",
//             "0371-000000009",
//             "0371-000000000"
//         ],
//         "agency_name|1": ["郑州小企鹅婚介所", "郑州大白兔婚介所", "郑州Love婚介所", "郑州千里姻缘一下牵婚介所", "郑州大上海婚介所", "郑州吾爱婚介所", "郑州非你莫属婚介所"],
//         "agency_address|1": ["花园路8号正道花园商厦B1楼",
//             "河南省郑州市金水区纬五路7号",
//             "河南省郑州市金水区经三路与红专路交叉口向西50米",
//             "郑州市纬五路40号", "河南省郑州市金水区花园路21号",
//             "北路10-6号"
//         ],
//         "ages": "@natural(5,10)",
//         "numbers": "@natural(50,200)",
//         "agency_introduce|1": [],
//         "agency_pics|1": ["https://wx2.sinaimg.cn/mw690/e732ef12ly1fmzrv422bhj20px0pe46r.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmzrv5p1j4j20qo0qo0xn.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmyw7tsdalj20go0go75j.jpg", "https://wx4.sinaimg.cn/mw690/e732ef12ly1fnahqpj7a6j20ku0ku76u.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmwgflx4x4j20h30gqq4y.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fn6joko0m7j20k00k0nli.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fn6jojlf60j20g40g4t9h.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fn6jom3d76j222g219ndp.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fnchxcz2xhj20ju0jujty.jpg", "https://wx3.sinaimg.cn/mw690/e732ef12ly1fnchxd8uivj20ku0ku0v6.jpg"],
//         "agency_ctime|1": ["身高", "145厘米以下", "145厘米", "146厘米", "147厘米", "148厘米", "149厘米", "150厘米", "151厘米", "152厘米", "153厘米", "154厘米", "155厘米", "156厘米", "157厘米", "158厘米", "159厘米", "160厘米", "161厘米", "162厘米", "163厘米", "164厘米", "165厘米", "166厘米", "167厘米", "168厘米", "169厘米", "170厘米", "171厘米", "172厘米", "173厘米", "174厘米", "176厘米", "177厘米", "178厘米", "179厘米", "180厘米", "181厘米", "182厘米", "183厘米", "184厘米", "185厘米", "186厘米", "187厘米", "188厘米", "189厘米", "190厘米", "191厘米", "192厘米", "193厘米", "194厘米", "195厘米", "196厘米", "197厘米", "198厘米", "199厘米", "200厘米", "201厘米", "202厘米", "203厘米", "204厘米", "205厘米", "206厘米", "207厘米", "208厘米", "209厘米", "210厘米", "210厘米以上"],
//         "agency_uid|1": ["学历", "初中", "中专/职高/技校", "高中", "大专", "本科", "硕士", "博士", "博士后"],
//         "agency_area|1": ["民族", "汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", "彝族", "壮族", "布依族", "朝鲜族", "其他民族", "满族"],

//     }]
// });


/*婚介所详情*/
$("#office_cont").on('click', ".office_boxes", function() {
    /* Act on the event */
    var office_id = $(this).attr("office_id");
    //console.log(office_id);
    var url = "index.html#/office_detail?oId=" + office_id;
    window.open(url);
});

var JSONdata = Mock.mock({
    "userInfo|13-50": [{
        "headerImg|1": ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=739322019,1387616363&fm=27&gp=0.jpg", "https://wx1.sinaimg.cn/mw690/620cec29gy1fnigrnfcvuj21w02ioe81.jpg", "http://wx3.sinaimg.cn/thumb180/7d453399gy1fmxfp9x6kxj21kw11zqag.jpg", "http://wx2.sinaimg.cn/thumb180/80c55ebagy1fmxa80y43pj20qo1bewmb.jpg", "http://wx3.sinaimg.cn/thumb180/677a5bc4gy1fmw573nqvjj20ht0bn3zf.jpg", "http://wx3.sinaimg.cn/thumb180/65f8ed38gy1fmvshl95h9j20qo0zi7au.jpg", "http://wx4.sinaimg.cn/thumb180/cf1114f6gy1fmvr2de839j20s90qowi9.jpg", "http://wx2.sinaimg.cn/thumb180/6253641fly1fmvooi4xixj20k00zkdkb.jpg", "http://wx1.sinaimg.cn/thumb180/671ba324ly1fmvm8kdpbvj20yi1a0x6p.jpg"],
        "name": "@cname",
        "gender|1": ["男", "女"],
        "age": "@natural(18,30)" + "岁",
        "salary|1": ["<3000元", "3000-5000元", "5000-8000元", ">8000元"],
        "height": "@natural(155,170)" + "cm",
        "city|1": ["新郑", "新密", "登封", "荥阳", "巩义", "洛阳", "偃师", "商丘", "永城", "安阳", "林州", "南阳", "邓州", "开封", "平顶山", "汝州", "焦作", "沁阳", "孟州", "新乡", "卫辉", "辉县", "鹤壁", "濮阳", "许昌", "禹州", "长葛", "漯河", "三门峡", "义马", "灵宝", "信阳", "周口", "项城", "驻马店", "济源"],
        "des|1": ["朋友不是看他有钱时能分你多少，而是看他没钱时能对你多好。", "我怎么变这样，这样倔强。", "我不怕苦不怕累不怕失败不怕鼻青脸肿不怕遍体鳞伤我只怕自己有梦却没从努力过。", "无论走多远 都不要忘了当初为了什么出发", "努力吧，你要对得起你所受过的苦。", "活得有棱有角是一种态度", "要么混日子等老要么拼命赢未来", "无论我此时是如何的彷徨迷茫最终我都要为自己想要过的生活而努力", "性格开朗，对生活充满激情，希望找可靠踏实的男人，希望男生好好打拼自己的事业，更希望你能有时间为我撑起一把伞，而这把伞正好是你我都喜欢的颜色。有时间晚上给我读一篇格林童话，听着你的声音，就仿佛听到你到了格林的童话世界。"]
    }]
});
    function getAlloffices(num,name){
        var officesInfo;
        var url=parent.window.location.href;
        var agency_name=url.split("?val=")[1]
       
        $.ajax({
                url: "http://47.104.94.216/api/public/",
                type: 'POST',
                async:false,
                data: {
                    service: "App.Agency.Get_agencies",
                    time: time_token()[0],
                    token: time_token()[1],
                    limit:num,
                    agency_name:agency_name


                },
            })
            .done(function(res) {
                if (res.ret == 200) {
                    officesInfo = res.data;

                } else {
                    layer.msg(res.msg);
                }
            })
            .fail(function(err) {
                layer.msg(err);
            })
            .always(function() {

            });

        return officesInfo;
    }
var offices=getAlloffices(1000);



var app=angular.module("officeApp", []);
app.controller("officeCtr", function($scope) {
     $scope.listform=JSONdata.userInfo;
     $scope.AllOffices=offices;
   
     if($scope.AllOffices.length==0){
        layer.msg("无查询结果");
     }
   

});

$(function() {
    $("#office_cont").kkPages({
        PagesClass: ".office_boxes",
        PagesMth: 4,
        PagesNavMth: 4 //显示导航个数

    })

})