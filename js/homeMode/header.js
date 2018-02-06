function check_phone(phone) {


    var flag;
    var reg = /^1[34578]\d{9}$/;
    if ($(".phone").val() != "") {
        if (reg.test(phone)) {
            flag = true;
        } else {
            flag = false;
            layer.tips("格式错误", ".phone", {
                tips: [1, "#4082D4"],
                tipsMore: true
            });
        }
    } else {
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
        layer.tips("不能为空", ".userpwd", {
            tips: [1, "#4082D4"],
            tipsMore: true
        });
    }

    return flag;
}


function check_vCode(code) {

    var flag;
    var reg = /^[a-zA-Z0-9]{6,18}$/;
    if ($(".vCode").val() != "") {
        if (reg.test(phone)) {
            flag = true;
        } else {
            flag = false;
            layer.tips("验证码错误", ".vCode", {
                tips: [1, "#4082D4"],
                tipsMore: true
            });
        }
    } else {
          layer.tips("不能为空", ".vCode", {
                tips: [1, "#4082D4"],
                tipsMore: true
            });
    }

    return flag;
}

function check_PwdToPwd(pwd1, pwd2) {
    var flag;
    if($(".userpwd2").val()!=""){
 if (pwd2 == pwd1) {
        flag = true;
    } else {
        flag = false;
        layer.tips("密码不一致", ".userpwd2", {
            tips: [1, "#4082D4"],
            tipsMore: true
        });
    }
    }else{
  layer.tips("不能为空", ".userpwd2", {
            tips: [1, "#4082D4"],
            tipsMore: true
        });
    }
   
    return flag;
}
console.log(check_phone("135"));
console.log(check_pwd("135"));
console.log(check_PwdToPwd("2", "3"));