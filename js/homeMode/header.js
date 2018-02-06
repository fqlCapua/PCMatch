function check_phone(phone) {
    var flag;
	var reg=/^1[34578]\d{9}$/;
    if(reg.test(phone)){
    	flag=true;
    }else{
    	flag=false;
    	layer.tips("手机号格式错误",".phone",{
            tips:[1,"#4082D4"]
    	});
    }
    return flag;
}

function check_pwd(pwd) {
    var flag;
	var reg=/^[a-zA-Z0-9]{6,18}$/;
    if(reg.test(pwd)){
    	flag=true;
    }else{
    	flag=false;
    	layer.tips("密码格式为6-18位数字或者字母",".userpwd",{
            tips:[1,"#4082D4"]
    	});
    }
    return flag;
}


function check_vCode(code) {
    var flag;
	var reg=/^[a-zA-Z0-9]{6,18}$/;
    if(reg.test(phone)){
    	flag=true;
    }else{
    	flag=false;
    	layer.tips("验证码错误",".userpwd",{
            tips:[1,"#4082D4"]
    	});
    }
    return flag;
}
console.log(check_phone("135"));
console.log(check_pwd("135"));