
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
                          
        

        //--------TITLE ROW SCROLL------------------


        

        /*function $photoChanger(titlePic,photoList){
            for(i = 0; i < photoList.length; i+=1){
                //console.log("picture:"+photoList[i]);
                
                    var header = $('#title-row2');
                
                $(header).click(function(){
                    
                    var picNum = jQuery.inArray(titlePic);
                    console.log(picNum);
                    $(titlePic).css("background",photoList[picNum+1]);
                    console.log(picNum);
                });
            }
        }

        $photoChanger(titlePic,photoList);*/

        var titlePic = $('#title-row2').css("background");
        
        var photoList = [
            "url(AB%20office%20side%20view.jpg)",
            "url(Ridhmond photo.jpg)",
            "url(West%20Main%20pool.JPG)",
            "url(inwoodpool3.jpg)",
            "url(GetAttachment.jpg)"
        ];
        
        var photoList2 = [
            "GetAttachment.jpg",
            "AB%20office%20side%20view.jpg",
            "Ridhmond photo.jpg",
            "West%20Main%20pool.JPG",
            "inwoodpool3.jpg",
            "Takara%20So%20Elevation.jpg"
            
            
            
        ];

        

        

 /*       

        header.click(function(){
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $currentPic = $('#featurePic');
            $($currentPic).remove();
            
            function addPhoto(){
            $('#feature-contain').append($featurePic);
        }
            $($featurePic).remove();
            header.css("background","none");
            /*$('#feature-pic').append($featurePic);*/
/*            addPhoto();
            console.log($featurePic);
            i += 1;
                if (i == photoList2.length){
                    i = 0;
                };
            
        });

*/

       // header.click(function(){

        var header = $('.title-row');    

        var i = 0;

        var listEnd = photoList2.length-1
        
        var $photos = $('#feature-contain');


//-----------------------------------------------------RIGHT ARROW CLICK-----------------------
        
        var $leftarrow = $('#left-arrow');
        var $rightarrow = $('#right-arrow');

        function $scrollclick(){
            
            $('.hook').removeClass('title-row');
            $('.hook').addClass('title-row3');
            
            i += 1;
                if (i == photoList2.length){
                    i = 0;
                };
            //--------------------------------------IF I IS ZERO--------------------
            if (i == 0){
                
                var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
                
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[i+1]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
           
            
              
                //--------------------------------------IF I IS END OF ARRAY------------
                
            }else if (i == listEnd){
                
                var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd - 1]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[0]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
           
            
            
                //--------------------------------------IF I IS IN THE MIDDLE OF ARRAY----
                
            }else{
                
            var $lastPic = ('<div id="lastPic"><img src="'+photoList2[i-1]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[i+1]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
            //----------
            
            
            
            //-----------
            
            
            }
            
            //-----------
            function addPhoto(){
            
            $($photos).append($lastPic);
            $($photos).append($featurePic);
            $($photos).append($nextPic);
                
            
        }
            $($featurePic).remove();
            //header.css("background","none");
            $('#top-row').css("background-color","rgba(0,0,0,0)");
            /*$('#feature-pic').append($featurePic);*/
            addPhoto();
           // $('.nav-bar').css("margin-top","15em");
            
            $($lastPic).fadeIn("slow");
            
            
        }

        $rightarrow.click($scrollclick);
        $('#scroll').click($scrollclick);

//-----------------------------------------------------LEFT ARROW CLICK-----------------------

        $leftarrow.click(function(){
            
            $('.hook').removeClass('title-row');
            $('.hook').addClass('title-row3');
            
            i -= 1;
            if (i == -1){
                    i = listEnd;
            };
            //--------------------------------------IF I IS ZERO--------------------
            if (i == 0){
                
                var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[i+1]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
            //----------
            
            
            
            //-----------
            
                //--------------------------------------IF I IS LENGTH OF ARRAY------------
            }else if (i == listEnd){
                
                var $lastPic = ('<div id="lastPic"><img src="'+photoList2[listEnd - 1]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[0]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
            //----------
            
            
            
            //-----------
            
            
                //--------------------------------------IF I IS IN THE MIDDLE OF ARRAY------------
                
            }else{
                
            var $lastPic = ('<div id="lastPic"><img src="'+photoList2[i-1]+'"  </div>');
            
            var $featurePic = ('<div id="featurePic"><img src="'+photoList2[i]+'"  </div>');
            var $nextPic = ('<div id="nextPic"><img src="'+photoList2[i+1]+'"  </div>');
            /*if($('#nextPic img').attr("src","undefined")){
                console.log("undefined!");
              
            };*/
            //------------
            
            var $prevPic = $('#lastPic');
            var $currentPic = $('#featurePic');
            var $comingPic = $('#nextPic');
            //------------
            
            $($prevPic).remove();
            $($currentPic).remove();
            $($comingPic).remove();
            
            //----------
            
            
            
            //-----------
            
            
            }
            
            //-----------
            function addPhoto(){
            $($photos).append($lastPic);
            $($photos).append($featurePic);
            $($photos).append($nextPic);
                
        }
            $($featurePic).remove();
          //  header.css("background","none");
            $('#top-row').css("background-color","rgba(0,0,0,0)");
            
            addPhoto();     
            //$('body').off('click','.hook',morpher);
        });

            function classChange(){
                $('.hook').removeClass('title-row3');
                $('.hook').addClass('title-row');
                $('#top-row').css("background-color","rgba(0,0,0,.3)")
                   
                    
                }
            function morpher(){
                
                $('.hook').one('click',classChange);
                
            }
            
           $($leftarrow).on('click',morpher);
            $($rightarrow).on('click',morpher);
            
            if($('.hook').attr('class')=='title-row hook'){
                console.log('yes');
            $('.hook').click(function(){
            $('.hook').removeClass('title-row');
                $('.hook').addClass('title-row3');
            });
            };
            
            
            


 