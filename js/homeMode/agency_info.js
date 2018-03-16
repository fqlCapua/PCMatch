$(".form_box form").hide();

$(".agencyCreate").click(function(event) {
    $(".agNew").toggle(300);
});
$(".subNew").click(function(event) {
    $(".CreateNew").toggle();

});
$(".form_close").click(function(event) {
    $(this).parent().parent().hide();
});

function upload_HeadImgStr(obj) {

    var fileArr = [];
    var cur_timestamp = Date.parse(new Date()) / 1000;
    var md_token = hex_md5("law_" + hex_md5(String(cur_timestamp)) + "_law");

    var Arr = obj[0].files;
    $.each(Arr, function(index, el) {
        var fileData = new FormData();
        // var fileobj = obj[0].files[0];
        fileData.append('service', "App.Common.Upload_user_pic");
        fileData.append('time', cur_timestamp);
        fileData.append('token', md_token);
        fileData.append('user_pic_file', el);
        $.ajax({
            type: "post",
            url: "http://47.104.94.216/api/public/",
            async: false,
            cache: false,
            processData: false,
            contentType: false,
            data: fileData,
            success: function(data) {
                if (data.ret == 200) {
                    var str = data.data.path;
                    fileArr.push(str);
                } else {
                    layer.msg(data.msg);

                }
            },
            error: function(data) {
                layer.msg(data);
            }
        })


    });

    return fileArr.join(",");
}



function appendImg(Str) {
    var imgArr = String(Str).split(",");
    var imgStr = "";
    $.each(imgArr, function(index, el) {
        var ele = "http://www.yuelao666.com" + el;
        imgStr += "<img width='120' height='120' style='border:1px solid #BABABA;margin-right:3px 10px;' src='" + ele + "'  />"
    });
    return imgStr;
}
//加载我的婚介所列表
function loadAgency() {
    var agency_lists = [];
    var userid = getSession()[0];
    var name = $(".ag_name").val();
    var address = $(".ag_address").val();
    var introduce = $(".ag_introduce").val();
    $.ajax({
            url: "http://47.104.94.216/api/public/",
            type: 'POST',
            async: false,
            data: {
                service: "App.Agency.Get_agencies",
                time: time_token()[0],
                token: time_token()[1],
                agency_uid: userid,
            },
        })
        .done(function(res) {
            if (res.ret == 200) {
                agency_lists = res.data;

            } else {
                layer.msg(res.msg)
            }
        })
        .fail(function(err) {
            console.log("error");
        })
        .always(function() {

        });
    return agency_lists;
}

$(".subNew").click(function() {
    CreateNewAgency();
});

$(function() {
    var list = loadAgency();
    for (var i = 0; i < list.length; i++) {
        var tr = $("<tr agency_id=" + list[i].agency_id + " info=" + JSON.stringify(list[i]) + "><td class='col-md-1 isDel'><input type='checkbox'>&nbsp;</td><td class='col-md-2'>" + list[i].agency_name + "</td><td class='col-md-2'>" + list[i].agency_address + "</td><td class='agency_des class='col-md-5''>" + list[i].agency_introduce + "</td><td class='col-md-3'><input class='btn btn-sm btn-danger agencyDetail' type='button' name='agInfo' value='详情'>&nbsp;<input class='btn btn-sm btn-success agencyChange' type='button' name='agInfo' value='修改'>&nbsp;<input class='btn btn-sm btn-danger agencyDel' type='button' value='删除'>&nbsp;</td></tr>");
        $(".agency_Info").append(tr);
    }
})


//婚介所详情
function loadDetail(id) {
    var agencyInfo;
    $.ajax({
            url: "http://47.104.94.216/api/public/",
            type: 'POST',
            async: false,
            data: {
                service: "App.Agency.Get_agency",
                time: time_token()[0],
                token: time_token()[1],
                agency_id: id,
            },
        })
        .done(function(res) {
            if (res.ret == 200) {
                agencyInfo = res.data;

                // $("").val(Info.agency_name);
                // $(".a_address")
                // $(".a_introduce")
                // $(".a_pic")
            } else {
                layer.msg(res.msg)
            }
        })
        .fail(function(err) {
            console.log("error");
        })
        .always(function() {

        });
    return agencyInfo;
}


//创建新
function CreateNewAgency() {
    var userid = getSession()[0];
    var name = $(".agInfo .ag_name").val();
    console.log(name)
    var address = $(".ag_address").val();
    var introduce = $(".ag_introduce").val();
    //var area=$(".ag_area").val();
    var pics = upload_HeadImgStr($("#file1"));

    $.ajax({
            url: "http://47.104.94.216/api/public/",
            type: 'POST',
            async: false,
            data: {
                service: "App.Agency.Add_agency",
                time: time_token()[0],
                token: time_token()[1],
                user_id: userid,
                agency_name: name,
                agency_address: address,
                agency_introduce: introduce,
                agency_pics: pics,
                agency_ctime: time_token()[0],
                // agency_area:area
            },
        })
        .done(function(res) {
            if (res.ret == 200) {
                layer.msg("创建成功");
                 $(".agency_Info").html("");
                    var list = loadAgency();
                    for (var i = 0; i < list.length; i++) {
                        var tr = $("<tr agency_id=" + list[i].agency_id + " info=" + JSON.stringify(list[i]) + "><td class='col-md-1 isDel'><input type='checkbox'>&nbsp;</td><td class='col-md-2'>" + list[i].agency_name + "</td><td class='col-md-2'>" + list[i].agency_address + "</td><td class='agency_des class='col-md-5''>" + list[i].agency_introduce + "</td><td class='col-md-3'><input class='btn btn-sm btn-danger agencyDetail' type='button' name='agInfo' value='详情'>&nbsp;<input class='btn btn-sm btn-success agencyChange' type='button' name='agInfo' value='修改'>&nbsp;<input class='btn btn-sm btn-danger agencyDel' type='button' value='删除'>&nbsp;</td></tr>");
                        $(".agency_Info").append(tr);
                    }
            } else {
                layer.msg(res.msg)
            }
        })
        .fail(function(err) {
            console.log("error");
        })
        .always(function() {

        });

}

//修改婚介所信息
function ChangeNewAgency(name,address,introduce,id) {
	
	
  
    $.ajax({
            url: "http://47.104.94.216/api/public/",
            type: 'POST',
            async: false,
            data: {
                service: "App.Agency.Update_agency",
                time: time_token()[0],
                token: time_token()[1],
                agency_id:id,
                agency_name:name,
                agency_address:address,
                agency_introduce:introduce,
               // agency_pics:pics,
                agency_ctime:time_token()[0],
                // agency_area:area
            },
        })
        .done(function(res) {
            if (res.ret == 200) {
            	if(res.data.result==1){
            		layer.msg("修改成功");
            	}else{
            		layer.msg("未更改");
            	}
                
               
            } else {
                layer.msg(res.msg)
            }
        })
        .fail(function(err) {
            console.log("error");
        })
        .always(function() {

        });

}

function DelAgency(id) {

    $.ajax({
            url: "http://47.104.94.216/api/public/",
            type: 'POST',
            async: false,
            data: {
                service: "App.Agency.Del_agency",
                time: time_token()[0],
                token: time_token()[1],
                agency_id: id,
            },
        })
        .done(function(res) {
            if (res.ret == 200) {
                if (res.data.result == 1) {
                    layer.msg("已删除");
                    $(".agency_Info").html("");
                    var list = loadAgency();
                    for (var i = 0; i < list.length; i++) {
                        var tr = $("<tr agency_id=" + list[i].agency_id + " info=" + JSON.stringify(list[i]) + "><td class='col-md-1 isDel'><input type='checkbox'>&nbsp;</td><td class='col-md-2'>" + list[i].agency_name + "</td><td class='col-md-2'>" + list[i].agency_address + "</td><td class='agency_des class='col-md-5''>" + list[i].agency_introduce + "</td><td class='col-md-3'><input class='btn btn-sm btn-danger agencyDetail' type='button' name='agInfo' value='详情'>&nbsp;<input class='btn btn-sm btn-success agencyChange' type='button' name='agInfo' value='修改'>&nbsp;<input class='btn btn-sm btn-danger agencyDel' type='button' value='删除'>&nbsp;</td></tr>");
                        $(".agency_Info").append(tr);
                    }
                }

            } else {
                layer.msg(res.msg)
            }
        })
        .fail(function(err) {
            console.log("error");
        })
        .always(function() {

        });


}
//删除
$(".agency_Info").on("click", ".agencyDel", function() {
    if (window.confirm("确定要删除么?")) {

        var agency_id = $(this).parent().parent().attr("agency_id");
        DelAgency(agency_id);
    } else {

    }

});
$(".agency_Info").on("click", ".agencyDetail,.agencyChange", function() {
    var form=$(this).attr("name");
    var agency_id = $(this).parent().parent().attr("agency_id");
    $(".agInfo").attr("agency_id",agency_id);
    //var Info=JSON.parse($(this).parent().parent().attr("info"));
    var Info = loadDetail(agency_id);

    $(".form_box form").hide();
    $("." + form).toggle(300);
    $("." + form).find("input[type=text]").val("");
    $("." + form).find(".a_pic").html("");
    $("." + form).find(".a_name").val(Info.agency_name);
    $("." + form).find(".a_address").val(Info.agency_address);
    $("." + form).find(".a_introduce").val(Info.agency_introduce);
    $("." + form).find(".a_pic").append(appendImg(Info.agency_pics));
});
$(".changeAgency").click(function(event) {
	var agency_id=$(".agInfo").attr("agency_id");
	
	
    
    //var area=$(".ag_area").val(); upload_HeadImgStr($("#file1"));
   var name=$(".agInfo").serialize().split("&")[0].split("agency_name=")[1];
   var address = decodeURIComponent($(".agInfo").serialize().split("&")[1].split("agency_address=")[1],true);
   var introduce = decodeURIComponent($(".agInfo").serialize().split("&")[2].split("agency_introduce=")[1],true);
   
	ChangeNewAgency(name,address,introduce,agency_id);
});

