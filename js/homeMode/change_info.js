  var ReqUrl="http://47.104.94.216/api/public/";
  var user_infos = Mock.mock({
        "choices": {
        	"req_age":["18-23","23-28","28-33","33-39","39-43","43-48","48-53"],
            "user_Gender": ["性别", "男", "女"],
            "user_info_married": [ "未婚", "离异", "丧偶", "已婚"],
            "user_info_salary": [ "<2000", "2000-3000", "3000-4000", "4000-5000", "5000-7000", "7000-1000", "10000-15000", "  15000-20000", " 20000-30000", ">30000"],
            "user_info_constellation": ["白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "魔羯座", "水瓶座", "双鱼座"],
            "user_info_animal": [ "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
            "user_info_height": ["<140cm","140-145cm","145-150cm","150-155cm","155-160cm","160-165cm","165-170cm","170-175cm","175-180cm","180-185cm","185-190cm","190-195cm",
">195cm"],
            "user_info_education": ["初中", "中专/职高/技校", "高中", "大专", "本科", "硕士", "博士", "博士后"],
            "user_info_nation": [ "汉族", "蒙古族", "回族", "藏族", "维吾尔族", "苗族", "彝族", "壮族", "布依族", "朝鲜族", "其他民族", "满族"],
            "user_info_profession": [ "计算机/互联网", "电子电器/通信技术", "机械/仪器仪表", "销售", "客服及技术支持", "财务/审计/税务", "证券/金融/投资/银行", "保险", "生产/营运", "质量/安全管理", "工程/能源", "贸易/采购", "物流/仓储/运输", "技工", "化工/环保", "生物/制药/医疗器械", "医院/医疗/护理", "广告", "市场/公关", "影视/媒体", "写作/出版/印刷", "翻译", "艺术/设计/创意", "建筑/房地产/装饰装修", "物业管理", "人力资源", "高级经营管理", "行政/后勤", "咨询/顾问", "律师/法务/合规", "教育/培训", "科研", "酒店/旅游/餐饮/娱乐", "美容/健身", "商业零售服务", "交通运输服务", "保安/家政服务", "警察/其它", "公务员", "运动员", "农/林/牧/渔", "自由职业/兼职", "储备干部/培训生/实习生", "在校学生", "其他"],
            "user_info_weight": [ "40公斤以下", "40公斤", "41公斤", "42公斤", "43公斤", "44公斤", "45公斤", "46公斤", "47公斤", "48公斤", "49公斤", "50公斤", "51公斤", "52公斤", "53公斤", "54公斤", "55公斤", "56公斤", "57公斤", "58公斤", "59公斤", "60公斤", "61公斤", "62公斤", "63公斤", "64公斤", "65公斤", "66公斤", "67公斤", "68公斤", "69公斤", "70公斤", "71公斤", "72公斤", "73公斤", "74公斤", "75公斤", "76公斤", "77公斤", "78公斤", "79公斤", "80公斤", "81公斤", "82公斤", "83公斤", "84公斤", "85公斤", "86公斤", "87公斤", "88公斤", "89公斤", "90公斤", "91公斤", "92公斤", "93公斤", "94公斤", "95公斤", "96公斤", "97公斤", "98公斤", "99公斤", "100公斤", "101公斤", "102公斤", "103公斤", "104公斤", "105公斤", "106公斤", "107公斤", "108公斤", "109公斤", "110公斤", "111公斤", "112公斤", "113公斤", "114公斤", "115公斤", "116公斤", "117公斤", "118公斤", "119公斤", "120公斤", "120公斤以上"],
            "user_info_child": [ "没有", "有，和我住一起", "有，有时和我住一起", "有，不和我住一起"],
            "user_info_believe": [ "无神论", "佛教", "道教", "基督教", "天主教", "信神但未定教", "儒教", "犹太教", "回教", "伊斯兰教", "印度教", "其它"],
            "user_info_house": [ "以后再告诉你", "与父母同住", "租房", "已购房(有贷款)", "已购房(无贷款)", "住单位房", "住亲朋家", "需要时购置"],
            "user_info_smoke": [ "不吸，很反感", "不吸烟，但不反感", "社交时偶尔吸烟", "烟不离手"],
            "user_info_drink": [ "不喝酒", "社交需要喝", "兴致时小酌", "酒不离口"],
            "user_info_car": ["未购车", "已购车", "单位用车", "需要时购置"],
            "user_info_cook": [ "色香味俱全", "能做几样可口的小菜", "不太会", "但愿为心爱的人学习"],
            "user_info_homework": [ "任劳任怨", "希望对方承担家务", "一起分工合作", "看各自闲忙，协商分担"]
        }
    });
var cityArray = new Array(); //定义 城市 数据数组
cityArray[0] = new Array("北京市", "东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆");
cityArray[1] = new Array("天津市", "和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县");
cityArray[2] = new Array("上海市", "黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明");
cityArray[3] = new Array("重庆市", "万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁 |大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川");
cityArray[4] = new Array("河北省", "石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
cityArray[5] = new Array("山西省", "太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
cityArray[6] = new Array("内蒙古自治区", "呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
cityArray[7] = new Array("辽宁省", "沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
cityArray[8] = new Array("吉林省", "长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
cityArray[9] = new Array("黑龙江省", "哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
cityArray[10] = new Array("江苏省", "南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
cityArray[11] = new Array("浙江省", "杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
cityArray[12] = new Array("安徽省", "合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
cityArray[13] = new Array("福建省", "福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
cityArray[14] = new Array("江西省", "南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
cityArray[15] = new Array("山东省", "济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
cityArray[16] = new Array("河南省", "郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
cityArray[17] = new Array("湖北省", "武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
cityArray[18] = new Array("湖南省", "长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
cityArray[19] = new Array("广东省", "广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
cityArray[20] = new Array("广西壮族自治区", "南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
cityArray[21] = new Array("海南省", "海口|三亚");
cityArray[22] = new Array("四川省", "成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
cityArray[23] = new Array("贵州省", "贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
cityArray[24] = new Array("云南省", "昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
cityArray[25] = new Array("西藏自治区", "拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
cityArray[26] = new Array("陕西省", "西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
cityArray[27] = new Array("甘肃省", "兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
cityArray[28] = new Array("宁夏回族自治区", "银川|石嘴山|吴忠|固原");
cityArray[29] = new Array("青海省", "西宁|海东|海南|海北|黄南|玉树|果洛|海西");
cityArray[30] = new Array("新疆维吾尔族自治区", "乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
cityArray[31] = new Array("香港特别行政区", "香港特别行政区");
cityArray[32] = new Array("澳门特别行政区", "澳门特别行政区");
cityArray[33] = new Array("台湾省", "台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");
cityArray[34] = new Array("其它", "北美洲|南美洲|亚洲|非洲|欧洲|大洋洲");

var app=angular.module("infoApp",[]);
app.controller('infoCtr', function($scope){
	$scope.users=user_infos.choices;
	
	
})
function upload_ImgStr(obj) {

    var fileArr = [];
    var cur_timestamp = Date.parse(new Date()) / 1000;
    var md_token = hex_md5("law_" + hex_md5(String(cur_timestamp)) + "_law");
    var fileNum = obj[0].files;
    $.each(fileNum, function(i,ele) {
        
        var fileData = new FormData();
        var fileobj = obj[0].files[i];
        fileData.append('service', "App.Common.Upload_user_pic");
        fileData.append('time', cur_timestamp);
        fileData.append('token', md_token);
          fileData.append('user_pic_file', ele);
         $.ajax({
            type: "post",
            url: "http://47.104.94.216/api/public/",
            async: false,
            cache: false,
            processData: false,
            contentType: false,
            data: fileData,
            success: function(data) {
               if(data.ret == 200) {
                   // layer.msg("上传成功");
                    var str = data.data.path;
                    fileArr.push(str);
                }else {
                    layer.msg(data.msg);
                    
                }
            },
            error:function(data) {
                 layer.msg(data);
            }
        })
       

    });
  return fileArr.join(",");
  
}

function upload_HeadImgStr(obj) {

    var fileArr = [];
    var cur_timestamp = Date.parse(new Date()) / 1000;
    var md_token = hex_md5("law_" + hex_md5(String(cur_timestamp)) + "_law");
    var fileNum = obj[0].files[0];
   
        
        var fileData = new FormData();
        var fileobj = obj[0].files[0];
        fileData.append('service',"App.Common.Upload_head_img");
        fileData.append('time',cur_timestamp);
        fileData.append('token',md_token);
          fileData.append('head_img_file',fileobj);
         $.ajax({
            type: "post",
            url: "http://47.104.94.216/api/public/",
            async: false,
            cache: false,
            processData: false,
            contentType: false,
            data: fileData,
            success: function(data) {
               if(data.ret == 200) {
                //layer.msg("上传头像成功");
                    var str=data.data.path;
                        fileArr.push(str);
                }else {
                    layer.msg(data.msg);
                    
                }
            },
            error:function(data) {
                 layer.msg(data);
            }
        })
       

    
    //console.log(fileArr.join(""))  
  return fileArr.join(",");
}
//上传图片
 $(".myphotos").change(function(event) {
     var photosStr=upload_ImgStr($(this));
     $(".upload_btn").attr("name",photosStr);
 });

 $(".upload_btn").click(function(event) {
       $(".myphotos").click();
        
 });
//上传头像
 $(".header_img").change(function(event) {
        var headerStr=upload_HeadImgStr($(this));
        $(".user_head_img").attr("name",headerStr);
 });
function  appendImg(Str){
   var imgArr=String(Str).split(",");
   var imgStr="";
   $.each(imgArr,function(index, el) {
       var ele="http://www.yuelao666.com"+el;
       imgStr+="<img src='"+ele+"'  />"
   });
   return imgStr;
}

    function sub_all(){ 
         var index=layer.load(0,{shade:[0.1,"#eee"],offset: ['50%', '50%']});
         var userid=getSession()[0];
            var formData={
                service:"App.User.Save_user",
                time:time_token()[0],
                token:time_token()[1],
                user_id:userid,
                user_age:$(".user_age").val(),
                user_head_img:$(".user_head_img").attr("name"),
                user_married:$(".user_married").children("option:selected").index(),
                user_salary:$(".user_salary").children("option:selected").index(),
                user_constellation:$(".user_constellation").children("option:selected").index(),
                user_animal:$(".user_animal").children("option:selected").index(),
                user_height:$(".user_height").children("option:selected").index(),
                user_education:$(".user_education").children("option:selected").index(),
               user_origin:$(".user_origin").children("select").eq(0).children("option:selected").index()+"-", //+$(".user_origin").children("select").eq(1).children("option:selected").index(),
                user_nation:$(".user_nation").children("option:selected").index(),
                user_life_area:$(".user_life_area1").children("option:selected").index()+"-"+$(".user_life_area2").children("option:selected").index(),
                user_nickname:$(".user_nickname").val(),
                user_identity:$(".user_identity").val(),
                user_maid:$(".user_maid").val(),
                user_introduce:$(".user_introduce").val(),
                user_profession:$(".user_profession").children("option:selected").index(),
                user_pics:$(".upload_btn").attr("name"),
                user_sex:$(".user_sex").children("option:selected").index(),
                user_birth_year:$(".user_date").val().split("-")[0],
                user_birth_month:$(".user_date").val().split("-")[1],
                user_birth_day:$(".user_date").val().split("-")[2],
                user_true_name:$(".user_true_name").val(),
                user_weight:$(".user_weight").children("option:selected").index(),
                user_child:$(".user_child").children("option:selected").index(),
                user_believe:$(".user_believe").children("option:selected").index(),
                user_house:$(".user_house").children("option:selected").index(),
                user_smoke:$(".user_smoke").children("option:selected").index(),
                user_drink:$(".user_drink").children("option:selected").index(),
                user_car:$(".user_car").children("option:selected").index(),
                user_cook:$(".user_cook").children("option:selected").index(),
                user_homework:$(".user_homework").children("option:selected").index(),
                user_choice_sex:$(".user_choice_sex").children("option:selected").index(),
                user_choice_max_age:$(".user_choice_age").children("option:selected").index(),
                //user_choice_min_age:$(".user_cook").children("option:selected").index(),
                user_choice_house:$(".user_choice_house").children("option:selected").index(),
                user_choice_car:$(".user_choice_car").children("option:selected").index(),
                user_choice_education:$(".user_choice_education").children("option:selected").index(),
                user_choice_child:$(".user_choice_child").children("option:selected").index(),
                user_choice_height:$(".user_choice_height").children("option:selected").index(),
                user_choice_salary:$(".user_choice_salary").children("option:selected").index(),
                user_choice_life_area:$(".user_choice_life_area1").children("option:selected").index()+"-"+$(".user_choice_life_area2").children("option:selected").index(),
                user_choice_married:$(".user_choice_married").children("option:selected").index()

            };
    
          $.ajax({
            url:"http://47.104.94.216/api/public/",
            type:'POST',
            async:false,
            data:formData,

        })
        .done(function(res) {
          
            if(res.ret==200){
                
                  layer.msg("保存成功")
               
             }else{
                layer.msg(res.msg)
             }
            
        })
        .fail(function(err) {
          
            console.log("error");
        })
        .always(function() {
             layer.close(index);
            
             
        });
        
   

}


//加载
 $(function(){ 
        
         var userid=getSession()[0];
      
          $.ajax({
            url:"http://47.104.94.216/api/public/",
            type:'POST',
            async:false,
            data:{
                service:"App.User.Get_user",
                time:time_token()[0],
                token:time_token()[1],
                user_id:userid,
            },

        })
        .done(function(res) {
           if(res.ret==200){
               var userInfo=res.data;
              
               $(".user_age").val(userInfo.user_age),
             console.log(userInfo)
                //$(".user_head_img").attr("name"),
                $(".show_head_img").attr("src","http://www.yuelao666.com"+userInfo.user_head_img)
                $(".user_married").children("option").eq(userInfo.user_married).attr("selected",true);
                $(".user_salary").children("option").eq(userInfo.user_salary).attr("selected",true);
                $(".user_constellation").children("option").eq(userInfo.user_constellation).attr("selected",true);
                $(".user_animal").children("option").eq(userInfo.user_animal).attr("selected",true);
                $(".user_height").children("option").eq(userInfo.user_height).attr("selected",true);
                $(".user_education").children("option").eq(userInfo.user_education).attr("selected",true);
               $(".user_origin").val(userInfo.user_origin);

                //$(".user_origin1").children("option").eq(String(userInfo.user_origin).split("-")[0]).attr("selected",true);
                //$(".user_origin2").children("option").eq(String(userInfo.user_origin).split("-")[1]).attr("selected",true);
                $(".user_nation").children("option").eq(userInfo.user_nation).attr("selected",true);
                $(".user_life_area1").children("option").eq(String(userInfo.user_life_area).split("-")[0]).attr("selected",true);
                $(".user_life_area2").children("option").eq(String( userInfo.user_life_area).split("-")[1]).attr("selected",true);
                $(".user_nickname").val(userInfo.user_nickname),
                $(".user_identity").val(userInfo.user_identity),
               //$(".user_maid").val(userInfo.user_maid),
                $(".user_introduce").val(userInfo.user_introduce),
                $(".user_profession").children("option").eq(userInfo.user_profession).attr("selected",true);
                var objImg=appendImg(userInfo.user_pics);
                $(".imgBox").append($(String(objImg)));
                $(".user_sex").children("option").eq( userInfo.user_sex).attr("selected",true);
                $(".user_date").val(userInfo.user_birth_year+"-"+ userInfo.user_birth_month+"-"+userInfo.user_birth_day)
               $(".user_true_name").val( userInfo.user_true_name),
                $(".user_weight").children("option").eq(userInfo.user_weight).attr("selected",true);
                $(".user_child").children("option").eq(userInfo.user_child).attr("selected",true);
                $(".user_believe").children("option").eq(userInfo.user_believe).attr("selected",true);
                $(".user_house").children("option").eq(userInfo.user_house).attr("selected",true);
                $(".user_smoke").children("option").eq(userInfo.user_smoke).attr("selected",true);
                $(".user_drink").children("option").eq(userInfo.user_drink).attr("selected",true);
                $(".user_car").children("option").eq(userInfo.user_car).attr("selected",true);
                $(".user_cook").children("option").eq(userInfo.user_cook).attr("selected",true);
                $(".user_homework").children("option").eq(userInfo.user_homework).attr("selected",true);
                $(".user_choice_sex").children("option").eq(userInfo.user_choice_sex).attr("selected",true);
                $(".user_cook").children("option").eq(userInfo.user_cook).attr("selected",true);
                $(".user_choice_age").children("option").eq(userInfo.user_choice_max_age).attr("selected",true);
                $(".user_choice_house").children("option").eq(userInfo.user_choice_house).attr("selected",true);
                $(".user_choice_car").children("option").eq(userInfo.user_choice_car).attr("selected",true);
                $(".user_choice_education").children("option").eq(userInfo.user_choice_education).attr("selected",true);
                $(".user_choice_child").children("option").eq(userInfo.user_choice_child).attr("selected",true);
                $(".user_choice_height").children("option").eq(userInfo.user_choice_height).attr("selected",true);
                $(".user_choice_salary").children("option").eq(userInfo.user_choice_salary).attr("selected",true);
                $(".user_choice_life_area1").children("option").eq(userInfo.user_choice_life_area.split("-")[0]).attr("selected",true);
                $(".user_choice_life_area2").children("option").eq(userInfo.user_choice_life_area.split("-")[1]).attr("selected",true);
                $(".user_choice_married").children("option").eq(userInfo.user_choice_married).attr("selected",true);
             }else{
                layer.msg(res.msg)
             }
            
        })
        .fail(function(err) {
          console.log("error");
        })
        .always(function() {
            
            
             
        });
        
   

})