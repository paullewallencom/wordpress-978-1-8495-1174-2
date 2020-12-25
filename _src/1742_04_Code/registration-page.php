<?php
/*
Template Name: Register Form
*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>

<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<?php wp_enqueue_script("jquery"); ?>
<?php wp_head(); ?>

<style type="text/css">
<!--
body{
	background-color: #fff;
	padding: 20px;
}
.cform fieldset{
	border:1px solid #036;
}

.success{
	font-size: 140%;
	font-weight: bold;
}

-->
</style>
</head>
<body>

	<div>
   <?php ?>
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div class="post" id="post-<?php the_ID(); ?>">
		<h2><?php the_title(); ?> for: <?php $evnt = esc_attr($_GET['evnt']); echo $evnt;?></h2>
			<div class="entry">
				<?php the_content('<p class="serif">Read the rest of this page &raquo;</p>'); ?>

				<?php wp_link_pages(array('before' => '<p><strong>Pages:</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>

			</div>
		</div>
		<?php endwhile; endif; ?>

<script type="text/javascript">

	jQuery(".cform :input").blur(function(){
	
	/*this if makes sure we don't target the submit btn or email field*/
	if (jQuery(this).val() != "Submit") { 
	
		/*this "if" targets empty fields*/
		if (jQuery(this).val().length == 0) {
		 	jQuery(this).after('<span class="wrong"> ! </span>');
		 	
		/*This "else if" targets if the field is the email field*/ 	
		}else if(jQuery(this).hasClass("fldemail") == true){
				
				var email = jQuery(this).val();
				
				/*Run's Steve's function and return true or false*/
				if(isValidEmailAddress(email)){
					
					jQuery(this).after('<span class="correct"> thanks. </span>');
					
				}else{
					
					jQuery(this).after('<span class="wrong"> ! </span>');
				}//if/else
				
		//end email check
		}else{
			/*otherwise field is fine*/
		  	jQuery(this).after('<span class="correct"> thanks. </span>');
		}//end if no length
		
	}//end if/else !submit

	});//end blur funct

	
	jQuery(".cform :input").focus(function(){
	   jQuery(this).next("span").remove();
	 	
	});//end focus funct
	
		function isValidEmailAddress(emailAddress) {
			 		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			 		return pattern.test(emailAddress);
	}//is valid email
</script>
	
</div>
<?php wp_footer(); ?>
</body>
</html>


