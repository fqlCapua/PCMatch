 function getSession(){
 	  var ss=window.sessionStorage;
 	   var userInfos=[];
 	if(ss.getItem('io')) {
      var jsonTxt=JSON.parse(ss.getItem('io'));
		var userid=jsonTxt.user_id;
		var userphone=jsonTxt.user_phone;
		userInfos.push(userid);
		userInfos.push(userphone);
		
		return userInfos;
  } else {
     layer.msg('请先登录');

  }
 	   
 }

    
 