(function($) {
    $.imageFileVisible = function(options) {
        // 默认选项
        var defaults = {
            // 包裹图片的元素
            wrapSelector : null,
            // <input type=file />元素
            fileSelector : null,
            width : '100%',
            height : 'auto',
            errorMessage : "不是图片"
        };
        // Extend our default options with those provided.
        var opts = $.extend(defaults, options);
        $(opts.fileSelector).on("change", function() {
           
            var that=this;
            $.each(this.files,function(index, el) {
                
           
            var file = el;
            if(typeof(file)){

                $(opts.wrapSelector).html("");
            }
             var imgArr=[];
            var imageType = /image.*/;
            if (file.type.match(imageType)) {
                   
                  var reader = new FileReader();
                    reader.onload = function() {
                    var img = new Image();
                    img.src = reader.result;//图片的base64位编码
                    $(img).width(opts.width);
                    $(img).height(opts.height);
                   //imgArr.push(img)
                   $(opts.wrapSelector).append(img);
                    
                  
               };

               reader.readAsDataURL(file);
            } else {
                $(opts.wrapSelector).html("选择的不是图片，将不会上传！");


            }

           });  
        });
    };
})(jQuery);