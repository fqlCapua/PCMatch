 function getSession(i){
 	  var ss=window.sessionStorage;
 	if(ss.getItem('law_sign')) {
      var jsonTxt=JSON.parse(ss.getItem('law_sign'));
		var jsonStr=jsonTxt[jsonTxt.length-1].law_law;
		//var JsonUserId=jsonStr.split("_")[0];
		//var userTag=jsonStr.split("_")[2];
		
		//0为  userid  2位用户身份
		return jsonStr.split("_")[i];
  } else {
     //layer.msg('请先登录');

  }
 	   
 }

    
 