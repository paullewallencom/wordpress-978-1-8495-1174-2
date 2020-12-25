/*
Author Hover Script Converted to jQuery Plugin

by Tessa Blakeley Silver

for WordPress and jQuery by
Packt Publishing
*/
jQuery.fn.authorHover = function(applyTo) { 
	return this.each(function(){

	if(applyTo){
		obj = applyTo
	}else{
		obj = "div";	
	}
	
	jQuery(this).find(obj).hide();

	    jQuery(this).css("cursor", "pointer").hover(function(){
			//jQuery(this).find(obj).css("position","absolute").css("margin-top","-10px").css("margin-left","-10px").css("width","400px").css("border", "1px solid #666").fadeIn("slow");
			jQuery(this).find(obj).addClass("authorBioHover").fadeIn("slow");
	    }, function(){
	    	jQuery(this).find(obj).fadeOut("slow");
	    
	    });  
	 });

};
