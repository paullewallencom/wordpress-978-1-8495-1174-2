<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query. 
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */

get_header(); ?>

		<div id="container">
			<div id="content" role="main">
			
			<div id="ourStructure">
	<ul>
 <?php 
	   $postList = get_posts('category=4'); 
	   foreach($postList as $post): 
	      setup_postdata($post);
	      ?> 
	      <li><a href="#post-<?php the_ID(); ?>"><?php the_title(); ?></a></li> 
 <?php endforeach; ?> 
    </ul>
    
    <?php 
	   $postContent = get_posts('category=4'); 
	   foreach($postContent as $post): 
	      setup_postdata($post);
	      ?> 
	      <div id="post-<?php the_ID(); ?>"><h2><?php the_title(); ?></h2>
	      	<div class="entry">
					<?php the_content('Read the rest of this entry &raquo;'); ?>
			</div>

	      </div> 
 <?php endforeach; ?>
    
	</div><!--//end ourStructure-->

			<?php
			/* Run the loop to output the posts.
			 * If you want to overload this in a child theme then include a file
			 * called loop-index.php and that will be used instead.
			 */
			 get_template_part( 'loop', 'index' );
			?>
			</div><!-- #content -->
		</div><!-- #container -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
