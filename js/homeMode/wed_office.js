var offices = Mock.mock({
    "lists|30-50":[{
        "user_agency_id|1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "user_agency_tel|1": ["0371-000000001",
 "0371-000000002",
 "0371-000000003",
 "0371-000000004",
 "0371-000000005",
 "0371-000000006",
 "0371-000000007",
 "0371-000000008",
 "0371-000000009",
 "0371-000000000"], 
        "agency_name|1": ["郑州小企鹅婚介所", "郑州大白兔婚介所", "郑州Love婚介所", "郑州千里姻缘一下牵婚介所", "郑州大上海婚介所", "郑州吾爱婚介所", "郑州非你莫属婚介所"],
        "agency_address|1": ["花园路8号正道花园商厦B1楼",
            "河南省郑州市金水区纬五路7号",
            "河南省郑州市金水区经三路与红专路交叉口向西50米",
            "郑州市纬五路40号", "河南省郑州市金水区花园路21号",
            "北路10-6号"
        ],
        "ages": "@natural(5,10)",
        "numbers": "@natural(50,200)",
        "agency_introduce|1": [],
        "agency_pics|1": ["https://wx2.sinaimg.cn/mw690/e732ef12ly1fmzrv422bhj20px0pe46r.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmzrv5p1j4j20qo0qo0xn.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmyw7tsdalj20go0go75j.jpg", "https://wx4.sinaimg.cn/mw690/e732ef12ly1fnahqpj7a6j20ku0ku76u.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmwgflx4x4j20h30gqq4y.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fn6joko0m7j20k00k0nli.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fn6jojlf60j20g40g4t9h.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fn6jom3d76j222g219ndp.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fnchxcz2xhj20ju0jujty.jpg", "https://wx3.sinaimg.cn/mw690/e732ef12ly1fnchxd8uivj20ku0ku0v6.jpg"],
        "agency_ctime|1": ["身高", "145厘米以下", "145厘米", "146厘米", "147厘米", "148厘米", "149厘米", "150厘米", "151厘米", "152厘米", "153厘米", "154厘米", "155厘米", "156厘米", "157厘米", "158厘米", "159厘米", "160厘米", "161厘米", "162厘米", "163厘米", "164厘米", "165厘米", "166厘米", "167厘米", "168厘米", "169厘米", "170厘米", "171厘米", "172厘米", "173厘米", "174厘米", "176厘米", "177厘米", "178厘米", "179厘米", "180厘米", "181厘米", "182厘米", "183厘米", "184厘米", "185厘米", "186厘米", "187厘米", "188厘米", "189厘米", "190厘米", "191厘米", "192厘米", "193厘米", "194厘米", "195厘米", "196厘米", "197厘米", "198厘米", "199厘米", "200厘米", "201厘米", "202厘米", "203厘米", "204厘米", "205厘米", "206厘米", "207厘米", "208厘米", "209厘米", "210厘米", "210厘米以上"],
        "agency_uid|1": ["学历", "初中", "中专/职高/技校", "高中", "大专", "本科", "硕士", "博士", "博士后"],
        "agency_area|1": ["民族", "汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", "彝族", "壮族", "布依族", "朝鲜族", "其他民族", "满族"],

    }]
});

var app = angular.module("officeApp", []);
app.controller("officeCtr", function($scope) {
    $scope.AllOffices = offices.lists;
   
});