
        function Router(){
            this.paths={};
            this.curPath='';
        }
        Router.prototype={
            path:function(str,callback){
                var func=callback||function(){};
                this.paths[str]=func;
            },
            refresh:function(){
           
                this.curPath=String(location.hash.slice(1)).split("?")[0]||'/home'
                this.paths[this.curPath]()
            },
            init:function(){
                window.addEventListener('load',this.refresh.bind(this),false)
                window.addEventListener('hashchange',this.refresh.bind(this),false)
            }
        };
       
        var r=new Router();
        r.path('/',function(){
            $("#main").attr("src","home.html")
        });
        r.path('/home',function(){
            $("#main").attr("src","home.html")
        });
        r.path('/wedding',function(){
             $("#main").attr("src","wedding.html")
        });
        r.path('/estate',function(){
              $("#main").attr("src","estate.html");
        });
         r.path('/domestic',function(){
              // $("#main").attr("src","domestic.html");
              $("#main").attr("src","404.html");
        });
        r.path('/rent',function(){
              $("#main").attr("src","rent.html");
       
        });
        r.path('/About',function(){
              //$("#main").attr("src","About.html")
              $("#main").attr("src","404.html");
        });
         r.path('/office_list',function(){
              $("#main").attr("src","wedding_office.html");
       
        });
        r.path('/office_detail',function(){
              $("#main").attr("src","office_detail.html");
       
        });
         r.path('/user_detail',function(){
              $("#main").attr("src","user_detail.html");
       
        });
        r.path('/house_detail',function(){
              $("#main").attr("src","house_detail.html");
       
        });
        r.path('/rent_detail',function(){
              $("#main").attr("src","rent_detail.html");
       
        });
        r.path('/checkIn',function(){
              $("#main").attr("src","checkIn.html");
       
        });
         r.path('/login',function(){
              $("#main").attr("src","login.html");
       
        });
         r.path('/regster',function(){
              $("#main").attr("src","reg.html");
       
        });
        
        r.init();
console.log()


