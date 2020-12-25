jQuery(function(){ /*<- shortcut for document ready*/

/*----Read Me:

Chapter 2, jQuery Basics examples.

Read through chapter 2 and just un-comment and re-comment 
each line (or block!) of code to experiement with jQuery's 
basic functionality in WordPress. 

Have fun!

------------*/

/////*initial test*/

	//jQuery("p").css("background", "#f60");
	
	
/////*basic selectors*/

    //jQuery(".post p").css("background", "#f60");
	//jQuery(".post > p").css("background", "#f60");
	//jQuery("li + li").css("background", "#f60");
	//jQuery("li ~ li").css("background", "#f60");
	
	
/////*basic filters*/

    //jQuery(":header").css("background", "#f60");
	//jQuery(":header:not(li :header)").css("background", "#f60");
	//jQuery(".widget_meta li:nth-child(odd)").css("background", "#f60");
	//jQuery("li:only-child").css("background", "#f60");
	//jQuery(".widget-area li:has(h3:contains('Meta')) ul").css("background", "#f60");
	//jQuery(":text, :submit").css("background", "#f60");

    
/////*attribute functions*/

	//jQuery(".widget-area [href^='http://localhost']").css("background", "#f60");	
	//jQuery(".post").addClass("sticky");	
	//jQuery(".post").append("<div style='text-align:right; border-bottom: 1px solid #333'>End of Post</div>");	
	//jQuery(".post a").removeAttr("href");
	

/////*dom*/

	/*
	
	alert("How many .posts does this blog page have? "+jQuery(".post").size());
	
	jQuery(".post").each(function(){
		alert("one alert for each .post")
	});
	
	*/

	
/////*events*/
	/*
	
	jQuery(".widget-area li ul li").hover(function(){
		jQuery(this).css("background", "#f60");//.hide().fadeIn("slow");
	},
	function(){
		jQuery(this).css("background", "none");
	});
	
	*/
	
	/*
	
	jQuery("#sidebar li ul li").bind("mouseenter", {color: "#f60"}, function(event){
			jQuery(this).css("background", event.data.color)
	});
	jQuery("#sidebar li ul li").bind("mouseleave", function(){
			jQuery(this).css("background", "none");
			jQuery(this).unbind("mouseenter");
	});
	
	*/
	
/////*event object*/

	/*
	
	jQuery(".post").click(function(event){
		jQuery(this).html("event type: "+event.type+"<br/>event timestamp: "+event.timeStamp+"<br/>event x: "+event.pageX+"<br/>event y: "+event.pageY);
	});
	
	*/

	//jQuery(".post").css("background", "#f60").hide().fadeIn("slow");
	
  
/////*animation*/
	    //jQuery(".post").animate({width: 200, opacity: .25}, 1000, function(){//code});
	    
	  /*
	  
	  jQuery(".post img").animate({
	    opacity: 0.25,
	    left: '+=50',
	    height: 'toggle'}, 1000, function() {
	    //alert("animate function finished");
	  });
	  
	  */
  
    //jQuery(".post").fadeTo("slow", .3);
    
/////*first project - expanding posts*/
    
    /*
    
    jQuery(".post .entry-content").hide();
    jQuery(".post").after("<div class='openIt' style='border-top: 1px solid #666; color: #069; text-align:right; cursor:pointer;'>Expand</div>");

	jQuery(".openIt").click(function() {
    	jQuery(this).prev(".post").find(".entry-content").slideToggle("slow");

    });
    
    jQuery(".openIt").toggle(closeText, expandText);
    
    function closeText(evt){
    		//alert("event: "+evt.target);
    		jQuery(evt.target).html("Close")
    } 
    function expandText(evt){
    		jQuery(evt.target).html("Expand")
    }
    
    */
   


});//end docReady