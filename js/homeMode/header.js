var ReqUrl = "http://47.104.94.216/api/public/";

function lock_string(str) {
    var newLocker;
    newLocker = hex_md5("my58_" + hex_md5("my58_" + str));
    return newLocker;
}
function time_token() {
    var timestamp,md_token,timeArr=[];
    timestamp=Date.parse(new Date())/1000;
    md_token=lock_string(timestamp);
    timeArr.push(timestamp);
    timeArr.push(md_token);
    return timeArr;
}




function check_phone(Phone) {

    var flag;
    var reg = /^1[34578]\d{9}$/;
    if (Phone != "") {

        if (reg.test(Phone)) {
            flag = true;
        } else {
            flag = false;
            layer.tips("格式错误", ".phone", {
                tips: [1, "#4082D4"],
                tipsMore: true
            });
        }
    } else {

        flag = false;
        layer.tips("不能为空", ".phone", {
            tips: [1, "#4082D4"],
            tipsMore: true
        });
    }

    return flag;
}

function check_pwd(pwd) {
    var flag;
    var reg = /^[a-zA-Z0-9]{6,18}$/;
    if ($(".userpwd").val() != "") {

        if (reg.test(pwd)) {
            flag = true;
        } else {
            flag = false;
            layer.tips("格式为6-18位数字或者字母", ".userpwd", {
                tips: [1, "#4082D4"],
                tipsMore: true
            });
        }
    } else {
        flag = false;
        layer.tips("不能为空", ".userpwd", {
            tips: [1, "#4082D4"],
            tipsMore: true
        });
    }

    return flag;
}

function Send_code() {
    var Code;
    var phone = $(".phone").val();
    if (phone != "") {
        var timeStamp = Date.parse(new Date) / 1000;
        var md_token = hex_md5("my58_" + hex_md5("my58_" + timeStamp));
        $.ajax({
                url: 'http://47.104.94.216/api/public/',
                type: 'POST',
                async: false,
                data: {
                    service: "App.User.Get_code",
                    time: timeStamp,
                    token: md_token,
                    user_phone: phone
                },
            })
            .done(function(res) {
                if (res.ret == 200) {
                    Code = res.data.code;
                } else {
                    layer.msg(res.msg);
                }


            })
            .fail(function(err) {

            })
            .always(function() {

            });
    } else {
       layer.tips("不能为空", ".phone", {
            tips: [1, "#4082D4"],
            tipsMore: true
        });
    }

    return Code;
}

function check_vCode() {
    var flag;

    if ($(".vCode").val() != "") {
        var phoneCode = $(".vCode").val();
        var phoneLocker = lock_string(phoneCode);
        if (phoneLocker == Send_code()) {
            flag = true;

        } else {
            layer.tips("验证码错误", ".vCode", {
                tips: [1, "#4082D4"],
                tipsMore: true
            });
            flag = false;
        }
    } else {
        flag = false;
        layer.tips("不能为空", ".vCode", {
            tips: [1, "#4082D4"],
            tipsMore: true
        });
    }

    return flag;
}


function check_PwdToPwd(pwd1, pwd2) {
    var flag;
    if ($(".userpwd2").val() != "") {
        if (pwd2 == pwd1) {
            flag = true;
        } else {
            flag = false;
            layer.tips("密码不一致", ".userpwd2", {
                tips: [1, "#4082D4"],
                tipsMore: true
            });
        }
    } else {
        flag = false;
        layer.tips("不能为空", ".userpwd2", {
            tips: [1, "#4082D4"],
            tipsMore: true
        });
    }

    return flag;
}



var InterValObj; //timer变量，控制时间 
var count = 300; //间隔函数，1秒执行 
var curCount; //当前剩余秒数
function NoClick() {
    curCount = count;
    $(".provideBtn").attr("disabled", true);
    $(".provideBtn").val(curCount + "s后重新发送");
    timer1 = window.setInterval("remainTime()", 1000);
}

function remainTime() {
    if (curCount == 0) {
        clearInterval(timer1);
        $(".provideBtn").val("免费获取验证码");
        $(".provideBtn").removeAttr('disabled');
    } else {
        curCount--;
        $(".provideBtn").val(curCount + "s后重新发送");

    }

}

function FormRegister(FormObj) {
    $.ajax({
            url: ReqUrl,
            type: "POST",
            data:FormObj,
        })
        .done(function(res) {
           if(res.ret==200){
           	 console.log(res.data);
           }else{
           	 layer.msg(res.msg)
           }
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });


}

$(".logon-box a").click(function() {
    parent.window.location.href = "index.html#/login";
})

$(".provideBtn").click(function() {
    var phone = $(".phone").val();
    if (check_phone(phone)) {
        NoClick();
        Send_code(phone);
    }
});

$(".submiBtn").click(function(event) {

    var phone = $(".phone").val();
    var pwd1 = $(".userpwd").val();
    var pwd2 = $(".userpwd2").val();
    var FormData={
    	service:"App.User.Register",
    	time:time_token()[0],
    	token:time_token()[1],
    	user_phone:phone,
    	user_password:pwd2
    }

if (check_phone(phone) &&  check_vCode()&&check_pwd()  && check_PwdToPwd(pwd1.pwd2)) {
          FormRegister(FormData);
    }else{
       
    }
});