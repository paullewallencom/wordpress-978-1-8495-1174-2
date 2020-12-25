jQuery(function(){ /*<- shortcut for document ready*/

/*----Read Me:

Chapter 4, jQuery Basics examples.

Read through chapter 4 and just un-comment and re-comment 
each line (or block!) of code to experiement with jQuery's 
basic functionality in WordPress. 

Have fun!

------------*/

jQuery(".entry-content a:has(img)").colorbox({height:"98%"});
	
jQuery("a[href*='register']").colorbox({iframe:true, width:"700px", height: "550px"});

});//end docReady