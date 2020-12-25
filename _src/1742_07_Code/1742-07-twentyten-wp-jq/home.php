<?php get_header(); ?>

	<div id="content" role="main" style="padding: 0 30px; width: 90%;">
	
	<div style="float:left; width: 380px;">
	<h2>What's new in WordPress Themes:</h2>
	<ul>
	<?php global $post; 
 $wpposts = get_posts('numberposts=5&category=6'); 
 foreach($wpposts as $post): 
      setup_postdata($post);?> 
      <li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li> 
 <?php endforeach; ?>
	</ul>
	</div>
	
	<div style="float:right; width: 380px">
	<h2>Inkscape: Draw freely covers it all</h2>
	<ul>
	<?php global $post; 
 $inkposts = get_posts('numberposts=5&category=7'); 
 foreach($inkposts as $post): 
      setup_postdata($post);?> 
      <li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li> 
 <?php endforeach; ?>
	</ul>
	</div>

	<div style="clear:both;">&nbsp;</div>
	
	</div><!--//content-->
	
<?php get_footer(); ?>	