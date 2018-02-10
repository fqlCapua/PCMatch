    $(function() {
        $(".form_box span a").click(function() {

            var url = window.location.href.split("#")[0];

            var hsh = $(this).attr("href");

            var newHref = url.replace("header.html", "index.html") + hsh;
            parent.window.location.href = newHref;
        });

    })
    $(".search_btn").click(function(event) {
        var val = $(".search_val").val();

        if (val !== "") {
            // window.open("index.html#/search");
            var url = "index.html#/office_list?val=" + val;
            window.open(url);
        } else {
            parent.layer.msg("请输入搜索内容");
        }
    });

    function replace_phone(phone) {
        return phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3");
    }

    var app = angular.module("userApp", []);
    var ss = window.sessionStorage;
    app.controller("userCtr", function($scope) {
        $scope.clearUser = function() {
           if(window.confirm("你确定要注销么?")){

                    ss.removeItem("io");
                    if (ss.removeItem("io") == null) {
                         parent.layer.msg("注销成功");
                         $scope.entrance = true;
                         $scope.outrance = false;
                    }else {
                        parent.layer.msg("注销失败");
                    }
              
           }else{
                  
           }
            
           

           

        }
        $scope.entrance = true;
        $scope.outrance = false;
        var ss = window.sessionStorage;

        if (ss.getItem("io") != null) {
            $scope.entrance = false;
            $scope.outrance = true;
            var userInfo = JSON.parse(ss.getItem("io"));
            $scope.userid = userInfo.user_id;
            $scope.userphone =$("").text()+replace_phone(userInfo.user_phone);
            $scope.userlast = userInfo.user_last_login_time;

        } else {

        }

    })