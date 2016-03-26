
        var links = $(".nav-bar div");
        $(links).hover(function(){
            $(this).find("ul").css("display","block");
        },
                             function(){
             $(this).find("ul").css("display","none");
        });

        ///--------IMAGE LIGHTBOX---------

        var $overlay = $('<div id="overlay">');
        
        $('body').append($overlay);
        var $xbutton = $('<button id="x-button">x</button></div>');
        
        $('.picture-box a').click(function(event){
            event.preventDefault();
            var href = $(this).attr("href");
            var $picimage = $('<img id="picbox" src="' +href+'">');
            $overlay.append($xbutton);
            $overlay.append($picimage);
            $overlay.show();
        });
        
        function $picRemove(){
            $('#picbox').remove();
        }
       
        $($overlay).click(function(){
            $($overlay).css("display","none");
            $picRemove();
        });
        $($xbutton).click(function(){
            $($overlay).css("display","none");
            $picRemove();
        });
                          
        

