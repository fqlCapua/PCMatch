    var user_selectors = Mock.mock({
        "choices": {
            "user_Gender": ["性别", "男", "女"],
            "user_info_married": ["婚姻情况", "未婚", "离异", "丧偶", "已婚"],
            "user_info_salary": ["收入", "2000以下", "2000-3000", "3000-4000", "4000-5000", "5000-7000", "7000-1000", "10000-15000", "  15000-20000", " 20000-25000", "25000-30000", " 30000-50000", "50000"],
            "user_info_constellation": ["星座", "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "魔羯座", "水瓶座", "双鱼座"],
            "user_info_animal": ["属相", "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
            "user_info_height": ["身高", "145厘米以下", "145厘米", "146厘米", "147厘米", "148厘米", "149厘米", "150厘米", "151厘米", "152厘米", "153厘米", "154厘米", "155厘米", "156厘米", "157厘米", "158厘米", "159厘米", "160厘米", "161厘米", "162厘米", "163厘米", "164厘米", "165厘米", "166厘米", "167厘米", "168厘米", "169厘米", "170厘米", "171厘米", "172厘米", "173厘米", "174厘米", "176厘米", "177厘米", "178厘米", "179厘米", "180厘米", "181厘米", "182厘米", "183厘米", "184厘米", "185厘米", "186厘米", "187厘米", "188厘米", "189厘米", "190厘米", "191厘米", "192厘米", "193厘米", "194厘米", "195厘米", "196厘米", "197厘米", "198厘米", "199厘米", "200厘米", "201厘米", "202厘米", "203厘米", "204厘米", "205厘米", "206厘米", "207厘米", "208厘米", "209厘米", "210厘米", "210厘米以上"],
            "user_info_education": ["学历", "初中", "中专/职高/技校", "高中", "大专", "本科", "硕士", "博士", "博士后"],
            "user_info_nation": ["民族", "汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", "彝族", "壮族", "布依族", "朝鲜族", "其他民族", "满族"],
            "user_info_profession": ["职业", "计算机/互联网", "电子电器/通信技术", "机械/仪器仪表", "销售", "客服及技术支持", "财务/审计/税务", "证券/金融/投资/银行", "保险", "生产/营运", "质量/安全管理", "工程/能源", "贸易/采购", "物流/仓储/运输", "技工", "化工/环保", "生物/制药/医疗器械", "医院/医疗/护理", "广告", "市场/公关", "影视/媒体", "写作/出版/印刷", "翻译", "艺术/设计/创意", "建筑/房地产/装饰装修", "物业管理", "人力资源", "高级经营管理", "行政/后勤", "咨询/顾问", "律师/法务/合规", "教育/培训", "科研", "酒店/旅游/餐饮/娱乐", "美容/健身", "商业零售服务", "交通运输服务", "保安/家政服务", "警察/其它", "公务员", "运动员", "农/林/牧/渔", "自由职业/兼职", "储备干部/培训生/实习生", "在校学生", "其他"],
            "user_info_weight": ["体重", "40公斤以下", "40公斤", "41公斤", "42公斤", "43公斤", "44公斤", "45公斤", "46公斤", "47公斤", "48公斤", "49公斤", "50公斤", "51公斤", "52公斤", "53公斤", "54公斤", "55公斤", "56公斤", "57公斤", "58公斤", "59公斤", "60公斤", "61公斤", "62公斤", "63公斤", "64公斤", "65公斤", "66公斤", "67公斤", "68公斤", "69公斤", "70公斤", "71公斤", "72公斤", "73公斤", "74公斤", "75公斤", "76公斤", "77公斤", "78公斤", "79公斤", "80公斤", "81公斤", "82公斤", "83公斤", "84公斤", "85公斤", "86公斤", "87公斤", "88公斤", "89公斤", "90公斤", "91公斤", "92公斤", "93公斤", "94公斤", "95公斤", "96公斤", "97公斤", "98公斤", "99公斤", "100公斤", "101公斤", "102公斤", "103公斤", "104公斤", "105公斤", "106公斤", "107公斤", "108公斤", "109公斤", "110公斤", "111公斤", "112公斤", "113公斤", "114公斤", "115公斤", "116公斤", "117公斤", "118公斤", "119公斤", "120公斤", "120公斤以上"],
            "user_info_child": ["子女", "没有", "有，和我住一起", "有，有时和我住一起", "有，不和我住一起"],
            "user_info_believe": ["宗教信仰", "无神论", "佛教", "道教", "基督教", "天主教", "信神但未定教", "儒教", "犹太教", "回教", "伊斯兰教", "印度教", "其它"],
            "user_info_house": ["购房情况", "以后再告诉你", "与父母同住", "租房", "已购房(有贷款)", "已购房(无贷款)", "住单位房", "住亲朋家", "需要时购置"],
            "user_info_smoke": ["是否吸烟", "不吸，很反感", "不吸烟，但不反感", "社交时偶尔吸烟", "烟不离手"],
            "user_info_drink": ["是否饮酒", "不喝酒", "社交需要喝", "兴致时小酌", "酒不离口"],
            "user_info_car": ["购车情况", "未购车", "已购车", "单位用车", "需要时购置"],
            "user_info_cook": ["厨艺", "色香味俱全", "能做几样可口的小菜", "不太会", "但愿为心爱的人学习"],
            "user_info_homework": ["家务", "任劳任怨", "希望对方承担家务", "一起分工合作", "看各自闲忙，协商分担"]
        }
    });
    var Allusersdata = Mock.mock({
        "userInfo|100-200": [{
            "headerImg|1": ["https://wx2.sinaimg.cn/mw690/e732ef12ly1fmzrv422bhj20px0pe46r.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmzrv5p1j4j20qo0qo0xn.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmyw7tsdalj20go0go75j.jpg", "https://wx4.sinaimg.cn/mw690/e732ef12ly1fnahqpj7a6j20ku0ku76u.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fmwgflx4x4j20h30gqq4y.jpg", "https://wx2.sinaimg.cn/mw690/e732ef12ly1fn6joko0m7j20k00k0nli.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fn6jojlf60j20g40g4t9h.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fn6jom3d76j222g219ndp.jpg", "https://wx1.sinaimg.cn/mw690/e732ef12ly1fnchxcz2xhj20ju0jujty.jpg", "https://wx3.sinaimg.cn/mw690/e732ef12ly1fnchxd8uivj20ku0ku0v6.jpg"],
            "name": "@cname",
            "gender|1": ["男", "女"],
            "age": "@natural(18,25)" + "岁",
            "isMarry|1": ["未婚", "离异"],
            "salary|1": ["<3000元", "3000-5000元", "5000-8000元", ">8000元"],
            "height": "@natural(155,180)" + "cm",
            "city|1": ["新郑", "新密", "登封", "荥阳", "巩义", "洛阳", "偃师", "商丘", "永城", "安阳", "林州", "南阳", "邓州", "开封", "平顶山", "汝州", "焦作", "沁阳", "孟州", "新乡", "卫辉", "辉县", "鹤壁", "濮阳", "许昌", "禹州", "长葛", "漯河", "三门峡", "义马", "灵宝", "信阳", "周口", "项城", "驻马", "济源"],
            "des|1": ["朋友不是看他有钱时能分你多少，而是看他没钱时能对你多好。", "我怎么变这样，这样倔强。", "我不怕苦不怕累不怕失败不怕鼻青脸肿不怕遍体鳞伤我只怕自己有梦却没从努力过。", "无论走多远 都不要忘了当初为了什么出发", "努力吧，你要对得起你所受过的苦。", "活得有棱有角是一种态度", "要么混日子等老要么拼命赢未来", "无论我此时是如何的彷徨迷茫最终我都要为自己想要过的生活而努力", "性格开朗，对生活充满激情，希望找可靠踏实的男人，希望男生好好打拼自己的事业，更希望你能有时间为我撑起一把伞，而这把伞正好是你我都喜欢的颜色。有时间晚上给我读一篇格林童话，听着你的声音，就仿佛听到你到了格林的童话世界。"]
        }]
    });
   // console.log(Allusersdata.userInfo)
    var app = angular.module("Myapp", []);
    app.controller("filterUserCtr",function($scope) {
          $scope.Userselectors = user_selectors.choices;
        
    })
    app.controller("AllUserCtr", function($scope) {
      $scope.Allusers=Allusersdata.userInfo;
     
    });

 $(function () {
    $("#content").kkPages({
          PagesClass:".s_user_box",
          PagesMth:30,
          PagesNavMth: 4 //显示导航个数

    })

 }) 
 