
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
                this.curPath=location.hash.slice(1)||'/home'
                this.paths[this.curPath]()
            },
            init:function(){
                window.addEventListener('load',this.refresh.bind(this),false)
                window.addEventListener('hashchange',this.refresh.bind(this),false)
            }
        }
       
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
              $("#main").attr("src","estate.html")
        });
         r.path('/domestic',function(){
              $("#main").attr("src","domestic.html")
        });
        r.path('/About',function(){
              $("#main").attr("src","About.html")
        })
        r.path('/login',function(){
             $("#main").attr("src","login.html")
        });
         r.path('/regist',function(){
             $("#main").attr("src","regster.html")
        });
        r.init()


